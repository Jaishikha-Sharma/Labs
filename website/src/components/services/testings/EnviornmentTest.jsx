import React, { useState } from "react";
import "./Testing.css";
import TestForm from "./TestingFom";

const EnvTesting = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="water-testing">
      <h3 style={{ marginTop: "30px", marginBottom: "30px" }}>
      Pollution & Enviornment Testing
      </h3>
      <div className="row">
        <div className="col-lg-8">
          <p>
            <strong>ECMA LAB</strong> offers Environmental Testing Services from
            our well-equipped laboratory, helping you to minimize environmental
            impact and enhance environmental protection. Environmental Testing
            includes Air quality consulting, Environmental monitoring,
            Ventilation Surveys, Noise level measurement, Emission Monitoring,
            and ETP/STP operation and maintenance.<br/> <b>Contact us</b> now for more
            information. Parameters measured in Air Quality monitoring are SO2 (Sulphur Dioxide), NOx (Oxides of Nitrogen), Particulate Matter (PM 10 and PM2. 5), Ozone, Lead, CO (Carbon Monoxide) etc.
          </p>
          <p>
            <strong>Key Services:</strong>
          </p>
          <ul>
            <li>Testing of stack emissions</li>
            <li>Noise & Vibration Monitoring</li>
            <li>Air sampling & Monitoring</li>
            <li>Air – Ambient, Indoor Air quality monitoring or Testing</li>
          </ul>
        </div>
        <div className="col-lg-4">
          <img src="https://i.imgur.com/OZZmdxk.jpeg" alt="testing" />
        </div>
      </div>
      <button className="open-form-btn" onClick={() => setShowForm(!showForm)}>
        {showForm ? "Hide Form" : "Test Now"}
      </button>
      {showForm && <TestForm serviceName="Enviornment Testing" />}
    </div>
  );
};

export default EnvTesting;
