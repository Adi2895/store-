import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
export default function footer(props) {
  
  return (
    <>
      

      <footer style={{marginBottom:"0px"}} class="bg-dark text-light pt-5">
        <div class="container">
          <div class="f-items default-padding">
            <div class="row">
              <div class="col-lg-4 col-md-6 single-item">
                <div class="f-item widget_dustra_contact_widget">
                  <div class="f-item contact">
                    <h4 class="widget-title">Contact Us</h4>
                    <p>Manoj Grocery Store</p>
                    <ul>
                      <li>
                        <i class="fas fa-map-marker-alt mx-2"></i>
                        Manoj Grocery Store, Main Road Nissing(Karnal), Haryana
                        Pincode: 132024 <br/>
                        Mob: +918930754937
                      </li>
                      <li>
                        <i class="fas fa-envelope-open"></i>
                        <a  href="mailto:http://manojkashyap3249@gmail.com">
                        manojkashyap3249@gmail.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>{" "}
              </div>

              {/* Usefull links */}
              <div class="col-lg-2 col-md-6 single-item">
                <div class="f-item widget_nav_menu">
                  <h4 class="widget-title">Useful Links</h4>
                  <div class="menu-services-menu-container">
                    <ul id="menu-services-menu" class="menu">
                      <li
                        id="menu-item-2072"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2072"
                      >
                        <NavLink href="/"
                        onClick={props.homeHandle}>
                          About Us
                        </NavLink>
                      </li>
                      <li
                        id="menu-item-2074"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2074"
                      >
                        <NavLink onClick={props.techHandle} href="/">
                          Gallery
                        </NavLink>
                      </li>
                      <li
                        id="menu-item-2073"
                        class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-132 current_page_item menu-item-2073"
                      >
                        <NavLink
                        onClick={props.contactHandle}
                          href="/"
                          aria-current="page"
                        >
                          Contact Us
                        </NavLink>
                      </li>
                      <li
                        id="menu-item-2075"
                        class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-2075"
                      >
                        <NavLink
                          href="http://www.panchalstore.com/contact/"
                          aria-current="page"
                          onClick={props.contactHandle}
                        >
                          For Enquiry
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>{" "}
              </div>
          
             
            </div>
          </div>
        </div>

        
        <div
        className=""
        style={{
         
          paddingTop: "10%",
          textAlign: "center",
          height: "300px",
          display: "block",
        }}
      >
        <div className="social-icons">
          
          <h4
            style={{
              color: "white",
              fontSize: "0.9rem",
              letterSpacing: "4px",
              paddingTop: "20px",
            }}
            className="footer-text"
          >
            ©<span id="date">2023</span>
            <span className="company">
              <Link to="/" style={{ textDecoration: "none" }} target="_blank">
                {" "} <div class="col-lg-4 col-md-6 single-item">
               
              </div>
                Manoj Grocery Store{" "}
              </Link>
            </span>
            ALL RIGHTS RESERVED
          </h4>
        </div>
      </div>
        
      </footer>
    </>
  );
}
