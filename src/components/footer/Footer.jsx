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
          <Link to ="/">
            <img
              src="https://i.imgur.com/njJQdAg.png"
              alt="logo"
              style={{ width: "68px" }}
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
              <Link to="/Enviornment-testing" style={{ color: "white" }}>
                <li>Enviornment Testing</li>
              </Link>
              <Link to="/food-testing" style={{ color: "white" }}>
                <li>Food Testing</li>
              </Link>
              <Link to="/herbal-testing" style={{ color: "white" }}>
                <li>Herbal Testing</li>
              </Link>
            </ul>
          </Col>

          {/* Right Section - Contact Info */}
          <Col md={3}>
            <h6 className="footer-heading">Contact Us</h6>
            <p style={{ fontSize: "12px" }}>
              S-135, 136, RIICO Phase-1, Beawar Gas Godown, Ajmer Road, Beawar
              305901
            </p>
            <p style={{ fontSize: "12px" }}>+91 8949873474</p>
            <p style={{ fontSize: "12px" }}>+91 8919578845</p>
            <p style={{ fontSize: "12px" }}>ecmalab2021@gmail.com</p>
          </Col>

          {/* Map Section */}
          <Col md={2}>
            <h6 className="footer-heading">Our Location</h6>
            <iframe
              src="https://www.google.com/maps/embed?"
              className="footer-map"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Col>
        </Row>
      </Container>

      {/* Bottom Footer */}
      <div className="footer-bottom d-flex justify-content-between align-items-center">
        <Container className="d-flex justify-content-between">
          <p className="footer-text mb-0">
            ©2024. ECMA Lab. All Rights Reserved.
          </p>
          <div>
            <a href="#" className="footer-link me-3">
              Privacy Policy
            </a>
            <a href="#" className="footer-link">
              Terms and Conditions
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
