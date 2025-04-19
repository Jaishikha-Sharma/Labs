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
            industrial water, and wastewater samples.{" "}
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
          <img src="https://i.imgur.com/4Ixnddk.jpeg" alt="water testing"/>
        </div>
        <div>
        <h4>Water Analysis Spotlight (As per IS 10500)</h4><br/>
          <ul style={{ textAlign: "justify" }}>
            <li><strong>Drinking Water Testing:</strong> Color & Odour, Taste, Turbidity, pH, Total Hardness, Chloride, Fluoride, TDS, Calcium, Magnesium, Sulphates, Alkalinity, Specific Conductivity, Sodium, Potassium, Arsenic</li>
            <li><strong>Water Potability Testing:</strong> Tested for coliform bacteria. A result of ‘Absent’ confirms the absence of bacterial contamination (potable).</li>
            <li><strong>Express Water Testing:</strong> pH, Electrical Conductance, Fluoride, Alkalinity, Chloride, Sulfate, Nitrate, Hardness, Zinc, Arsenic, Iron, Manganese, Magnesium, Potassium, Calcium, Sodium, Silica, TDS</li>
            <li><strong>Borewell / Well / Tanker / Irrigation Water Testing:</strong> TDS, Hardness, Sodium, Chloride, Sulfate, Iron, Manganese, Nitrate, Arsenic, Lead</li>
            <li><strong>Industrial Water Testing:</strong> Acidity, Alkalinity, Inorganic Solids, Suspended Solids, Organic Dissolved Solids, Calcium, Magnesium, Chloride, Sulphates, Iron, Sodium, Potassium, pH</li>
            <li><strong>Construction Water Testing:</strong> Acidity, Alkalinity, Inorganic Solids, Suspended Solids, Organic Dissolved Solids, Calcium, Magnesium, Chloride, Sulphates, Iron, Sodium, Potassium, pH</li>
            <li><strong>Surface / Ground Water Testing:</strong> Color, Taste, Odor, Temperature, Turbidity, Solids, Electrical Conductivity, pH, Acidity, Alkalinity, Chlorine, Hardness, Dissolved Oxygen, BOD</li>
            <li><strong>Waste Water Testing:</strong> Biochemical Oxygen Demand (BOD), Total Suspended Solids (TSS), Total Kjeldahl Nitrogen (TKN), Total Phosphorus (TP), Nitrogen Series, Metals</li>
            <li><strong>Sea Water Testing:</strong> Temperature, pH, Turbidity, Salinity, Nitrates, Phosphates</li>
          </ul>
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
