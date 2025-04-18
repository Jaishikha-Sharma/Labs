import React , {useState} from "react";
import "./Testing.css";
import TestForm from "./TestingFom";

const EnvTesting = () => {
    const [showForm, setShowForm] = useState(false);
  return (
    <div className="water-testing">
      <h3 style={{marginTop:"30px" , marginBottom:"30px"}}>Enviornment Testing</h3>
      <div className="row">
        <div className="col-lg-8">
          <p>
            <strong>ECMA LABS </strong>provides environmental monitoring
            instruments and well qualified personnel to carry out environmental
            baseline and compliance monitoring in all walk of sectors like
            petrochemical, mining, cement, highways, housing and infrastructure
            for EIA studies. We offer extensive capabilities to perform a
            complete range of Environmental tests.
          </p>
          <p>
            <strong>Key Services:</strong>
          </p>
          <ul>
            <li>Air testing</li>
            <li>soil testing</li>
            <li>Water testing</li>
            <li>VOCs and Hydrocarbons.</li>
            <li>Indoor & outdoor gas quality.</li>
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
