import React, { useState } from "react";
import "./Testing.css";
import TestForm from "./TestingFom";

const MetalsTesting = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="water-testing">
      <h3 style={{ marginTop: "30px", marginBottom: "30px" }}>
        Metals & Alloys Testing
      </h3>
      <div className="row">
        <div className="col-lg-8">
          <p>
            <b>ECMAL</b> provides a range of value-added solutions that reduce
            supply chain risks and safeguard quality and quantity when bringing
            Metals & Alloyys products to market.Whether you are involved in
            precious, coal, steel, fertilizer, industrial minerals or
            non-ferrous metals, your goal is supply chain optimization. Testing
            & Analysis Report for Low Alloy Steel, Cast Iron Testing, Aluminum
            Alloy Testing, Copper Alloy Testing, Zinc Coated Iron Testing, Iron
            & Steels.
          </p>
          <p>
            <strong>Iron Base (Low Alloy and Stainless Steels)</strong>
          </p>
          <ul
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "10px",
              paddingLeft: "20px",
            }}
          >
            <li>Aluminium Alloys</li>
            <li>Copper Alloys</li>
            <li>Zinc Alloys</li>
            <li>Ferro Alloys</li>
            <li>Ferro Silicon</li>
            <li>Ferro Chrome</li>
            <li>Ferro Manganese</li>
            <li>Silico Manganese</li>
            <li>Ferro Phosphorus</li>
            <li>Ferro Titanium</li>
          </ul>
        </div>
        <div className="col-lg-4">
          <img src="https://i.imgur.com/mN7O1jH.png" alt="testing" />
        </div>
      </div>
      <button className="open-form-btn" onClick={() => setShowForm(!showForm)}>
        {showForm ? "Hide Form" : "Test Now"}
      </button>
      {showForm && <TestForm serviceName="Metals & Alloys Testing" />}
    </div>
  );
};

export default MetalsTesting;
