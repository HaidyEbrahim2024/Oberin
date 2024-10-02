// import { useRef, useState } from "react";
// import "./index.scss";
// import login from "./login.gif";

// import { Link, useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

// export default function LoginPage() {
//   const emailRef = useRef();
//   const passwordRef = useRef();
//   const rememberIndexRef = useRef();
//   const navigate = useNavigate();
//   const [showPasswordWarning, setShowPasswordWarning] = useState(false);
//   const [showEmailWarning, setShowEmailWarning] = useState(false);

//   const handleChangePassword = (event) => {
//     const passVal = event.target.value;
//     // Check password conditions
//     if (passVal.length >= 6) {
//       setShowPasswordWarning(false);
//     } else {
//       setShowPasswordWarning(true);
//       setShowEmailWarning(false);
//     }
//   };
//   const handelChangeEnail = (event) => {
//     const emailVal = event.target.value;
//     if (emailVal === "") {
//       setShowEmailWarning(true);
//       setShowPasswordWarning(false);
//     } else {
//       setShowEmailWarning(false);
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const emailVal = emailRef.current.value;
//     const passVal = passwordRef.current.value;
//     //عشان لما اضغط على لوجيت والشروط مش متحققة
//     if (passVal.length < 6) {
//       setShowPasswordWarning(true); // عرض رسالة التحذير عندما يكون طول كلمة المرور أقل من 6 أحرف
//       setShowEmailWarning(false);
//     }

//     if (emailVal === "") {
//       setShowEmailWarning(true);
//       setShowPasswordWarning(false);
//     }

//     try {
//       let userExists = await checkUserCredentials(emailVal, passVal);
//       if (userExists) {
//         emailRef.current.value = "";
//         passwordRef.current.value = "";
//         localStorage.setItem("loggedInUserEmail", emailVal);
//         toast.success("Logged In Successfully 👌");
//         navigate("/CheckOut"); // توجيه مباشرة إلى صفحة التسوق بعد تسجيل الدخول الناجح
//       } else {
//         throw new Error("User does not exist. Please register. 🤯");
//       }
//     } catch (error) {
//       toast.error(error.message);
//       setShowPasswordWarning(true); // إظهار رسالة التحذير عند فشل تسجيل الدخول
//       setTimeout(() => {
//         setShowPasswordWarning(false); // إخفاء رسالة التحذير بعد مرور فترة زمنية
//         navigate("/register");
//       }, 5000);
//     }
//   };
  
//   const checkUserCredentials = async (email, password) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
//         const userExists = storedUsers.some(
//           (user) => user.email === email && user.password === password
//         );
//         resolve(userExists);
//       }, 1000);
//     });
//   };

//   return (
//     <div className="LoginPage d-flex justify-content-center align-items-center">
//       <div className="img col-6 d-flex justify-content-center align-items-center">
//         <img src={login} className="col-7 image" alt="Login" />
//       </div>
//       <div id="Loginpage">
//         <form onSubmit={handleSubmit}>
//           <div className="form">
//             <div className="father col-12">
//               <h3 className="text-start col-12 ">Log In </h3>

//               <label htmlFor="Email"> Email </label>
//               <input
//                 id="Email"
//                 ref={emailRef}
//                 type="text"
//                 placeholder="ُEnter Your Email"
//                 name="email"
//                 className="input"
//                 onChange={handelChangeEnail}
//               />
//               {showPasswordWarning && (
//                 <p
//                   id="Email-warning"
//                   style={{ color: "red", fontSize: "14px", display: "block" }}
//                 >
//                   Please Enter Your Email{" "}
//                 </p>
//               )}

//               <label htmlFor="Password"> Password: </label>
//               <input
//                 id="Password"
//                 ref={passwordRef}
//                 type="password"
//                 placeholder=" Password "
//                 name="password"
//                 className="input"
//                 onChange={handleChangePassword}
//               />
//               {showPasswordWarning && (
//                 <p
//                   id="password-warning"
//                   style={{ color: "red", fontSize: "14px", display: "block" }}
//                 >
//                   Password must be at least 6 characters long
//                 </p>
//               )}

