import React from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";

const services = [
  { id: 1, title: "Testing Lab", img: "https://i.imgur.com/pRM0U82.jpeg", link: "/testing-lab" },
  { id: 2, title: "Water Testing", img: "https://i.imgur.com/4Ixnddk.jpeg", link: "/water-Testing" },
  { id: 3, title: "Soil Testing", img: "https://i.imgur.com/p4FU48L.jpeg", link: "/soil-testing" },
  { id: 4, title: "Food Testing", img: "https://i.imgur.com/qRzxJNn.jpeg", link: "/food-testing" },
  { id: 5, title: "Metals Testing", img: "https://i.imgur.com/mN7O1jH.png", link: "/metals" },
  { id: 6, title: "Enviornment Testing", img: "https://i.imgur.com/OZZmdxk.jpeg", link: "/Enviornment-testing" },
  { id: 7, title: "Coal & Coke Testing", img: "https://i.imgur.com/4SIA3cN.png", link: "/coke-testing" },
  { id: 8, title: "Building & Construction material Analysis", img: "https://i.imgur.com/z1cywy5.png", link: "/building-analysis" },
];

const Services = () => {
  const navigate = useNavigate(); 

  return (
    <>
      <div>
        <img src="https://i.imgur.com/P3Kywuh.png" alt="service" width="100%" />
      </div>

      <div>
        <h3 style={{textAlign:"center" , marginTop:"30px", marginBottom:"30px"}}>Services</h3>
      </div>
       <div style={{margin:"5px" , padding:"15px"}}>
        <p style={{ textAlign: "justify" }}>
          ECMAL provides a range of value-added solutions that reduce supply chain risks and safeguard quality and quantity when bringing SOIL & CLAY products to market. The value of your shipments is best determined by a quality and quantity assessment based on impartial sampling and analysis. ECMAL is recognized for the quality and integrity of our services. From testing, we use the latest technologies to provide you with accurate and reliable data reporting. We invest heavily in our technical experts and equipment to ensure all our services meet ASTM, ISO, JCRM, and industry requirements.
        </p>
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
