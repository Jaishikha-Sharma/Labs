import React from "react";
import "./ServiceCard.css";
import water from "../../../assets/images/water.avif";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="services-section">
      <h3 className="services-title">OUR SERVICES</h3>
      <h2 className="services-subtitle">We Provide Reliable Service</h2>
      <div className="services-container">
        <div className="service-card">
          <img src={water} alt="img" />
          <h3>Water Testing</h3>
          <p>
            ECMA Laboratory provides comprehensive water testing services,
            analyzing for contaminants.
          </p>
            <Link to="/water-Testing" style={{ color: "white" }}>
          <button className="discover-btn">Discover More →</button></Link>
        </div>
        <div className="service-card">
          <img src="https://i.imgur.com/p4FU48L.jpeg" alt="img" />
          <h3>Soil Testing</h3>
          <p>
            ECMA Laboratory conducts comprehensive soil testing, analyzing
            nutrient content and soil quality.
          </p>
          <Link to="/soil-Testing" style={{ color: "white" }}>
          <button className="discover-btn">Discover More →</button></Link>
        </div>
        <div className="service-card">
          <img src="https://i.imgur.com/LulBG5x.jpeg" alt="img" />
          <h3>Herbal Testing</h3>
          <p>
            ECMA Laboratory conducts comprehensive Herbal testing, analyzing
            nutrient content and Herbal quality.
          </p>
          <Link to="/herbal-Testing" style={{ color: "white" }}>
          <button className="discover-btn">Discover More →</button></Link>
        </div>
        <div className="service-card">
          <img src="https://i.imgur.com/OZZmdxk.jpeg" alt="img" />
          <h3>Environment Testing</h3>
          <p>
            ECMA Laboratory specializes in comprehensive environmental testing,
            analyzing soil and water.
          </p>
          <Link to="/Enviornment-Testing" style={{ color: "white" }}>
          <button className="discover-btn">Discover More →</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
