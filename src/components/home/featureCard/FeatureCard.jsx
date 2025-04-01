import React from "react";
import "./FeatureCard.css"; 
import Processimg from "../../../assets/images/process.png";
import Instrumentations from "../../../assets/images/2.png";
import quality from "../../../assets/images/3.png";
import team from "../../../assets/images/4.png";

const FeatureCards = () => {
  const features = [
    {
     icon: Processimg,
      title: "Infrastructure",
      description: "Infrastructure of the lab has been designed carefully.",
    },
    {
      icon: Instrumentations,
      title: "Instrumentations",
      description: "Many more sophisticated instruments are available.",
    },
    {
      icon: quality,
      title: "Quality Assurance",
      description: "We at M/S Jagdamba Laboratories pledge to achieve excellence.",
    },
    {
      icon: team,
      title: "Our Team",
      description: "Our expert and qualified team delivers enhanced services.",
    },
  ];

  return (
    <div className="features-container">
      {features.map((feature, index) => (
        <div className="feature-card" key={index}>
          <img src={feature.icon} alt={feature.title} className="feature-icon" />
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureCards;
