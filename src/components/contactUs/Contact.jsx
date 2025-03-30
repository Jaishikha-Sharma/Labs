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
      <div className="button-container">
        <button className="contact-btn active">Company Information</button>
        <button className="contact-btn">Corporate Office</button>
        <button className="contact-btn">Feedback</button>
      </div>

      {/* Contact Address Section */}
      <div className="contact-container mt-3">
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
                    <Card.Text>+91 7357668997</Card.Text>
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
                    <Card.Text>jagdambalab4@gmail.com</Card.Text>
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
                      <strong>Regd. Office:</strong> Block E, Sector -18,
                      Rohini, New Delhi – 110085
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83918722605!2d77.06889913085936!3d28.52758200674282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d82a74d6b47%3A0x7a2a76c7cde3b6bb!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1711530866081"
              width="100%"
              height="330"
              style={{ border: "0", borderRadius: "5px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      {/* Contact Address Section ends */}
    </div>
  );
};

export default Contact;
