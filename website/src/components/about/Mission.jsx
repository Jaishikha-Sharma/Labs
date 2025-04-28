import React from "react";

const Mission = () => {
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
  };

  return (
    <div style={styles.container}>
      {/* Mission Section */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Our Mission</h2>
        <p style={styles.paragraph}>
          At ECMA Testing Laboratories, our mission is to deliver accurate, timely, and reliable testing and certification services that empower industries to achieve compliance, ensure product quality, and promote safety and sustainability. 
        </p>
        <p style={styles.paragraph}>
          We aim to become a trusted partner in quality assurance by combining scientific expertise, state-of-the-art technology, and a deep understanding of global standards. We are committed to supporting innovation and continuous improvement in every sector we serve — from construction to agriculture, environment, food safety, petroleum, and more.
        </p>
      </section>

      {/* Vision Section */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Our Vision</h2>
        <p style={styles.paragraph}>
          Our vision is to be recognized as a global leader in laboratory testing, inspection, and certification services — known for our integrity, accuracy, and commitment to excellence. 
        </p>
        <p style={styles.paragraph}>
          We envision a future where ECMA stands at the forefront of innovation in testing services, helping businesses of all sizes ensure safety, quality, and compliance in an increasingly complex world. By investing in people, processes, and technology, we aim to create lasting value for our clients and contribute to a safer, cleaner, and more sustainable planet.
        </p>
      </section>
    </div>
  );
};

export default Mission;
