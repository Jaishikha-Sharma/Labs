import React from "react";
import "./Gallery.css";

const images = [
  "https://i.imgur.com/l6n1Me9.jpeg",
  "https://i.imgur.com/IP1vHaM.jpeg",
  "https://i.imgur.com/VzOddmp.jpeg",
  "https://i.imgur.com/ulIXVNL.jpeg",
  "https://i.imgur.com/uY4ebQa.jpeg",
  "https://i.imgur.com/KFxyeiM.jpeg",
  "https://i.imgur.com/v519PSS.jpeg",
  "https://i.imgur.com/Dzs0rsy.jpeg",
  "https://i.imgur.com/PWFgb7x.jpeg",
  "https://i.imgur.com/qdCoZKq.jpeg",
  "https://i.imgur.com/Vq3fvjT.jpeg",
  "https://i.imgur.com/5brhZSL.jpeg",
  "https://i.imgur.com/jEw8lkB.jpeg",
  "https://i.imgur.com/ITvRhry.jpeg",
  "https://i.imgur.com/tRdTm68.jpeg",
  "https://i.imgur.com/tdgJs59.jpeg",
  "https://i.imgur.com/kuao3AB.jpeg",
  "https://i.imgur.com/khTobcZ.jpeg",
  "https://i.imgur.com/129Di8g.jpeg",
  "https://i.imgur.com/yfRuPOe.jpeg"
];

const Gallery = () => {

  return (
  <>
    <div>
        <img
          src="https://i.imgur.com/8Ie7SqD.jpeg"
          alt="Contact-us"
          className="about-banner"
        />
      </div>
    <div className="gallery-container">
      <h2>Image Gallery</h2>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Gallery;
