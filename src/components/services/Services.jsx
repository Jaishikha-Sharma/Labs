import React, { useState } from "react";
import ContactUsImg from "../../assets/images/inner4.jpg";
import "./Services.css";

const Services = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div>

      {/* Accordion Section */}
      <div className="accordion">
        {/* First Accordion */}
        <div className="accordion-item">
          <button
            className="accordion-header"
            onClick={() => toggleAccordion(1)}
          >
            Popular Tests
            <span className={`icon ${openAccordion === 1 ? "rotate" : ""}`}>
              &#x25B2;
            </span>
          </button>
          {openAccordion === 1 && (
            <div className="accordion-content">
              <p>
                Full Body Checkups | Covid 19 Test | Heart Test | Kidney Test |
                Liver Test | CBC Test | Cholesterol Test | HbA1c Test |
                Hepatitis B Test | Kidney Function Test | Liver Function Test |
                Sugar Test | Thyroid Test | Typhoid Test | Uric Acid Test |
                Vitamin B12 Test | Vitamin D Test | Allergy Test | Arthritis
                Test | Cancer Test | Bone And Joint | Dengue Test | Diabetes
                Test | Rheumatoid Test | Tuberculosis Test | Infertility Test |
                Diabetes Care | Anemia Test | GastroIntestinal | Autoimmune
                Disorders | Fever Test
              </p>
            </div>
          )}
        </div>

        {/* Second Accordion */}
        <div className="accordion-item">
          <button
            className="accordion-header"
            onClick={() => toggleAccordion(2)}
          >
            Lab Test At Home
            <span className={`icon ${openAccordion === 2 ? "rotate" : ""}`}>
              &#x25B2;
            </span>
          </button>
          {openAccordion === 2 && (
            <div className="accordion-content">
              <p>Book a lab test at home for convenience and accuracy.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
