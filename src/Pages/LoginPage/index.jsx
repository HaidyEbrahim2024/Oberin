import { useRef, useState } from "react";
import "./index.scss";
import login from "./login.gif";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash, FaEnvelope } from 'react-icons/fa'; // استيراد أيقونة البريد الإلكتروني

export default function LoginPage() {
  const emailRef = useRef(); // استخدام useRef للإشارة إلى حقل البريد الإلكتروني
  const passwordRef = useRef(); // استخدام useRef للإشارة إلى حقل كلمة المرور
  const rememberIndexRef = useRef(); // استخدام useRef للإشارة إلى خانة "تذكرني"
  const navigate = useNavigate(); // استخدام useNavigate للتنقل بين الصفحات
  const [formErrors, setFormErrors] = useState({ email: '', password: '' }); // لحفظ الأخطاء في النموذج
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // حالة لإظهار/إخفاء كلمة المرور

  // دالة لتغيير كلمة المرور والتحقق من طولها
  const handleChangePassword = (event) => {
    const passVal = event.target.value;
    if (passVal.length >= 6) {
      setFormErrors((prev) => ({ ...prev, password: '' }));
    } else {
      setFormErrors((prev) => ({ ...prev, password: 'Password must be at least 6 characters long.' }));
    }
  };

  // دالة لتغيير البريد الإلكتروني والتحقق من وجود قيمة
  const handleChangeEmail = (event) => {
    const emailVal = event.target.value;
    if (emailVal === "") {
      setFormErrors((prev) => ({ ...prev, email: 'Please enter your email.' }));
    } else {
      setFormErrors((prev) => ({ ...prev, email: '' }));
    }
  };

  // دالة لإرسال النموذج والتحقق من صحة البيانات
  const handleSubmit = async (event) => {
    event.preventDefault(); // منع إعادة تحميل الصفحة عند الإرسال
    const emailVal = emailRef.current.value;
    const passVal = passwordRef.current.value;

    let isValid = true; // متغير للتحقق من صلاحية النموذج

    if (emailVal === "") {
      setFormErrors((prev) => ({ ...prev, email: 'Please enter your email.' }));
      isValid = false;
    }

    if (passVal.length < 6) {
      setFormErrors((prev) => ({ ...prev, password: 'Password must be at least 6 characters long.' }));
      isValid = false;
    }

    if (!isValid) return; // إذا كان النموذج غير صالح، نخرج من الدالة

    try {
      let userExists = await checkUserCredentials(emailVal, passVal);
      if (userExists) {
        localStorage.setItem("loggedInUserEmail", emailVal); // تخزين البريد الإلكتروني في التخزين المحلي
        toast.success("Logged In Successfully 👌");
        navigate("/CheckOut"); // التنقل إلى صفحة Checkout
      } else {
        throw new Error("User does not exist. Please register. 🤯");
      }
    } catch (error) {
      toast.error(error.message); // إظهار رسالة خطأ
      setFormErrors((prev) => ({ ...prev, password: 'Login failed. Please check your credentials.' }));
      setTimeout(() => {
        navigate("/register"); // الانتقال إلى صفحة التسجيل بعد فترة
      }, 5000);
    } finally {
      // تفريغ حقول الإدخال
      emailRef.current.value = "";
      passwordRef.current.value = "";
    }
  };

  // دالة للتحقق من بيانات المستخدم
  const checkUserCredentials = async (email, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        const userExists = storedUsers.some(
          (user) => user.email === email && user.password === password
        );
        resolve(userExists); // إرجاع ما إذا كان المستخدم موجودًا
      }, 1000);
    });
  };

  // دالة لتبديل رؤية كلمة المرور
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <div className="LoginPage d-flex justify-content-center align-items-center">
      <div className="img col-6 d-flex justify-content-center align-items-center">
        <img src={login} className="col-7 image" alt="Login" />
      </div>
      <div id="Loginpage">
        <form onSubmit={handleSubmit}>
          <div className="form">
            <div className="father col-12">
              <h3 className="text-start col-12">Log In</h3>

              <label htmlFor="Email">Email</label>
              <div className="email-container">
                <FaEnvelope className="email-icon" />
                <input
                  id="Email"
                  ref={emailRef}
                  type="text"
                  placeholder="Enter Your Email"
                  name="email"
                  className="input"
                  onChange={handleChangeEmail}
                />
              </div>
              {formErrors.email && (
                <p id="Email-warning" style={{ color: "red", fontSize: "14px" }}>
                  {formErrors.email}
                </p>
              )}

              <label htmlFor="Password">Password:</label>
              <div className="password-container">
                <input
                  id="Password"
                  ref={passwordRef}
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  className="input"
                  onChange={handleChangePassword}
                />
                <span className="password-toggle" onClick={togglePasswordVisibility}>
                  {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {formErrors.password && (
                <p id="password-warning" style={{ color: "red", fontSize: "14px" }}>
                  {formErrors.password}
                </p>
              )}

              <div className="d-flex gap-2">
                <label htmlFor="rememberme">Remember Me</label>
                <input
                  type="checkbox"
                  ref={rememberIndexRef}
                  id="rememberme"
                />
              </div>

              <div className="d-flex justify-content-start col-12">
                <button className="btn btn-success my-3 col-12">Log In</button>
              </div>
              <div className="d-flex">
                <p>Do you not have an account?</p>
                <Link to="/register">Register</Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
