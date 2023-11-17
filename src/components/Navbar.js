import React, { useState } from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import {
    GiHamburgerMenu
} from "react-icons/gi";
import "./Navbar.css";
import { MdCancel } from "react-icons/md";

const Navbar = () => {
    const [value,setValue] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* This is lohgo section */}
        <div className="logo-section">
          <div className="logo">
            <h2>
            <span>A</span>rshad
            </h2>
          </div>
        </div>
        {/* This is the Link Section */}
        <div className="action-section">
          <ul >
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">AboutUs</a>
            </li>
            <li>
              <a href="#">ContactUs</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
          </ul>
        </div>
        
        {/* This is the Social section for desktop */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="#">
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a href="#"> 
                <FaInstagramSquare />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitterSquare />
              </a>
            </li>
          </ul>
          <div className="hamburger-menu">
            <a href="#" onClick={()=>setValue(!value)}><GiHamburgerMenu/></a>
          </div>
        </div>
      </nav>
      <div className={value?"mobile":"off"}>
        <ul >
            <li className="li1">
              <a href="#">Home</a>
            </li>
            <li className="li2">
              <a href="#">AboutUs</a>
            </li>
            <li className="li3">
              <a href="#">ContactUs</a>
            </li>
            <li className="li4">
              <a href="#">Services</a>
            </li>
            <li className="li5">
              <a href="#" onClick={()=>setValue(!value)}><MdCancel /></a>
            </li>
          </ul>
        </div>
    </>
  );
};

export default Navbar;
