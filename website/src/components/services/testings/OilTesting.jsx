import React , {useState} from "react";
import "./Testing.css";
import TestForm from "./TestingFom";

const HerbalTesting = () => {
    const [showForm, setShowForm] = useState(false);
  return (
    <div className="water-testing">
      <h3 style={{marginTop:"30px" , marginBottom:"30px"}}>Herbal Testing</h3>
      <div className="row">
        <div className="col-lg-8">
          <p>
            <strong>ECMA LABS </strong>provides
            out testing of herbal products including the testing of raw
            materials, excipients and finished single herb as well as poly
            herbal formulations. We routinely carry out tests such as, heavy
            metals, pesticide residues, microbiological testing, physicochemical
            testing, aflatoxins and other mycotoxins, chromatographic
            fingerprinting and non-genetically modified organism certification
            as part of our herbal testing services. Omega test house Backed up
            by our state of the art laboratories we have helped number of our
            clients successfully develop, validate and implement quality control
            parameters for their complex herbal products. This has enabled them
            to confidently market their products not only in the domestic but
            also the international markets.
          </p>
        </div>
        <div className="col-lg-4">
          <img src="https://i.imgur.com/LulBG5x.jpeg" alt="testing" />
        </div>
      </div>
      <button className="open-form-btn" onClick={() => setShowForm(!showForm)}>
        {showForm ? "Hide Form" : "Test Now"}
      </button>
      {showForm && <TestForm serviceName="Herbal Testing" />}
    </div>
  );
};

export default HerbalTesting;
