import React, { useState } from "react";
import "./About.css";

const About = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <>
      {/* Banner Image with Reduced Height */}
      <div>
        <img
          src="https://i.imgur.com/8Ie7SqD.jpeg"
          alt="Contact-us"
          className="about-banner"
        />
      </div>

      {/* Centered Heading */}
      <div className="about-heading">
        <h3>Welcome To ECMA Testing Laboratories</h3>
      </div>

      {/* About Content */}
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 text-center">
            <img
              src="https://i.imgur.com/gdmeAs5.jpeg"
              alt="about"
              className="about-image"
            />
          </div>
          <div className="col-lg-8">
            <p className="about-text">
              ECMA Testing Laboratories provider offering world class services
              related to material testing and chemical testing services. We
              perform different types of tests for building / road materials,
              water and rubber, metals and alloys , agriculture products,
              fertilizers, Foods and petroleum products etc. We carry out these
              tests under the guidance of our experienced and skilled
              professionals. We ensure our valuable clients with reliability and
              cost effective services.
            </p>
            <p className="about-text">
              We go beyond testing, inspecting and certifying products; we are a
              Total Quality Assurance provider to industries worldwide. Through
              our global network of state-of-the-art facilities and
              industry-leading technical expertise we provide innovative and
              bespoke Assurance, Testing, Inspection and Certification services
              to customers.
            </p>
            <p className="about-text">
              ECMA deliver Total Quality Assurance expertise 24 hours a day, 7
              days a week with our industry-winning processes and
              customer-centric culture. Whether your business is local or
              global, we can help to ensure that your products meet quality,
              health, environmental, safety, and social accountability standards
              for virtually any market around the world. We hold extensive
              global accreditations, recognitions, and agreements, and our
              knowledge of and expertise in overcoming regulatory, market, and
              supply chain hurdles is unrivalled.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h3>What we do</h3>
        {/* Accordion Section */}
        <div className="accordion">
          {/* First Accordion */}
          <div className="accordion-item">
            <button
              className="accordion-header"
              onClick={() => toggleAccordion(1)}
            >
              Assurance
              <span className={`icon ${openAccordion === 1 ? "rotate" : ""}`}>
                &#x25B2;
              </span>
            </button>
            {openAccordion === 1 && (
              <div className="accordion-content">
                <p className="about-text">
                  Assurance goes beyond testing, inspection and certification to
                  look at the underlying elements that make a company and its
                  products successful. Intertek’s assurance solutions provide
                  confidence and total peace of mind that your operating
                  procedures, systems and people are functioning properly to
                  give you a competitive advantage in the marketplace.
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
              Testing
              <span className={`icon ${openAccordion === 2 ? "rotate" : ""}`}>
                &#x25B2;
              </span>
            </button>
            {openAccordion === 2 && (
              <div className="accordion-content">
                <p className="about-test">
                  From laboratory testing to regulatory compliance and beyond,
                  advance the value and marketability of your products with
                  testing. We help you bring your product to market quickly,
                  responsibly, and economically to keep your business
                  continually moving ahead. SRTL testing and certification
                  services support the quality, performance, regulatory
                  compliance, safety, benchmarking, evaluation, validation,
                  analysis, and other requirements for products, components, raw
                  materials, sites, and facilities.
                </p>
              </div>
            )}
          </div>
          {/* Third Accordion - Inspection */}
          <div className="accordion-item">
            <button
              className="accordion-header"
              onClick={() => toggleAccordion(3)}
            >
              Inspection
              <span className={`icon ${openAccordion === 3 ? "rotate" : ""}`}>
                &#x25B2;
              </span>
            </button>
            {openAccordion === 3 && (
              <div className="accordion-content">
                <p className="about-text">
                  Inspections help minimise the risk of defective products by
                  ensuring they meet both customer standards and industry and
                  government regulations. This serves to protect your business
                  interests, help manage your risk and ensure quality products
                  are manufactured and delivered to their final destination at
                  the specifications of the customer. We also support the life
                  management of plant facilities such as power plants and oil
                  refineries with inspection and testing, ensuring that your
                  assets are operating safely and reliably.
                </p>
              </div>
            )}
          </div>

          {/* Fourth Accordion - Certification */}
          <div className="accordion-item">
            <button
              className="accordion-header"
              onClick={() => toggleAccordion(4)}
            >
              Certification
              <span className={`icon ${openAccordion === 4 ? "rotate" : ""}`}>
                &#x25B2;
              </span>
            </button>
            {openAccordion === 4 && (
              <div className="accordion-content">
                <p className="about-text">
                  Our leadership and expertise in regulatory standards and
                  certifications keeps you ahead of changes and challenges, and
                  our capabilities and knowledge of the process from sourcing to
                  market position brings solutions that are efficient,
                  cost-effective, and meet best industry practices.
                  Certification proves your credibility to the market. To
                  deliver that credibility, SRTL maintains extensive global
                  accreditations and recognitions for our testing and
                  certification services.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
