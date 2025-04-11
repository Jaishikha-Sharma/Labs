import React, { useState } from "react";
import axios from "axios";
import "./AuthModal.css";

const AuthModal = ({ onClose, onAuth = () => {} }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLogin) {
      const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
      const phoneRegex = /^\d{10}$/;

      if (!gmailRegex.test(formData.email)) {
        alert("Please enter a valid Gmail address (e.g., yourname@gmail.com).");
        return;
      }

      if (!phoneRegex.test(formData.phone)) {
        alert("Phone number must be exactly 10 digits.");
        return;
      }

      if (formData.password.length < 10) {
        alert("Password must be at least 10 characters long.");
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
    }

    try {
      const BASE_URL =
        window.location.hostname === "localhost"
          ? "http://localhost:5000"
          : "https://auth-backend-ombp.onrender.com";

      const url = isLogin
        ? `${BASE_URL}/api/auth/login`
        : `${BASE_URL}/api/auth/register`;

      const payload = isLogin
        ? { email: formData.email, password: formData.password }
        : {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            password: formData.password,
          };

      const response = await axios.post(url, payload);

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        onAuth({ token: response.data.token });
        alert(isLogin ? "Login successful!" : "Signup successful!");
        onClose();
      } else {
        alert("Authentication failed. No token received.");
      }
    } catch (error) {
      console.error("Auth Error:", error);
      alert(error.response?.data?.error || "Something went wrong. Try again.");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </>
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {!isLogin && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          )}
          <button type="submit" className="auth-btn">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span className="toggle-auth" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? " Sign Up" : " Login"}
          </span>
        </p>

        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
      </div>
    </div>
  );
};

export default AuthModal;
