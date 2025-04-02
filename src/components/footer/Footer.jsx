import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer mt-5">
      <Container>
        <Row>
          {/* Left Section */}
          <Col md={4}>
          <img src="https://i.imgur.com/njJQdAg.png"alt="logo" style={{width:"68px"}}/>
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
              <li>Water Testing</li>
              <li>Soil Testing</li>
              <li>Environment Testing</li>
              <li>Ore & Minerals</li>
              <li>Metals & Alloys</li>
              <li>Building Construction</li>
              <li>Coal & Coke Testing</li>
            </ul>
          </Col>

          {/* Right Section - Contact Info */}
          <Col md={3}>
            <h6 className="footer-heading">Contact Us</h6>
            <p style={{fontSize:"12px"}}>S-135, 136, RIICO Phase-1, Beawar Gas Godown, Ajmer Road, Beawar 305901</p>
            <p style={{fontSize:"12px"}}>+91 8949873474</p>
            <p style={{fontSize:"12px"}}>+91 8919578845</p>
            <p style={{fontSize:"12px"}}>ecmalab2021@gmail.com</p>
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
          <p className="footer-text mb-0">©2024. ECMA Lab. All Rights Reserved.</p>
          <div>
            <a href="#" className="footer-link me-3">Privacy Policy</a>
            <a href="#" className="footer-link">Terms and Conditions</a>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;