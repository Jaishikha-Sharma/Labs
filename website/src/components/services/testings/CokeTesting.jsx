import React, { useState } from "react";
import "./Testing.css";
import TestForm from "./TestingFom";

const CokeTesting = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="water-testing">
      <h3 style={{ marginTop: "30px", marginBottom: "30px" }}>
        Coal & Coke Testing
      </h3>
      <div className="row">
        <div className="col-lg-8">
          <p>
            <b>ECMAL </b>provides a range of value-added solutions that reduce
            supply chain risks and safeguard quality and quantity when bringing
            Coal & Clay products to market.
          </p>
          <p><b> Analysis of : Coal / Coke / Metallurgical coal/ Briquette / Lignite / Anthracite</b></p> 
          <p>
            <strong>Tests done:</strong>
          </p>
          <ul>
            <li>Proximate Analysis</li>
            <li>Ultimate Analysis</li>
            <li>Gross Calorific Value</li>
            <li>Net Calorific Value</li>
          </ul>
        </div>
        <div className="col-lg-4">
          <img src="https://i.imgur.com/4SIA3cN.png" alt="testing" />
        </div>
      </div>
      <button className="open-form-btn" onClick={() => setShowForm(!showForm)}>
        {showForm ? "Hide Form" : "Test Now"}
      </button>
      {showForm && <TestForm serviceName="Coke and Coal Testing" />}
    </div>
  );
};

export default CokeTesting;
