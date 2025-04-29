import React from "react";
import "./LegalPages.css"; // optional styling file

const PrivacyPolicy = () => {
  return (
    <div className="legal-page">
      <h1>Privacy Policy</h1>
      <p>Effective Date: April 29, 2025</p>

      <p>
        At ECMA LABS, your privacy is important to us. This Privacy Policy
        outlines how we collect, use, and protect your information when you use
        our website and services.
      </p>

      <h2>Information We Collect</h2>
      <p>We may collect the following types of information:</p>
      <ul>
        <li>Personal details (e.g., name, email address, phone number)</li>
        <li>Company and contact information for testing services</li>
        <li>Browser and device data (via cookies and analytics tools)</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>To provide and manage lab testing services</li>
        <li>To improve our website and customer experience</li>
        <li>To respond to inquiries and service requests</li>
        <li>To comply with legal and regulatory requirements</li>
      </ul>

      <h2>Sharing of Information</h2>
      <p>
        We do not sell or rent your personal information. We may share your data
        with trusted partners to operate our business and comply with the law.
      </p>

      <h2>Your Rights</h2>
      <p>
        You may request access to, correction of, or deletion of your personal
        information by contacting us.
      </p>

      <h2>Contact Us</h2>
      <p>
        For any questions or concerns, please contact us at: <br />
        <strong>Email:</strong> ecmalab2021@gmail.com <br />
        <strong>Phone:</strong> +91 8919578845 <br/>
        <strong>Location:</strong> S-135, 136, RIICO Phase-1, Beawar Gas Godown, Ajmer Road, Beawar 305901
      </p>
    </div>
  );
};

export default PrivacyPolicy;
