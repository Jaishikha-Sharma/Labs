import React from "react";
import heroImage from "../../assets/images/hero.png";
import reportImg from "../../assets/images/img.webp";
import "./Home.css";
import FeatureCards from "./featureCard/FeatureCard";
import { Carousel } from "react-bootstrap";
import AboutUs from "./about-us-container/About-us";
import ServiceCard from "./Services/ServiceCard";

const Home = () => {
  return (
    <div className="home">
      <div className="row mt-2">
        <div className="col-lg-8">
          <div className="carousel-container">
            <Carousel className="custom-carousel">
              <Carousel.Item>
                <img src={heroImage} alt="Slide 1" className="d-block w-100" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={heroImage} alt="Slide 2" className="d-block w-100" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={heroImage} alt="Slide 3" className="d-block w-100" />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="test-card">
            <h3 className="card-title">BOOK A TEST ONLINE</h3>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search Test and Packages"
                className="search-input1"
              />
              <button className="search-btn">
                <i className="fas fa-search"></i>
              </button>
            </div>
            <p className="or-text">OR</p>
            <button className="popular-tests-btn">
              Choose Popular Tests / Packages{" "}
              <span className="icon-bg">
                <i className="fas fa-arrow-right"></i>
              </span>
            </button>

            <div className="card-options mt-3">
              <div className="option">
                <img src={reportImg} alt="Download Report" />
                <p style={{ fontSize: "12px", marginBottom: "0" }}>
                  Download Report
                </p>
              </div>
              <div className="option">
                <img src={reportImg} alt="Upload Prescription" />
                <p style={{ fontSize: "12px" }}>Upload Prescription</p>
              </div>
              <div className="option">
                <img src={reportImg} alt="Find Nearest Centre" />
                <p style={{ fontSize: "12px" }}>Find Nearest Centre</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <FeatureCards />
      </div>
      <div className="mt-5">
        <AboutUs />
      </div>
      <div className="services-section text-center mt-5">
        <p className="services-subtitle">SERVICES</p>
        <h2 className="services-title">Our Best Services</h2>
      </div>
      <ServiceCard/>
    </div>
  );
};

export default Home;
