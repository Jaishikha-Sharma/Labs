import React from "react";
import { Link } from "react-router-dom"; 
import "./Header.css";
import logo from "../../assets/images/headerlogo-1.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="top-bar">
        <img src={logo} alt="Logo" className="logo" />
        <div className="contact-info font-size">
          <span>Contact Us</span>
          <span className="icon-bg">
            <i className="fas fa-phone"></i>
          </span>
          +91 7357668997
          <span className="icon-bg">
            <i className="fas fa-envelope"></i>
          </span>
          jagdambalab4@gmail.com
        </div>
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT US</Link>
          </li>
          <li>
            <Link to="/services">OUR SERVICES</Link>
          </li>
          <li>
            <Link to="/gallery">GALLERY</Link>
          </li>
          <li>
            <Link to="/certificates">CERTIFICATES</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT US</Link>
          </li>
        </ul>
        <div className="nav-right">
          <div className="search-container">
            <i className="fas fa-map-marker-alt location-icon"></i>
            <input
              type="text"
              placeholder="Search Location"
              className="search-input"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
