import React from "react";
import heroImage from "../../assets/images/hero.png";
import reportImg from "../../assets/images/img.webp"; // WebP Image
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="row mt-2">
        <div className="col-lg-8">
          <div className="image-container">
            <img
              src={heroImage}
              alt="Laboratory"
              className="home-image"
              style={{ width: "100%" }}
            />
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

            <div className="card-options mt-5">
              <div className="option">
                <img src={reportImg} alt="Download Report" />
                <p style={{ fontSize: "12px" , marginBottom: "0" }}>Download Report</p>
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
    </div>
  );
};

export default Home;
