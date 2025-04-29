import React from "react";
import { Card } from "react-bootstrap";
import ContactUsImg from "../../assets/images/inner4.jpg";
import "./Contact.css";
import ContactIcon from "../../assets/images/office-location.webp";
import CallIcon from "../../assets/images/call-icon.webp";
import EmailIcon from "../../assets/images/email-icon.webp";

const Contact = () => {
  return (
    <div>
      {/* Banner Image */}
      <div>
        <img
          src={ContactUsImg}
          alt="Contact-us"
          style={{ width: "100%" }}
          loading="lazy"
        />
      </div>
      {/* Contact Address Section */}
      <div className="contact-container mt-4">
        <h3 style={{ fontSize: "20px", textAlign: "left" }}>
          <b> Company Information</b>
        </h3>
        <div className="row mt-3">
          <div className="col-lg-8">
            <div className="row mt-3">
              <div className="col-lg-6">
                {/* Card */}
                <Card className="contact-card text-center">
                  <Card.Body>
                    <img
                      src={CallIcon}
                      alt="Office Icon"
                      className="contact-icon"
                    />
                    <Card.Text>+91 8949873474</Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-6">
                {/* Card */}
                <Card className="contact-card text-center">
                  <Card.Body>
                    <img
                      src={EmailIcon}
                      alt="Office Icon"
                      className="contact-icon"
                    />
                    <Card.Text style={{ fontSize: "15px" }}>
                      ecmalab2021@gmail.com
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-12">
                {/* Card */}
                <Card className="contact-card text-center">
                  <Card.Body>
                    <img
                      src={ContactIcon}
                      alt="Office Icon"
                      className="contact-icon"
                    />
                    <Card.Text>
                      <strong>Regd. Office:</strong> S-135, 136, RIICO Phase-1,
                      Beawar Gas Godown, Ajmer Road, Beawar 305901
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-4">
            <iframe
              src="https://www.google.com/maps?q=S-135,%20136,%20RIICO%20Phase-1,%20Beawar%20Gas%20Godown,%20Ajmer%20Road,%20Beawar%20305901&output=embed"
              allowFullScreen=""
              loading="lazy"
              title="ECMA Lab Location"
              width="100%"
              height="330"
              style={{ border: "0", borderRadius: "5px" }}
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      {/* Contact Address Section ends */}
    </div>
  );
};

export default Contact;
