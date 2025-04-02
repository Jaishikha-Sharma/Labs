import React from "react";
import heroImage from "../../assets/images/hero.png";
import reportImg from "../../assets/images/img.webp";
import "./Home.css";
import FeatureCards from "./featureCard/FeatureCard";
import { Carousel } from "react-bootstrap";
import AboutUs from "./about-us-container/About-us";
import ServiceCard from "./Services/ServiceCard";
import Testimonial from "../../assets/images/Capture.png";

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
      <ServiceCard />
      <div>
        <div className="services-section text-center mt-5">
          <p className="services-subtitle">Testimonials</p>
          <h2 className="services-title">Customers Reviews</h2>
        </div>
        {/* New Carousel Section */}
        <div className="row mt-5 align-items-center custom-carousel-section">
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
      <div className="row mt-5">
        <div className="col-lg-6">
          <h2>Office Location</h2>
          <iframe
            title="Delhi Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224105.29330603906!2d76.8130636!3d28.6472799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d02210df2a26f%3A0x400b36d68e4d1764!2sDelhi!5e0!3m2!1sen!2sin!4v1645286318667!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="col-lg-6">
          <h2>Laboratory Location</h2>
          <iframe
            title="Delhi Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224105.29330603906!2d76.8130636!3d28.6472799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d02210df2a26f%3A0x400b36d68e4d1764!2sDelhi!5e0!3m2!1sen!2sin!4v1645286318667!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Home;
