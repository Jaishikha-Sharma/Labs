import React, { useState } from "react";
import "./Testing.css";
import TestForm from "./TestingFom";
import buildingImage from "../../../assets/images/building.avif";

const BuildingAnalysis = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="water-testing">
      <h3 style={{ marginTop: "30px", marginBottom: "30px" }}>
        Building & Construction Material Analysis
      </h3>
      <div className="row align-items-stretch">
        <div className="col-lg-8">
          <p>
            <b>ECMAL</b> can help make the thought a reality by ensuring
            processes run efficiently, constructions are safe and reliable, and
            materials are thoroughly analyzed. ECMAL brings expertise and
            experience in analyzing products including Cement, Building
            Materials, Roadwork & Soil.
          </p>
          <p>
            <b>Cement:</b> Cement fineness, soundness, strength, setting time,
            heat of hydration, chemical composition, and specific gravity are
            all measured by separate tests.
          </p>
          <p>
            <b>Concrete:</b> Chloride Ion, Chemical Composition, Slump Test,
            Drying Shrinkage Test, Compressive Strength Test, Hardness Test
          </p>
          <p>
            <b>Soil:</b> Moisture Content, Specific Gravity, Atterberg Limits,
            Dry Density, Proctor's Compaction Test
          </p>
          <p>
            <b>Stone:</b> Porosity and Water Absorption Test, Density,
            Compressive Strength, Impact, Soluble Matter
          </p>
        </div>
        <div className="col-lg-4">
          <img
            src={buildingImage}
            alt="Construction Analysis"
            style={{
              width: "80%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </div>
      </div>
      <button className="open-form-btn" onClick={() => setShowForm(!showForm)}>
        {showForm ? "Hide Form" : "Test Now"}
      </button>
      {showForm && (
        <TestForm serviceName="Building & Construction Material Analysis" />
      )}
    </div>
  );
};

export default BuildingAnalysis;
