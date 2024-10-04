import { useRef, useState } from "react";
import "./index.scss"; // Ensure you're importing the same styles
import login from "./login.gif";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { FaEye, FaEyeSlash, FaEnvelope } from 'react-icons/fa';

export default function Register() {
  const email = useRef();
  const password = useRef();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({}); // Initialize formErrors

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prev => !prev);
  };

  function validateEmail(email) {
    // Basic email validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function handleregister(event) {
    event.preventDefault();
    const emailVal = email.current.value;
    const passVal = password.current.value;

    // Validate email
    if (!validateEmail(emailVal)) {
      setFormErrors({ email: "Invalid email format" });
      return;
    }

    // Validate password (for example, check length)
    if (passVal.length < 6) {
      setFormErrors({ password: "Password must be at least 6 characters long" });
      return;
    }

    const newInfo = { email: emailVal, password: passVal };
    const clients = JSON.parse(localStorage.getItem("users")) || [];
    clients.push(newInfo);
    localStorage.setItem("users", JSON.stringify(clients));
    toast.success("Registration successful! Please login.", {
      position: "top-center",
    });
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  }

  return (
    <>
      <div className="LoginPage d-flex justify-content-center align-items-center">
        <div className="img col-6 d-flex justify-content-center align-items-center">
          <img src={login} className="col-7" alt="Login" />
        </div>
        <div id="Loginpage">
          <form onSubmit={handleregister}>
            <div className="form">
              <div className="father col-12">
                <h3 className="text-start col-12">Register</h3>

                <label htmlFor="Email">Email</label>
                <div className="email-container">
                  <FaEnvelope className="email-icon" />
                  <input
                    id="Email"
                    ref={email}
                    type="text"
                    placeholder="Enter Your Email"
                    name="email"
                    className="input"
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
                    ref={password}
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                    className="input"
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
                
                <div className="d-flex justify-content-start col-12">
                  <button className="btn btn-success my-3">Register</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </>
  );
}
