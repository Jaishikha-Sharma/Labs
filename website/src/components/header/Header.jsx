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
      <div className="container">
        <input type="checkbox" name="check" id="check" />
        <div className="logo-container">
          <img
            src="https://i.imgur.com/njJQdAg.png"
            alt="logo"
            style={{ width: "68px" }}
          />
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
                </Link>
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
                      <Link to="/herbal-testing" onClick={closeMenu}>
                        Herbal Testing
                      </Link>
                    </li>
                    <li className="dropdown-link">
                      <Link to="/Enviornment-testing" onClick={closeMenu}>
                        Enviornmental Testing
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
