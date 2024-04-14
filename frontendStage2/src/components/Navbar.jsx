import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/util";
import "bootstrap/js/dist/dropdown";
import "bootstrap/dist/js/bootstrap";
import logo from "../images/logo.png";
import "../App.css";

const Navbar = (props) => {
  return (
    <div>
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <img className="logo-cont me-2" src={logo} alt="edTech" />

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="/" className="nav-link px-2 text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/courses" className="nav-link px-2 text-white">
                  Courses
                </a>
              </li>
              <li>
                <a href="/about" className="nav-link px-2 text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="nav-link px-2 text-white">
                  Contact Us
                </a>
              </li>
            </ul>

            <div className="text-end">
              {props.isLoggedIn ? (
                <>
                  <a
                    href="/profile"
                    type="button"
                    className="btn btn-warning me-2"
                  >
                    Profile
                  </a>
                  <a
                    href="/login"
                    type="button"
                    className="btn btn-danger"
                    onClick={() => props.setIsLoggedIn(false)}
                  >
                    Logout
                  </a>
                </>
              ) : (
                <>
                  <a
                    href="/login"
                    type="button"
                    className="btn btn-outline-light me-2"
                  >
                    Login
                  </a>
                  <a href="/sign" type="button" className="btn btn-warning">
                    Registration
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
