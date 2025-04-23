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
        <img src={ContactUsImg} alt="Contact-us" style={{ width: "100%" }} />
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.301419287929!2d74.30821137489252!3d26.86460736255768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396bdf6896f8d2a3%3A0x4bc0aef9a3131e91!2sS-135%2C%20136%2C%20RIICO%20Industrial%20Area%2C%20Ajmer%20Rd%2C%20Beawar%2C%20Rajasthan%20305901%2C%20India!5e0!3m2!1sen!2sin!4v1713867912427!5m2!1sen!2sin"
              width="100%"
              height="330"
              style={{ border: "0", borderRadius: "5px" }}
              allowFullScreen=""
              loading="lazy"
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
