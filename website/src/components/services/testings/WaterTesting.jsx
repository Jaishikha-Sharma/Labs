import React, { useState } from "react";
import "./Testing.css";

const WaterTesting = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="water-testing">
      <h3 style={{ marginTop: "30px", marginBottom: "30px" }}>Water Testing</h3>
      <div className="row">
        <div className="col-lg-8">
          <p>
            <strong>ECMA LABS</strong> provides advanced{" "}
            <strong>water quality testing</strong> services to ensure safe and
            clean water for various applications. Our laboratory is equipped
            with state-of-the-art instruments to analyze drinking water,
            industrial water, and wastewater samples.
          </p>
          <p>
            <strong>Key Services:</strong>
          </p>
          <ul>
            <li>pH and Alkalinity Testing</li>
            <li>Heavy Metals Analysis</li>
            <li>Bacterial Contamination Testing</li>
            <li>Hardness & Mineral Content Evaluation</li>
            <li>Wastewater Quality Assessment</li>
          </ul>
        </div>
        <div className="col-lg-4">
          <img src="https://i.imgur.com/4Ixnddk.jpeg" alt="water testing" />
        </div>
      </div>

      <button className="open-form-btn" onClick={() => setShowForm(!showForm)}>
        {showForm ? "Hide Form" : "Test Now"}
      </button>

      {showForm && (
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="inline-test-form"
        >
          <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />

          <div className="form-row">
            <label>Name</label>
            <input type="text" name="name" required />
          </div>

          <div className="form-row">
            <label>Email</label>
            <input type="email" name="email" required />
          </div>

          <div className="form-row">
            <label>Address</label>
            <input type="text" name="address" required />
          </div>

          <div className="form-row">
            <label>Country</label>
            <input type="text" name="country" required />
          </div>

          <div className="form-row">
            <label>Testing Type</label>
            <select name="testing" required>
              <option value="">-- Select Testing --</option>
              <option value="Water">Water</option>
              <option value="Soil">Soil</option>
              <option value="Herbal">Herbal</option>
              <option value="Environment">Environment</option>
              <option value="Food">Food</option>
            </select>
          </div>

          <div className="form-row">
            <label>Sample Type</label>
            <select name="sample_type" required>
              <option value="">-- Select Sample Type --</option>
              <option value="Raw">Raw</option>
              <option value="Processed">Processed</option>
              <option value="Packaged">Packaged</option>
            </select>
          </div>

          <button type="submit" className="submit-btn">
            Submit Test
          </button>
        </form>
      )}
    </div>
  );
};

export default WaterTesting;
