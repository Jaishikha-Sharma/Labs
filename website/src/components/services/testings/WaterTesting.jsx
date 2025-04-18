import React, { useState } from "react";
import "./Testing.css";
import TestForm from "./TestingFom";

const WaterTesting = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="water-testing">
      <h3 style={{ marginTop: "30px", marginBottom: "30px" }}>Water Testing</h3>
      <div className="row">
        <div className="col-lg-8">
          <p>
            <strong>ECMA LABS</strong> provides advanced{" "}
            <strong>water quality testing</strong> services to ensure safe and
            clean water for various applications. Our laboratory is equipped
            with state-of-the-art instruments to analyze drinking water,
            industrial water, and wastewater samples.
          </p>
          <p>
            <strong>Key Services:</strong>
          </p>
          <ul>
            <li>pH and Alkalinity Testing</li>
            <li>Heavy Metals Analysis</li>
            <li>Bacterial Contamination Testing</li>
            <li>Hardness & Mineral Content Evaluation</li>
            <li>Wastewater Quality Assessment</li>
          </ul>
        </div>
        <div className="col-lg-4">
          <img src="https://i.imgur.com/4Ixnddk.jpeg" alt="water testing" />
        </div>
      </div>
      <button className="open-form-btn" onClick={() => setShowForm(!showForm)}>
        {showForm ? "Hide Form" : "Test Now"}
      </button>
      {showForm && <TestForm serviceName="Water Testing" />}
    </div>
  );
};

export default WaterTesting;
