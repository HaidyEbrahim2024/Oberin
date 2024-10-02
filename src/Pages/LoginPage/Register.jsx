import { useRef } from "react";
// import "./index.scss";
import login from "./login.gif";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const rememberIndex = useRef();
  const navigate = useNavigate();
  


  function handleregister(event) {
    event.preventDefault();
    // const usernameVal = username.current.value;
    const emailVal = email.current.value;
    const passVal = password.current.value;
    const newInfo = {
      // userName: usernameVal,
      email: emailVal,
      password: passVal,
    };
    const clients = JSON.parse(localStorage.getItem("users")) || [];
    clients.push(newInfo);
    localStorage.setItem("users", JSON.stringify(clients));
    toast.success("Registration successful! Please login.", {
      position: "top-center",
      // autoClose: 1200,
    });
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  }
  return (
    <>
      <div className="LoginPage d-flex justify-content-center align-items-center">
        <div className="img col-6 d-flex Justify-content-center justify-content-center align-items-center">
          <img src={login} className="col-7" />
        </div>
        <div id="Loginpage">
          <form onSubmit={handleregister}>
            <div className="form">
              <div className="father col-12">
                <h3 className=" col-12 ">Register</h3>
                {/* <label htmlFor="user">User Name</label>
                <input
                  ref={username}
                  id="user"
                  type="text"
                  placeholder="User Name"
                  name="user"
                  className="input"
                /> */}

                <label htmlFor="Email">Email</label>
                <input
                  id="Email"
                  ref={email}
                  type="text"
                  placeholder="Enter Your Email"
                  name="email"
                  className="input"
                />

                <label htmlFor="Password">Password: </label>
                <input
                  id="Password"
                  ref={password}
                  type="password"
                  placeholder="Enter Your Password"
                  name="password"
                  className="input"
                />
                <div className="d-flex gap-2">
                  <label htmlFor="rememberme">Remember Me</label>
                  <input
                    type="checkbox"
                    ref={rememberIndex}
                    name=""
                    id="rememberme"
                  />
                </div>

                <div className="d-flex justify-content-start col-12">
                  <button className="btn btn-success my-3">Register</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Toaster/>
    </>
  );
}
