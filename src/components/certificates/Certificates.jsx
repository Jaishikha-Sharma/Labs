import React from 'react';
import './Certificate.css';

const Certificates = () => {
  return (
    <div className="certificate-container">
      <h2>Certificates</h2>
      <div className="pdf-viewer">
        <iframe 
          src="/Avinya minerals.pdf" 
          title="Certificate PDF"
          className="pdf-frame"
        ></iframe>
      </div>
    </div>
  );
};

export default Certificates;
