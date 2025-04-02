import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import AuthModal from "../login/AuthModal.jsx";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header>
      <div className="container">
        <input type="checkbox" name="check" id="check" />
        <div className="logo-container">
          <img src="https://i.imgur.com/njJQdAg.png"alt="logo" style={{width:"68px"}}/>
        </div>
        <div className="nav-btn">
          <div className="nav-links">
            <ul>
              <li className="nav-link" style={{ "--i": ".6s" }}>
                <Link to="/">Home</Link>
              </li>
              <li className="nav-link" style={{ "--i": ".85s" }}>
                <Link to="#">
                  Services <i className="fas fa-caret-down"></i>
                </Link>
                <div className="dropdown">
                  <ul>
                    <li className="dropdown-link">
                      <Link to="#">Link 1</Link>
                    </li>
                    <li className="dropdown-link">
                      <Link to="#">Link 2</Link>
                    </li>
                    <li className="dropdown-link">
                      <Link to="#">
                        Link 3 <i className="fas fa-caret-down"></i>
                      </Link>
                    </li>
                    <li className="dropdown-link">
                      <Link to="#">Link 4</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-link" style={{ "--i": "1.35s" }}>
                <Link to="/about">Galllery</Link>
              </li>
              <li className="nav-link" style={{ "--i": "1.35s" }}>
                <Link to="/about">Certificates</Link>
              </li>
              <li className="nav-link" style={{ "--i": "1.35s" }}>
                <Link to="/about">Blogs</Link>
              </li>
              <li className="nav-link" style={{ "--i": ".85s" }}>
                <Link to="#">
                  About <i className="fas fa-caret-down"></i>
                </Link>
                <div className="dropdown">
                  <ul>
                    <li className="dropdown-link">
                      <Link to="#">Link 1</Link>
                    </li>
                    <li className="dropdown-link">
                      <Link to="#">Link 2</Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="search-profile">
          <input type="text" className="search-input" placeholder="Type to start search" />
          <button className="search-btn">Search</button>
          <div className="profile-icon" onClick={() => setIsModalOpen(true)}>
            <i className="fas fa-user"></i>
          </div>
        </div>
        <div className="hamburger-menu-container">
          <div className="hamburger-menu">
            <div></div>
          </div>
        </div>{" "}
      </div>
      {isModalOpen && <AuthModal onClose={() => setIsModalOpen(false)} />}
    </header>
  );
};

export default Header;