//               <div className="d-flex gap-2">
//                 <label htmlFor="rememberme">Remember Me</label>
//                 <input
//                   type="checkbox"
//                   ref={rememberIndexRef}
//                   name=""
//                   id="rememberme"
//                 />
//               </div>

//               <div className="d-flex justify-content-start col-12">
//                 <button className="btn btn-success my-3 col-12">Log In </button>
//               </div>
//               <div className="d-flex">
//                 <p>Do you not have an account?</p>
//                 <Link to="/register">Register</Link>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
import { useRef, useState } from "react";
import "./index.scss";
import login from "./login.gif";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function LoginPage() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const rememberIndexRef = useRef();
  const navigate = useNavigate();
  const [showPasswordWarning, setShowPasswordWarning] = useState(false);
  const [showEmailWarning, setShowEmailWarning] = useState(false);
  const [formErrors, setFormErrors] = useState({ email: '', password: '' });

  const handleChangePassword = (event) => {
    const passVal = event.target.value;
    if (passVal.length >= 6) {
      setShowPasswordWarning(false);
    } else {
      setShowPasswordWarning(true);
      setFormErrors((prev) => ({ ...prev, password: '' }));
    }
  };

  const handleChangeEmail = (event) => {
    const emailVal = event.target.value;
    if (emailVal === "") {
      setShowEmailWarning(true);
      setFormErrors((prev) => ({ ...prev, email: 'Please enter your email.' }));
    } else {
      setShowEmailWarning(false);
      setFormErrors((prev) => ({ ...prev, email: '' }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const emailVal = emailRef.current.value;
    const passVal = passwordRef.current.value;

    let isValid = true;
    if (passVal.length < 6) {
      setShowPasswordWarning(true);
      setFormErrors((prev) => ({ ...prev, password: 'Password must be at least 6 characters long.' }));
      isValid = false;
    } else {
      setFormErrors((prev) => ({ ...prev, password: '' }));
    }

    if (emailVal === "") {
      setShowEmailWarning(true);
      setFormErrors((prev) => ({ ...prev, email: 'Please enter your email.' }));
      isValid = false;
    } else {
      setFormErrors((prev) => ({ ...prev, email: '' }));
    }

    if (!isValid) return; // Stop if the form is not valid

    try {
      let userExists = await checkUserCredentials(emailVal, passVal);
      if (userExists) {
        emailRef.current.value = "";
        passwordRef.current.value = "";
        localStorage.setItem("loggedInUserEmail", emailVal);
        toast.success("Logged In Successfully 👌");
        navigate("/CheckOut");
      } else {
        throw new Error("User does not exist. Please register. 🤯");
      }
    } catch (error) {
      toast.error(error.message);
      setShowPasswordWarning(true);
      setFormErrors((prev) => ({ ...prev, password: 'Login failed. Please check your credentials.' }));
      setTimeout(() => {
        setShowPasswordWarning(false);
        navigate("/register");
      }, 5000);
    }
  };

  const checkUserCredentials = async (email, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        const userExists = storedUsers.some(
          (user) => user.email === email && user.password === password
        );
        resolve(userExists);
      }, 1000);
    });
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
              <input
                id="Email"
                ref={emailRef}
                type="text"
                placeholder="ُEnter Your Email"
                name="email"
                className="input"
                onChange={handleChangeEmail}
              />
              {formErrors.email && (
                <p id="Email-warning" style={{ color: "red", fontSize: "14px" }}>
                  {formErrors.email}
                </p>
              )}

              <label htmlFor="Password">Password:</label>
              <input
                id="Password"
                ref={passwordRef}
                type="password"
                placeholder="Password"
                name="password"
                className="input"
                onChange={handleChangePassword}
              />
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
                  name=""
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
