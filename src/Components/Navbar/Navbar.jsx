/* eslint-disable react/prop-types */
import React from "react";
import logo from "./logo.avif";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./navbar.scss";
export default function Navbar({ bascet }) {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    servicesSection.scrollIntoView({ behavior: "smooth" });
  };

  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    // التحقق مما إذا كان المستخدم قد قام بتسجيل الدخول
    const loggedInUserEmail = localStorage.getItem("loggedInUserEmail");
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const loggedInUser = users.find((user) => user.email === loggedInUserEmail);

    if (loggedInUser) {
      setUsername(loggedInUser.email);
      setLoggedIn(true);
    } else {
      setUsername("");
      setLoggedIn(false);
    }
  });

  const handleLogout = () => {
    setUsername("");
    setLoggedIn(false);
    localStorage.removeItem("loggedInUserEmail");
    toast.success("You have been logged out.");
    position: "top-center", (emailRef.current.value = "");
    passwordRef.current.value = "";

    navigate("/"); // Redirect to homepage or any other desired route after logout
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log("mobile", !isMenuOpen);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="  Navbar">
        <div className="image">
          <img src={logo} />
        </div>
        <div className="links">
          <ul className="nav_links ">
            <li>
              <Link to="/" className="home">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="about">
                About
              </Link>
            </li>
            <li>
              <Link to="/CatAll" className="about">
                Categery
              </Link>
            </li>
            <li>
              <Link to="/allpro" className="cat">
                Shop
              </Link>
            </li>
            <li>
              <Link className="serv" onClick={scrollToServices}>
                Services
              </Link>
            </li>
          </ul>
        </div>
        <div className="icon-button">
          <Link to="/shopping" className="link">
            <FontAwesomeIcon className="icon" icon={faCartShopping} />
            <span className=" bascet p-1">{bascet}</span>
          </Link>
          {loggedIn ? (
            <div className="d-flex gap-3 align-items-center m-0">
              {/* <p>{username}</p> */}
              <span className="btn btn-success" onClick={handleLogout}>
                (Logout)
              </span></div>
          ) : (
            <Link className="btn btn-success login" to="/login">
              Log In
            </Link>
          )}
          <FontAwesomeIcon
            className="fabar"
            icon={isMenuOpen ? faXmark : faBars}
            onClick={toggleMenu}
          />
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="dropdown-menu"
          style={{
            position: "absolute",

            zIndex: "1001",
            width: "100%",
            height: "auto",
            backgroundColor: "white",
            top: "55px",
            right: "0",
            display: "block",
          }}
        >
          <ul className="d-flex flex-column justify-content-center align-items-center p-1 gap-3">
            <li>
              <Link
                to="/"
                style={{ textDecoration: "none", color: "black" }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "black" }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/CatAll"
                style={{ textDecoration: "none", color: "black" }}
              >
                Categery
              </Link>
            </li>
            <li>
              <Link
                to="/allpro"
                style={{ textDecoration: "none", color: "black" }}
              >
                shop         
               </Link>
            </li>
            <li>
              <div className=" menu d-flex flex-column justify-content-center align-items-center d " style={{}}>
                <div className="d-flex ">
                  <Link to="/shopping" className="link">
                    <FontAwesomeIcon
                      className="icon"
                      style={{ color: "#13653f", paddingBottom: "10px" }}
                      icon={faCartShopping}
                    />
                  </Link>
                  <span
                    className=" pp "
                    style={{
                      position: "absolute",
                      top: "60%",
                      right: "45%",

                    }}
                  >
                    {bascet}
                  </span>
                </div>

                {loggedIn ? (
                  <span className=" btn btn btn-success" onClick={handleLogout}>
                    (Logout)
                  </span>
                ) : (
                  <Link className="btn btn-success" to="/login">
                    Log In
                  </Link>
                )}
              </div>
            </li>
          </ul>
        </div>
      )}

      <Toaster />
    </>
  );
}
