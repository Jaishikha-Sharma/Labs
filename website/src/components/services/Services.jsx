import React from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";

const services = [
  { id: 1, title: "Testing Lab", img: "https://i.imgur.com/pRM0U82.jpeg", link: "/testing-lab" },
  { id: 2, title: "Water Testing", img: "https://i.imgur.com/4Ixnddk.jpeg", link: "/water-Testing" },
  { id: 3, title: "Soil Testing", img: "https://i.imgur.com/p4FU48L.jpeg", link: "/soil-testing" },
  { id: 4, title: "Food Testing", img: "https://i.imgur.com/qRzxJNn.jpeg", link: "/food-testing" },
  { id: 5, title: "Herbal Testing", img: "https://i.imgur.com/LulBG5x.jpeg", link: "/herbal-testing" },
  { id: 6, title: "Enviornment Testing", img: "https://i.imgur.com/OZZmdxk.jpeg", link: "/Enviornment-testing" },
];

const Services = () => {
  const navigate = useNavigate(); 

  return (
    <>
      <div>
        <img src="https://i.imgur.com/P3Kywuh.png" alt="service" width="100%" />
      </div>

      <div>
        <h3 className="about-heading">Services</h3>
      </div>

      <div className="services-container">
        {services.map((service) => (
          <div
            key={service.id}
            className="service-card"
            onClick={() => navigate(service.link)} 
          >
            <img src={service.img} alt={service.title} className="service-img" />
            <h4 className="service-title">{service.title}</h4>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
