import React, { useState } from "react";
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
  const [ismodellOpen, setIsmodellOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openmodell = (src) => {
    setCurrentImage(src);
    setIsmodellOpen(true);
  };

  const closemodell = () => {
    setIsmodellOpen(false);
    setCurrentImage(null);
  };

  return (
    <>
      <div className="gallery-container">
        <h2 style={{ marginTop: "30px" }} className="blog-heading">Image Gallery</h2>
        <div className="gallery-grid">
          {images.map((src, index) => (
            <div key={index} className="gallery-item" onClick={() => openmodell(src)}>
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* modell */}
      {ismodellOpen && (
        <div className="modell" onClick={closemodell}>
          <div className="modell-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closemodell}>×</span>
            <img src={currentImage} alt="Zoomed" className="modell-image" loading="lazy" />
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
