import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import footerbgimg from "../../assets/images/bg-footer.webp";


const Footer = () => {
  return (
    <footer
      className="footer mt-5"
      style={{
        backgroundImage: `url(${footerbgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Top Section */}
      <div className="footer-top py-4">
        <Container>
          <Row className="mt-3">
            <Col md={4}>
              <h6 className="fw-bold">Office Address</h6>
              <p>181, Padmavati Colony (B), New Sanganer Road, Opp.  Ryan School,Nirman Nagar, Shyam Nagar, Jaipur – 302019</p>
            </Col>
            <Col md={4}>
              <h6 className="fw-bold">Laboratory Address</h6>
           <p>119, Solitaire Industrial Park, Phase – 1st, Dahmi Kallan, Bagru, Jaipur - 303007</p>
            </Col>
            <Col md={4}>
              <h6 className="fw-bold">Contact Info</h6>
              <ul className="list-unstyled">
                <li>(+91) 982 912 4199</li>
                <li>jagdamba_lab@yahoo.com</li>
                <li>Mon-Sat: 10:00AM-06:00PM</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Blue Box Section */}
      <div
        className="footer-bottom text-center py-4"
        style={{ backgroundColor: "#0047ae" }}
      >
        <Container>
          <p className="mb-1 text-white">2023 All Rights Reserved</p>
          <div className="social-icons d-flex justify-content-center gap-2 mt-3">
            <span className="text-white me-2">Follow us on: </span>
            <a
              href="#"
              className="text-white d-flex align-items-center justify-content-center border border-white "
              style={{ width: "30px", height: "30px", borderRadius: "2px" }}
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-white d-flex align-items-center justify-content-center border border-white"
              style={{ width: "30px", height: "30px", borderRadius: "2px" }}
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="text-white d-flex align-items-center justify-content-center border border-white"
              style={{ width: "30px", height: "30px", borderRadius: "2px" }}
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="#"
              className="text-white d-flex align-items-center justify-content-center border border-white"
              style={{ width: "30px", height: "30px", borderRadius: "2px" }}
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
