import React from "react";
import "./Home.css";
import Services from "./Services/ServiceCard";
import ChatWidget from "../chatBot/ChatBot";
import TestimonialSection from "./testimonial/Testimonial";

const Home = () => {
  return (
    <div className="home">
      {/* Scrolling Marquee */}
      <div className="marquee-container">
        <marquee className="marquee-text">
          Comprehensive Testing for Soil, Water, Environment, Minerals, and Ores
          - Your Trusted Partner in Quality Assurance
        </marquee>
      </div>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://i.imgur.com/C58NY3c.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://i.imgur.com/C58NY3c.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://i.imgur.com/C58NY3c.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
      </div>
      {/* New Section Below Carousel */}
      <div className="features-section">
        <div className="feature">
          <i className="fas fa-hand-holding-heart"></i>
          <p>Helpful Advice</p>
        </div>
        <div className="feature">
          <i className="fas fa-user-tie"></i>
          <p>Reliable Experts</p>
        </div>
        <div className="feature">
          <i className="fas fa-check-circle"></i>
          <p>Quality Assurance</p>
        </div>
        <div className="feature">
          <i className="fas fa-lightbulb"></i>
          <p>Unique Technology</p>
        </div>
      </div>
      <div className="row mt-5">
        <div
          className="col-lg-4"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="https://i.imgur.com/k9ZY0S7.png" alt="img" />
        </div>
        <div className="col-lg-8">
          <div className="lab-text">
            <button className="lab-badge">Laboratory</button>
            <h2>We Provide Reliable & High-Quality Service</h2>
            <p style={{ textAlign: "justify" }}>
              Welcome to the Earth Crust Minerals Analytical Laboratory. We
              provide Earth Crust Minerals Metals, Cement, Soil, Water, Oil &
              Environment, Minerals and Mining Consultancy Services.
              High-quality service involves consistently meeting or exceeding
              customer expectations through professionalism, attention to
              detail, and personalized care. It builds trust, enhances
              satisfaction, and fosters long-term relationships, ensuring
              customer loyalty and business success.
            </p>
            <ul>
              <li>✅ Modify the theming of the prebuilt automation platform</li>
              <li>✅ Override the default strings for any element</li>
            </ul>
            <button className="lab-badge">Get In Touch</button>
          </div>
        </div>
      </div>
      <div className="features-section mt-5">
        <div className="feature">
          <i className="fas fa-clock"></i>
          <p>128+</p>
          <p>Hours Generated</p>
        </div>
        <div className="feature">
          <i class="fa-solid fa-microscope"></i>
          <p>37K+</p>
          <p>Task Completed</p>
        </div>
        <div className="feature">
          <i className="fas fa-users"></i>
          <p>20K+</p>
          <p>Worlwide Users</p>
        </div>
        <div className="feature">
          <i class="fas fa-project-diagram"></i>
          <p>18K+</p>
          <p>Project Completed</p>
        </div>
      </div>
      <Services />
      <TestimonialSection />
      <ChatWidget />
    </div>
  );
};

export default Home;
