import React from "react";
import "./Testing.css";

const FoodTesting = () => {
  return (
    <div className="water-testing">
      <h3 style={{marginTop:"30px" , marginBottom:"30px"}}>Food Testing</h3>
      <div className="row">
        <div className="col-lg-8">
          <p>
            <strong>ECMA LABS</strong>offers you a wide range of scientifically
            managed food analysis and testing facility, consulting, training,
            and research and quality services on jaipur Rajasthan basis. We
            provide testing services using procedures that comply with
            national/international standards for various products range with
            respect to different parameters. Our professionals backed by
            ultramodern food testing lab infrastructure and state of the art
            equipments. Contact us today to get customized solutions to meet
            your food testing laboratory needs, some of the key services offered
            are listed below:
          </p>
          <p>
            <strong>Key Services:</strong>
          </p>
          <ul>
            <li>
              Analysis of Food as & Agricultural products as per FSSAI, BIS,
              EIC/EIA, APEDA & European (EU) standards, FSSA (Food Safety and
              Standards Act)
            </li>
            <li>
              Contract testing services to support your HACCP, ISO, GMP and GLP
              compliance.
            </li>
            <li>Fatty acids composition and trans fat content</li>
            <li>
              Mycotoxins B1, B2, G1, G2, M1 and Ochratoxin in various matrices
            </li>
            <li>Milk & Milk Products Analysis as per EIC norms</li>
          </ul>
        </div>
        <div className="col-lg-4">
          <img src="https://i.imgur.com/qRzxJNn.jpeg" alt="testing" />
        </div>
      </div>
    </div>
  );
};

export default FoodTesting;
