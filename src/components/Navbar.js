import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./static/Anil Grocery Store_logo.png"
export default function Navbar(props) {


  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <NavLink
          onClick={props.handleClick}
          className="navbar-brand mx-3"
          href="/"
        >
          Anil Grocery Store
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink
                onClick={props.homeHandle}
                className="nav-link mx-3"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                onClick={props.techHandle}
                className="nav-link mx-3"
                to="/"
              >
                Our Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                onClick={props.contactHandle}
                className="nav-link mx-3"
                to="/"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div style={{backgroundColor:"gray", marginTop:"70px"}} class="topbar-style-three">
        <div class="container">
          <div class="row">
            <div class="col-md-3 logo">
              <a href="https://www.panchalstore.com/">
                <img 
                    height="150px"
                    width="150px"
                  src={logo}
                  class="logo"
                  alt="dustra"
                />
              </a>
            </div>
            {/* <div class="col-md-3 address-info text-right">
              <div class="info box">
              </div>
            </div> */}

            <div className="col-md-3 pt-3">
            <div class="icon">
                      <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div class="info">
                      <span>Address</span> Anil Srocery Store,
                      Jind, Dhanauri{" "}
                    </div>
            </div>

            <div className="col-md-3 pt-3">
            <div class="icon">
                      <i class="fas fa-envelope-open-text"></i>
                    </div>
                    <div class="info">
                      <span>Email</span>aniljaist93062@gmail.com{" "}
                    </div>
            </div>

            <div className="col-md-3 pt-3">
            <div class="icon">
                      <i class="fas fa-headphones-alt"></i>
                    </div>
                    <div class="info">
                      <span>Phone</span> 7056527098{" "}
                    </div>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
}
