import React, { useState } from "react";
import "./AuthModal.css";

const AuthModal = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true); 

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>

        <form>
          {!isLogin && (
            <input type="text" placeholder="Full Name" required />
          )}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          {!isLogin && (
            <input type="password" placeholder="Confirm Password" required />
          )}
          <button className="auth-btn">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span
            className="toggle-auth"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? " Sign Up" : " Login"}
          </span>
        </p>

        <button className="close-btn" onClick={onClose}>✖</button>
      </div>
    </div>
  );
};

export default AuthModal;
