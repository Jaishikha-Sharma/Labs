import React from "react";
import "./ServiceCard.css";
import water from "../../../assets/images/water.avif";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="services-section">
      <Link to="/services">
        <h3 className="services-title">OUR SERVICES</h3>
      </Link>
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
            <button className="discover-btn">Discover More</button>
          </Link>
        </div>
        <div className="service-card">
          <img src="https://i.imgur.com/p4FU48L.jpeg" alt="img" />
          <h3>Soil Testing</h3>
          <p>
            ECMA Laboratory conducts comprehensive soil testing, analyzing
            nutrient content and soil quality.
          </p>
          <Link to="/soil-Testing" style={{ color: "white" }}>
            <button className="discover-btn">Discover More</button>
          </Link>
        </div>
        <div className="service-card">
          <img src="https://i.imgur.com/OZZmdxk.jpeg" alt="img" />
          <h3>Environment Testing</h3>
          <p>
            ECMA Laboratory specializes in comprehensive environmental testing,
            analyzing soil and water.
          </p>
          <Link to="/Enviornment-Testing" style={{ color: "white" }}>
            <button className="discover-btn">Discover More</button>
          </Link>
        </div>
        <div className="service-card">
          <img src="https://i.imgur.com/mN7O1jH.png" alt="img" />
          <h3>Metals & Alloys Testing</h3>
          <p>
            ECMA Laboratory specializes in comprehensive Metals & Alloys
            testing.
          </p>
          <Link to="/metals" style={{ color: "white" }}>
            <button className="discover-btn">Discover More</button>
          </Link>
        </div>
        <div className="service-card">
          <img src="https://i.imgur.com/qRzxJNn.jpeg" alt="Food Testing" />
          <h3>Food Testing</h3>
          <p>
            Accurate food analysis services to ensure safety, quality, and
            compliance with food regulations.
          </p>
          <Link to="/food-testing" style={{ color: "white" }}>
            <button className="discover-btn">Discover More</button>
          </Link>
        </div>
        <div className="service-card">
          <img
            src="https://i.imgur.com/z1cywy5.png"
            alt="Building Material Analysis"
          />
          <h3>Building Material Analysis</h3>
          <p>
            Testing services for construction materials like cement, concrete,
            bricks, and aggregates for strength and durability.
          </p>
          <Link to="/building-analysis" style={{ color: "white" }}>
            <button className="discover-btn">Discover More</button>
          </Link>
        </div>
        <div className="service-card">
          <img
            src="https://i.imgur.com/4SIA3cN.png"
            alt="Coke & Coal Testing"
          />
          <h3>Coke & Coal Testing</h3>
          <p>
            Reliable analysis of coke and coal properties for energy value, ash
            content, and impurities.
          </p>
          <Link to="/coke-testing" style={{ color: "white" }}>
            <button className="discover-btn">Discover More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
