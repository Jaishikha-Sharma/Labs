import React, { useState, useEffect } from "react";
import "./Header.css";
import AuthModal from "../login/AuthModal.jsx";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const closeMenu = () => {
    document.getElementById("check").checked = false;
  };
  const handleAuth = ({ token, name }) => {
    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("name", name);
      setIsLoggedIn(true);
      setName(name || "User");
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    setIsLoggedIn(false);
    setName("");
    navigate("/");
  };
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedName = localStorage.getItem("name");

    if (storedToken) {
      setIsLoggedIn(true);
      setName(storedName || "User");
    }
  }, []);

  return (
    <header>
      <div className="top-contact-bar">
        <div className="contact-info">
          <span>
            <i className="fas fa-phone"></i> +91 8949873474
          </span>
          <span>
            <i className="fas fa-envelope"></i> ecmalab2021@gmail.com
          </span>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>
      <div className="container">
        <input type="checkbox" name="check" id="check" />
        <div className="logo-container">
          <Link to="/" onClick={closeMenu}>
            <img src="/logoHome.png" alt="logo" style={{ width: "70px" }} />
          </Link>
        </div>
        <div className="nav-btn">
          <div className="nav-links">
            <ul>
              <li className="nav-link" style={{ "--i": ".6s" }}>
                <Link to="/" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              {isLoggedIn && (
                <li className="nav-link" style={{ "--i": "1.35s" }}>
                  <Link
                    style={{ color: "white" }}
                    to="/dashboard"
                    onClick={closeMenu}
                  >
                    Dashboard
                  </Link>
                </li>
              )}
             <li className="nav-link" style={{ "--i": "1.35s" }}>
                <Link to="/about" onClick={closeMenu}>
                  About
                  <i className="fas fa-caret-down"></i>
                </Link>
                <div className="dropdown">
                  <ul>
                    <li className="dropdown-link">
                      <Link to="/what-we-are" onClick={closeMenu}>
                        What We Are
                      </Link>
                    </li>
                    <li className="dropdown-link">
                      <Link to="/mission" onClick={closeMenu}>
                        Our Mission
                      </Link>
                    </li>
                    <li className="dropdown-link">
                      <Link to="/vision" onClick={closeMenu}>
                        Our Vision
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-link" style={{ "--i": ".85s" }}>
                <Link to="/services" onClick={closeMenu}>
                  Services <i className="fas fa-caret-down"></i>
                </Link>
                <div className="dropdown">
                  <ul>
                    <li className="dropdown-link">
                      <Link to="/water-Testing" onClick={closeMenu}>
                        Water Testing
                      </Link>
                    </li>
                    <li className="dropdown-link">
                      <Link to="/soil-testing" onClick={closeMenu}>
                        Soil Testing
                      </Link>
                    </li>
                    <li className="dropdown-link">
                      <Link to="/food-testing" onClick={closeMenu}>
                        Food Testing
                      </Link>
                    </li>
                    <li className="dropdown-link">
                      <Link to="/metals" onClick={closeMenu}>
                        Metal & Alloy Testing
                      </Link>
                    </li>
                    <li className="dropdown-link">
                      <Link to="/Enviornment-testing" onClick={closeMenu}>
                        Enviornmental Testing
                      </Link>
                    </li>
                    <li className="dropdown-link">
                      <Link to="/coke-testing" onClick={closeMenu}>
                        Coal & Coke Testing
                      </Link>
                    </li>
                    <li className="dropdown-link">
                      <Link to="/building-analysis" onClick={closeMenu}>
                        Building-analysis
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-link" style={{ "--i": "1.35s" }}>
                <Link to="/gallery" onClick={closeMenu}>
                  Gallery
                </Link>
              </li>
              <li className="nav-link" style={{ "--i": "1.35s" }}>
                <Link to="/certificates" onClick={closeMenu}>
                  Certificates
                </Link>
              </li>
              <li className="nav-link" style={{ "--i": "1.35s" }}>
                <Link to="/blogs" onClick={closeMenu}>
                  Blogs
                </Link>
              </li>
              <li className="nav-link" style={{ "--i": "1.35s" }}>
                <Link to="/contact" onClick={closeMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="search-profile">
          <input
            type="text"
            className="search-input"
            placeholder="Type to start search"
          />
          {isLoggedIn ? (
            <div className="profile-info">
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <div className="profile-icon" onClick={() => setIsModalOpen(true)}>
              <i className="fas fa-user"></i>
            </div>
          )}
        </div>
        <div className="hamburger-menu-container">
          <div className="hamburger-menu">
            <div></div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <AuthModal onClose={() => setIsModalOpen(false)} onAuth={handleAuth} />
      )}{" "}
    </header>
  );
};

export default Header;
