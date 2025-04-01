import React from "react";
import founderImage from "../../../assets/images/process.png"; // Update with actual path
import "./About.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h2 className="about-us-title">ABOUT US</h2>
      <h2 className="about-us-heading">WE ARE JAGDAMBA LABORATORIES</h2>
      <div className="row mt-3">
        <div className="col-lg-4">
          <img src={founderImage} />
        </div>
        <div className="col-lg-8">
          <p>
            Jagdamba Laboratories was founded in 2001 by Mr.Vimal Sharma, with a
            vision of providing high quality and extremely cost effective
            analytical services to the Industries, Processor, Traders, Research
            Institute and various Consumer Organizations.
            <br />
            <br/>
            We at Jagdamba lab, provide complete testing services under one roof
            i.e. testing of pharmaceuticals drugs, alcoholic drinks, water,
            metals, oil & fats, soil, stones & food items. We undertake Third
            Party Inspection for Quality and Quantity besides Shipment
            Inspection. We offer Consultancy Services for setting up of
            laboratory.Our Laboratory is equipped with some of the latest and
            sophisticated instruments and is well supported by experienced
            scientists, analysts and engineers. We have a strong analytical
            capability to directly assist clients and support in house Quality
            Assurance & Research Projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
