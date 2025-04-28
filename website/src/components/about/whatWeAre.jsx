import React from "react";

const WhatWeAre = () => {
  const styles = {
    container: {
      maxWidth: "90%",
      margin: "0 auto",
      padding: "40px 20px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: "#2c3e50",
      backgroundColor: "#fff",
    },
    section: {
      marginBottom: "40px",
    },
    heading: {
      fontSize: "26px",
      color: "#000",
      fontWeight: "bold",
      marginBottom: "20px",
      borderLeft: "5px solid #2e1c06",
      paddingLeft: "15px",
    },
    paragraph: {
      fontSize: "16px",
      lineHeight: "1.8",
      textAlign: "justify",
      marginBottom: "12px",
    },
    list: {
      paddingLeft: "0px",
    },
    listItem: {
      fontSize: "16px",
      lineHeight: "1.8",
      textAlign: "justify",
      marginBottom: "10px",
    },
  };

  return (
    <div style={styles.container}>
      {/* About Section */}
      <section style={styles.section}>
        <h2 style={styles.heading}>About ECMA Testing Laboratories</h2>
        <p style={styles.paragraph}>
          ECMA Testing Laboratories is a leading provider of comprehensive material and chemical testing solutions. With a commitment to quality, safety, and compliance, we support industries across India and beyond by delivering accurate, timely, and reliable laboratory results. Our services cover a wide range of sectors including construction, agriculture, environmental management, food safety, petroleum, and metallurgy.
        </p>
        <p style={styles.paragraph}>
          Backed by a team of experienced scientists and technicians, ECMA operates with state-of-the-art equipment and internationally recognized standards. We specialize in testing building materials, water, soil, rubber, metals and alloys, fertilizers, and food products. Each analysis is conducted in accordance with industry regulations and best practices, ensuring results that drive safety, sustainability, and innovation.
        </p>
        <p style={styles.paragraph}>
          Our vision is to be a trusted partner in quality assurance by offering not only testing but also inspection, auditing, and certification services. We are committed to helping businesses meet regulatory standards, enhance product credibility, and gain market access globally.
        </p>
      </section>

      {/* Services Section */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Our Core Services</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong>Water Testing:</strong> Analysis of drinking water, groundwater, industrial discharge, and wastewater.
          </li>
          <li style={styles.listItem}>
            <strong>Soil Testing:</strong> Nutrient profiling and contamination analysis for agriculture and construction.
          </li>
          <li style={styles.listItem}>
            <strong>Environmental Testing:</strong> Comprehensive monitoring of air, soil, and water quality.
          </li>
          <li style={styles.listItem}>
            <strong>Metals & Alloys Testing:</strong> Mechanical and chemical evaluation of metallic materials.
          </li>
          <li style={styles.listItem}>
            <strong>Food & Agriculture Testing:</strong> Safety and quality testing of food products, grains, and fertilizers.
          </li>
          <li style={styles.listItem}>
            <strong>Petroleum Product Testing:</strong> Quality control for fuels, lubricants, and petroleum derivatives.
          </li>
          <li style={styles.listItem}>
            <strong>Construction Material Testing:</strong> Analysis of cement, concrete, bitumen, and structural components.
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Contact Us</h2>
        <p style={styles.paragraph}>
          <strong>ECMA Testing Laboratories</strong>
        </p>
        <p style={styles.paragraph}>
        S-135, 136, RIICO Phase-1, Beawar Gas Godown, Ajmer Road, Beawar 305901
        </p>
        <p style={styles.paragraph}><strong>Email:</strong> ecmalab2021@gmail.com</p>
        <p style={styles.paragraph}><strong>Phone:</strong> +91 8949873474</p>
        <p style={styles.paragraph}><strong>Phone:</strong> +91 8919578845</p>
        <p style={styles.paragraph}><strong>Website:</strong> www.ecmalabs.com</p>
        <p style={styles.paragraph}>Office Hours: Monday to Saturday – 9:00 AM to 6:00 PM</p>
      </section>
    </div>
  );
};

export default WhatWeAre;
