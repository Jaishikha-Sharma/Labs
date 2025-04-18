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
            <strong>ECMA LABS </strong>provides you Soil
            testing Soil testing refer to one or more of a wide variety of soil
            analysis conducted for one of several possible reasons. Possibly the
            most widely conducted soil tests are those done to estimate the
            plant-available concentrations of plant nutrients, in order to
            determine fertilizer recommendations in agriculture. Other soil
            tests may be done for engineering (geotechnical), geochemical or
            ecological investigations. In agriculture, a soil test commonly
            refers to the analysis of a soil sample to determine nutrient
            content, composition, and other characteristics such as the acidity
            or pH level. A soil test can determine fertility, or the expected
            growth potential of the soil which indicates nutrient deficiencies,
            potential toxicities from excessive fertility and inhibitions from
            the presence of non-essential trace minerals. The test is used to
            mimic the function of roots to assimilate minerals. The expected
            rate of growth is modeled by the Law of the Maximum.
          </p>
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
