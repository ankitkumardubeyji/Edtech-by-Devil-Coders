import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/util";
import "bootstrap/js/dist/dropdown";
import "bootstrap/dist/js/bootstrap";
import logo from "../images/logo.png"
import "../App.css"
const Navbar = () => {
  const isLoggedIn =true;
  return (
    <div>
      <header class="p-3 text-bg-dark">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
     
        <img className="logo-cont me-2" src={logo} alt="edTech" />
        

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="/" class="nav-link px-2 text-white">Home</a></li>
          <li><a href="/" class="nav-link px-2 text-white">Courses</a></li>
          <li><a href="/about" class="nav-link px-2 text-white">About Us</a></li>
         
        </ul>

      
        <div class="text-end">
          {isLoggedIn?(<><button type="button" class="btn btn-warning me-2">Profile</button>
          <button type="button" class="btn btn-danger">Logout</button>
          </>):(<><button type="button" class="btn btn-outline-light me-2">Login</button>
          <button type="button" class="btn btn-warning">Registration</button></>)}
        </div>
      </div>
    </div>
  </header>
    </div>
  )
}

export default Navbar
