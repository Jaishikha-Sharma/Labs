import React  , {useState} from "react";
import "./Testing.css";
import TestForm from "./TestingFom";

const SoilTesting = () => {
    const [showForm, setShowForm] = useState(false);
  return (
    <div className="water-testing">
      <h3 style={{marginTop:"30px" , marginBottom:"30px"}}>Soil Testing</h3>
      <div className="row">
        <div className="col-lg-8">
        <p>
            <strong>ECMAL</strong> provides a range of value-added solutions that reduce supply chain risks and safeguard quality and quantity when bringing SOIL & CLAY products to market. The value of your shipments is best determined by a quality and quantity assessment based on impartial sampling and analysis. ECMAL is recognized for the quality and integrity of our services. From testing, we use the latest technologies to provide you with accurate and reliable data reporting. We invest heavily in our technical experts and equipment to ensure all our services meet ASTM, ISO, JCRM, and industry requirements.
          </p>
          <p>
            <strong>Key Services:</strong>
          </p>
          <ul>
            <li><b>Complete Analysis: -</b>Water of Plasticity, Fired shrinkage, Water Absorption,Grits contents, Whiteness, L-Value a.Value,b.Value, Fired color,Dry MOR, Fired MOR & Moisture. </li>
          </ul>
        </div>
        <div className="col-lg-4">
          <img src="https://i.imgur.com/p4FU48L.jpeg" alt="testing" />
        </div>
      </div>
      <button className="open-form-btn" onClick={() => setShowForm(!showForm)}>
        {showForm ? "Hide Form" : "Test Now"}
      </button>
      {showForm && <TestForm serviceName="Water Testing" />}
    </div>
  );
};

export default SoilTesting;
