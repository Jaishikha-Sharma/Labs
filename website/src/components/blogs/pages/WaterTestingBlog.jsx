import React from "react";

const WaterTestingBlog = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.content}>
        <h1 style={styles.title}>
          Water Testing: Ensuring Safe and Clean Drinking Water
        </h1>
        <p style={styles.description}>
          Water is one of the most vital resources for life, but without proper
          testing, it can pose serious health risks. Water testing is essential
          to ensure that the water we drink, cook with, and use in daily
          activities is free from harmful contaminants.
        </p>

        <h2 style={styles.heading}>1. Detecting Contaminants</h2>
        <p style={styles.text}>
          Water testing helps detect harmful substances like bacteria, nitrates,
          heavy metals, and chemicals. Early identification prevents the spread
          of waterborne diseases and ensures public health safety.
        </p>

        <h2 style={styles.heading}>2. Regulatory Compliance</h2>
        <p style={styles.text}>
          Municipal bodies and private providers must comply with health
          standards. Regular water testing ensures that the supply meets legal
          requirements and avoids penalties or public backlash.
        </p>

        <h2 style={styles.heading}>3. Protecting Vulnerable Populations</h2>
        <p style={styles.text}>
          Infants, elderly individuals, and those with weakened immune systems
          are more susceptible to waterborne illnesses. Safe water reduces their
          risk significantly.
        </p>

        <h2 style={styles.heading}>4. Environmental Monitoring</h2>
        <p style={styles.text}>
          Beyond human health, water testing is crucial for monitoring lakes,
          rivers, and reservoirs. It helps environmental agencies detect
          pollution sources and enforce regulations.
        </p>

        <h2 style={styles.heading}>5. Promoting Public Trust</h2>
        <p style={styles.text}>
          Regular testing and transparency foster public confidence in water
          providers. Communities that are informed about water safety are more
          engaged and proactive in water conservation efforts.
        </p>

        <p style={styles.footer}>
          In short, water testing is a cornerstone of public health,
          environmental protection, and sustainable living. Ensuring clean water
          is not just a duty—it's a right.
        </p>
      </div>

      <div style={styles.imageContainer}>
        <img
          src="/img2.webp"
          alt="Water Testing"
          style={styles.image}
        />
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "40px",
    gap: "40px",
    maxWidth: "1479px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
    flexWrap: "wrap",
  },
  content: {
    flex: 2,
    textAlign: "justify",
    minWidth: "300px",
  },
  imageContainer: {
    flex: 1.5,
    minWidth: "300px",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    maxHeight: "600px",
    objectFit: "cover",
  },
  title: {
    fontSize: "32px",
    marginBottom: "16px",
    color: "#222",
  },
  description: {
    fontSize: "18px",
    marginBottom: "20px",
    color: "#444",
    textAlign: "justify",
  },
  heading: {
    fontSize: "22px",
    marginTop: "20px",
    marginBottom: "10px",
    color: "#333",
  },
  text: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "10px",
    textAlign: "justify",
  },
  footer: {
    fontSize: "16px",
    fontWeight: "bold",
    marginTop: "30px",
    color: "#2c3e50",
    textAlign: "justify",
    imageContainer: {
      flex: 1.5,
      minWidth: "300px",
    },
    image: {
      width: "100%",
      height: "auto",
      borderRadius: "8px",
      maxHeight: "600px",
      objectFit: "cover",
    },
  },
};

export default WaterTestingBlog;
