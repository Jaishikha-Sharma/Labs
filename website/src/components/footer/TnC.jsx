import React from 'react';

const TermsAndConditions = () => {
  return (
    <>
      <style>{`
        .legal-page {
          max-width: 1200px;
          margin: 40px auto;
          padding: 40px;
          background-color: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          line-height: 1.8;
          font-family: 'Helvetica Neue', Arial, sans-serif;
          color: #333;
        }

        .legal-page h1 {
          font-size: 36px;
          font-weight: bold;
          color: #222;
          text-align: center;
          margin-bottom: 20px;
          letter-spacing: 0.5px;
        }

        .legal-page h2 {
          font-size: 28px;
          font-weight: 600;
          margin-top: 40px;
          color: #333;
          border-bottom: 2px solid #573505;
          padding-bottom: 8px;
        }

        .legal-page p {
          font-size: 16px;
          line-height: 1.7;
          color: #555;
          margin-bottom: 20px;
          text-align: justify;
        }

        .legal-page ul {
          margin-left: 20px;
          margin-bottom: 20px;
        }

        .legal-page ul li {
          font-size: 16px;
          color: #555;
          margin-bottom: 10px;
          list-style-type: disc;
        }

        .legal-page a {
          color: #0066cc;
          text-decoration: none;
          font-weight: 500;
        }

        .legal-page a:hover {
          text-decoration: underline;
          color: #004d99;
        }

        .footer-link {
          color: #0066cc;
          font-weight: 500;
          text-decoration: none;
        }

        .footer-link:hover {
          text-decoration: underline;
          color: #004d99;
        }

        .legal-page .section-divider {
          border-top: 1px solid #e1e1e1;
          margin: 40px 0;
        }

        @media (max-width: 768px) {
          .legal-page {
            padding: 20px;
            max-width: 100%;
          }

          .legal-page h1 {
            font-size: 28px;
          }

          .legal-page h2 {
            font-size: 22px;
          }

          .legal-page p {
            font-size: 14px;
          }
        }

        .last-updated {
          font-style: italic;
          font-size: 14px;
          text-align: center;
          margin-top: 40px;
        }
      `}</style>

      <div className="legal-page">
        <h1>Terms and Conditions</h1>

        <h2>1. Introduction</h2>
        <p>
          Welcome to ECMA Labs! These Terms and Conditions govern your access to and use of the ECMA Labs website and services ("Services"). By using our Website or Services, you agree to comply with these Terms. If you disagree, please do not use our Website.
        </p>

        <h2>2. Definitions</h2>
        <ul>
          <li><strong>"Website"</strong> refers to the ECMA Labs website available at www.ecmalab.com.</li>
          <li><strong>"Services"</strong> includes products, features, software, and support provided by ECMA Labs.</li>
          <li><strong>"User"</strong> refers to any person or entity accessing or using the Services.</li>
        </ul>

        <h2>3. Acceptance of Terms</h2>
        <p>
          By using our Services, you accept these Terms and our Privacy Policy. We may update the Terms periodically, and your continued use of the Website implies acceptance of the updated Terms.
        </p>

        <h2>4. User Obligations</h2>
        <ul>
          <li>Use the Website and Services in a lawful manner.</li>
          <li>Do not disrupt or damage our systems or networks.</li>
          <li>Provide accurate information when prompted.</li>
        </ul>

        <h2>5. Intellectual Property</h2>
        <p>
          All materials, including logos, code, content, and design on ECMA Labs, are the intellectual property of ECMA Labs or its licensors and protected by copyright and trademark laws.
        </p>

        <h2>6. Privacy and Data</h2>
        <p>
          We respect your privacy. Please read our <a href="/privacy-policy">Privacy Policy</a> to understand how we collect, use, and protect your personal information.
        </p>

        <h2>7. Payments</h2>
        <p>
          If you purchase Services through ECMA Labs, you agree to pay all associated charges and abide by any payment terms provided at the time of transaction.
        </p>

        <h2>8. Prohibited Use</h2>
        <ul>
          <li>Do not engage in unauthorized data mining or automated access.</li>
          <li>Do not impersonate any person or entity or misrepresent your affiliation.</li>
          <li>Do not use our Website for unlawful purposes.</li>
        </ul>

        <h2>9. Third-Party Links</h2>
        <p>
          ECMA Labs may contain links to third-party websites. We do not endorse and are not responsible for content on third-party sites.
        </p>

        <h2>10. Disclaimers</h2>
        <p>
          The Website and Services are provided “as is.” ECMA Labs disclaims all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement.
        </p>

        <h2>11. Limitation of Liability</h2>
        <p>
          ECMA Labs will not be liable for any indirect, incidental, or consequential damages related to your use or inability to use the Website or Services.
        </p>

        <h2>12. Indemnity</h2>
        <p>
          You agree to indemnify and hold ECMA Labs harmless from any claims or damages arising from your violation of these Terms or misuse of the Services.
        </p>

        <h2>13. Termination</h2>
        <p>
          We reserve the right to suspend or terminate your access to the Services at our discretion, without notice, for conduct that violates these Terms.
        </p>

        <h2>14. Governing Law</h2>
        <p>
          These Terms are governed by the laws of [Your Country/State], and you agree to submit to the jurisdiction of its courts.
        </p>

        <h2>15. Contact</h2>
        <p>
          If you have questions about these Terms, contact us at <a href="mailto:ecmalab2021@gmail.com">ecmalab2021@gmail.com</a>.
        </p>

        <p className="last-updated">Last Updated: April 2025</p>
      </div>
    </>
  );
};

export default TermsAndConditions;
