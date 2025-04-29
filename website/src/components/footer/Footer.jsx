import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer mt-5">
      <Container>
        <Row>
          {/* Left Section */}
          <Col md={4}>
            <Link to="/">
              <img
                src="https://i.imgur.com/njJQdAg.png"
                alt="logo"
                className="footer-logo"
              />
            </Link>
            <p className="footer-description">
              The Earth Crust Minerals Analytical Laboratory is an abbreviation
              for Earth Crust Minerals analytical laboratory providing
              Analytical testing & consultancy services.
            </p>
            <div className="social-icons d-flex gap-3">
              <a href="#" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </Col>

          {/* Center Section - Testing Services */}
          <Col md={3}>
            <h6 className="footer-heading">Our Testing's</h6>
            <ul className="footer-list">
              <Link to="/water-Testing" style={{ color: "white" }}>
                <li>Water Testing</li>
              </Link>
              <Link to="/soil-Testing" style={{ color: "white" }}>
                <li>Soil Testing</li>
              </Link>
              <Link to="/food-testing" style={{ color: "white" }}>
                <li>Food Testing</li>
              </Link>
              <Link to="/Enviornment-testing" style={{ color: "white" }}>
                <li>Environment Testing</li>
              </Link>
              <Link to="/metals" style={{ color: "white" }}>
                <li>Metal & Alloys Testing</li>
              </Link>
              <Link to="/coke-testing" style={{ color: "white" }}>
                <li>Coal & Coke Testing</li>
              </Link>
              <Link to="/building-analysis" style={{ color: "white" }}>
                <li>Building & Construction Material Analysis</li>
              </Link>
            </ul>
          </Col>

          {/* Right Section - Contact Info */}
          <Col md={3}>
            <h6 className="footer-heading">Contact Us</h6>
            <div className="footer-contact">
              <p>
                <i className="fas fa-map-marker-alt me-2"></i>
                S-135, 136, RIICO Phase-1, Beawar Gas Godown, Ajmer Road, Beawar
                305901
              </p>
              <p>
                <i className="fas fa-phone-alt me-2"></i>
                +91 8949873474
              </p>
              <p>
                <i className="fas fa-phone-alt me-2"></i>
                +91 8919578845
              </p>
              <p>
                <i className="fas fa-envelope me-2"></i>
                ecmalab2021@gmail.com
              </p>
            </div>
          </Col>

          {/* Map Section */}
          <Col md={2}>
            <h6 className="footer-heading">Our Location</h6>
            <iframe
              src="https://www.google.com/maps?q=S-135,%20136,%20RIICO%20Phase-1,%20Beawar%20Gas%20Godown,%20Ajmer%20Road,%20Beawar%20305901&output=embed"
              className="footer-map"
              allowFullScreen=""
              loading="lazy"
              title="ECMA Lab Location"
            />
          </Col>
        </Row>
      </Container>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <Container className="d-flex justify-content-between align-items-center flex-wrap">
          <p className="footer-text mb-0">
            ©2024. ECMA Lab. All Rights Reserved.
          </p>
          <div className="d-flex">
            <a href="/privacy-policy" className="footer-link me-3" style={{color:"white"}}>
              Privacy Policy
            </a>
            <a href="/terms-condition" className="footer-link" style={{color:"white"}}>
              Terms and Conditions
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
