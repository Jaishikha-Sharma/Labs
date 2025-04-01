import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/images/headerlogo-1.jpg";
import HeaderImg from "../../assets/images/top-bg.webp";
const Header = () => {
  return (
    <header className="header">
      <div
        className="top-bar"
        style={{
          backgroundImage: `url(${HeaderImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{ width: "25%", marginLeft: "30px" }}
        />
        <div className="contact-info font-size">
          <Link style={{ color: "white" }} to="/contact">
            Contact Us
          </Link>
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
        <div className="navbar-container container">
          <input type="checkbox" id="menu-toggle" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="menu-items">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Our Services</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/certificates">Certificates</Link>
            </li>
          </ul>
        </div>
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
