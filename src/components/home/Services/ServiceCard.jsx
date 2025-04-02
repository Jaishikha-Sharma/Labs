import React from "react";
import "./ServiceCard.css";

const Services = () => {
  return (
    <div className="services-section">
      <h3 className="services-title">OUR SERVICES</h3>
      <h2 className="services-subtitle">We Provide Reliable Service</h2>
      <div className="services-container">
        <div className="service-card">
        <img src="https://i.imgur.com/k9ZY0S7.png" alt="img" />
        <h3>Water Testing</h3>
          <p>
            ECMA Laboratory provides comprehensive water testing services,
            analyzing for contaminants.
          </p>
          <button className="discover-btn">Discover More →</button>
        </div>
        <div className="service-card">
        <img src="https://i.imgur.com/k9ZY0S7.png" alt="img" />
          <h3>Soil Testing</h3>
          <p>
            ECMA Laboratory conducts comprehensive soil testing, analyzing
            nutrient content and soil quality.
          </p>
          <button className="discover-btn">Discover More →</button>
        </div>
        <div className="service-card">
        <img src="https://i.imgur.com/k9ZY0S7.png" alt="img" />
          <h3>Soil Testing</h3>
          <p>
            ECMA Laboratory conducts comprehensive soil testing, analyzing
            nutrient content and soil quality.
          </p>
          <button className="discover-btn">Discover More →</button>
        </div>
        <div className="service-card">
        <img src="https://i.imgur.com/k9ZY0S7.png" alt="img" />
          <h3>Environment Testing</h3>
          <p>
            ECMA Laboratory specializes in comprehensive environmental testing,
            analyzing soil and water.
          </p>
          <button className="discover-btn">Discover More →</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
