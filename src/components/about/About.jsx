import React from "react";
import ContactUsImg from "../../assets/images/inner4.jpg";
import "./About.css";
import Achievements from "./achievments/Achivements";
import { Carousel } from "react-bootstrap";
import Testimonial from "../../assets/images/Capture.png";

const About = () => {
  return (
    <>
      <div>
        <img src={ContactUsImg} alt="Contact-us" style={{ width: "100%" }} />
      </div>
      <div className="about-container">
        <div className="about-text">
          <h2>About Us</h2>
          <br />
          <h3>
            <b>
              We provide high-quality and extremely cost-effective analytical
              services to the industries.
            </b>
          </h3>
          <br/>
          <p>
            Jagdamba Laboratories was founded in 2001 by Mr. Vimal Sharma, with
            a vision of providing high-quality and extremely cost-effective
            analytical services to the industries, processors, traders, research
            institutes, and various consumer organizations. We at Jagdamba Lab
            provide complete testing services under one roof, including testing
            of pharmaceuticals drugs, alcoholic drinks, water, metals, oil &
            fats, soil, stones & food items. We undertake third-party inspection
            for quality and quantity besides shipment inspection.
          </p>
          <p>
            Our laboratory is equipped with some of the latest and most
            sophisticated instruments and is well supported by experienced
            scientists, analysts, and engineers. We have a strong analytical
            capability to directly assist clients and support in-house quality
            assurance and research projects.
          </p>
          <p>
            We have been awarded NABL Accrediation in Chemical
            Testing,Biological,Approved by Drug Control Origination ISO 9001 :
            2008 certification
          </p>
        </div>
      </div>
      <div>
        <Achievements />
      </div>
      <div className="mt-3">
      <div className="services-section text-center mt-5">
        <h2 className="services-title">TESTIMONIALS</h2>
      </div>
        <div className="row mt-5 align-items-center custom-carousel-section" style={{width:"100%"}}>
          <div className="col-md-6">
            <img
              src={Testimonial}
              alt="Carousel Static"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <Carousel>
              <Carousel.Item>
                <div className="carousel-content">
                  <h3>Quality Healthcare</h3>
                  <p>
                    Providing the best healthcare services for all your needs.
                  </p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="carousel-content">
                  <h3>Advanced Technology</h3>
                  <p>
                    We use state-of-the-art technology for accurate results.
                  </p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="carousel-content">
                  <h3>Affordable Prices</h3>
                  <p>Get the best healthcare services at affordable prices.</p>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
