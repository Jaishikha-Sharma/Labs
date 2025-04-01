import React from "react";
import "./ServiceCard.css"; 
import Service1 from "../../../assets/images/1.png";
import Service2 from "../../../assets/images/service.png";
import Service3 from "../../../assets/images/service2.png";
import Service4 from "../../../assets/images/service4.png";
import Service5 from "../../../assets/images/5.png";
import Service6 from "../../../assets/images/6.png";
import Service7 from "../../../assets/images/7.png";
import Service8 from "../../../assets/images/8.png";

const ServiceCard = () => {
  const services = [
    {
      icon: Service1,
      title: "Food and Beverage Testing",
      description: "Processed foods, vegetables, pulses, cereals, tea, coffee, spices....",
    },
    {
      icon: Service2,
      title: "Pharmaceutical Testing",
      description: "Microbiological study in food items as per the food safety and standards Act.",
    },
    {
      icon: Service3,
      title: "Water Testing",
      description: "Jagdamba Lab undertakes a series of investigations and validations.",
    },
    {
      icon: Service4,
      title: "Herbal Testing",
      description: "Leading Players of pharmaceutical and cosmetic industry place their trust in Jagdamba Lab.",
    },
    {
      icon: Service5,
      title: "Ores & Minerals",
      description: "We always provide people a complete solution for Ores & Minerals.",
    },
    {
      icon: Service6,
      title: "Petroleum Products",
      description: "Frequently tested materials include various petroleum products.",
    },
    {
      icon: Service7,
      title: "Papers",
      description: "Handmade & All Type Papers tested for quality assurance.",
    },
    {
      icon: Service8,
      title: "Metals & Alloys",
      description: "Assays, alloying element determinations, and impurity profiles for all metal types.",
    },
  ];

  return (
    <div className="services-container">
      {services.map((service, index) => (
        <div className="service-card" key={index}>
          <img src={service.icon} alt={service.title} className="service-icon" />
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
