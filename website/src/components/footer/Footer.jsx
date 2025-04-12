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
              for Earth Crust Minerals analytical laboratory providing Analytical
              testing & consultancy services.
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
                <li>Environment Testing</li>
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
            <div className="footer-contact">
              <p>
                <i className="fas fa-map-marker-alt me-2"></i>
                S-135, 136, RIICO Phase-1, Beawar Gas Godown, Ajmer Road, Beawar 305901
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14217.245174214643!2d74.32412982783459!3d26.108927134642035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be6b0a9a19f59%3A0x8dfdb8c32a25e1f3!2sBeawar%2C%20Rajasthan%20305901!5e0!3m2!1sen!2sin!4v1680277100150!5m2!1sen!2sin"
              className="footer-map"
              allowFullScreen=""
              loading="lazy"
              title="ECMA Location"
            ></iframe>
          </Col>
        </Row>
      </Container>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <Container className="d-flex justify-content-between align-items-center flex-wrap">
          <p className="footer-text mb-0">©2024. ECMA Lab. All Rights Reserved.</p>
          <div className="d-flex">
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
