import React from "react";

const TestForm = ({ serviceName }) => {
  const [result, setResult] = React.useState("");

  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
    "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain",
    "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
    "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
    "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Chad", "Chile", "China",
    "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus",
    "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador",
    "Egypt", "Germany", "Ghana", "Greece", "Guatemala", "Honduras", "Hungary", "Iceland",
    "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan",
    "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon",
    "Lesotho", "Liberia", "Libya", "Lithuania", "Luxembourg", "Madagascar", "Malawi",
    "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico",
    "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar",
    "Namibia", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
    "North Macedonia", "Norway", "Oman", "Pakistan", "Palestine", "Panama",
    "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar",
    "Romania", "Russia", "Rwanda", "Saudi Arabia", "Senegal", "Serbia", "Seychelles",
    "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Somalia", "South Africa",
    "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Sweden", "Switzerland",
    "Syria", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia",
    "Turkey", "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom",
    "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen",
    "Zambia", "Zimbabwe"
  ];

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "your-real-access-key-here"); // ✅ Replace this with your actual Web3Forms access key
    formData.append("service", serviceName);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Form Submitted Successfully!");
      event.target.reset();
    } else {
      console.error("Submission error:", data);
      setResult(`❌ ${data.message || "Submission failed."}`);
    }
  };

  return (
    <>
      <style>{`
        .inline-test-form {
          max-width: 800px;
          margin: 40px auto;
          padding: 30px;
          border-radius: 12px;
          background: #fff;
          box-shadow: 0 6px 18px rgba(0,0,0,0.08);
          font-family: 'Segoe UI', sans-serif;
        }

        .form-row {
          display: flex;
          flex-direction: column;
          margin-bottom: 20px;
          width: 100%;
        }

        .form-pair {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .form-pair .form-row {
          flex: 1;
          min-width: 250px;
        }

        label {
          font-weight: 600;
          margin-bottom: 6px;
          color: #333;
        }

        input, select, textarea {
          width: 100%;
          padding: 10px 12px;
          font-size: 14px;
          border: 1px solid #ccc;
          border-radius: 6px;
          background: #fafafa;
          transition: border-color 0.3s;
        }

        input:focus, select:focus, textarea:focus {
          border-color: #a26b28;
          background-color: #fff;
          outline: none;
        }

        textarea {
          resize: vertical;
        }

        .submit-btn {
          margin-top: 20px;
          padding: 12px 24px;
          background-color: #28a745;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 15px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .submit-btn:hover {
          background-color: #218838;
        }

        .result-message {
          margin-top: 15px;
          font-weight: 500;
          color: #555;
        }

        @media (max-width: 600px) {
          .form-pair {
            flex-direction: column;
          }
        }
      `}</style>

      <form onSubmit={onSubmit} className="inline-test-form">
        <div className="form-pair">
          <div className="form-row">
            <label>Name</label>
            <input type="text" name="name" required />
          </div>
          <div className="form-row">
            <label>Email</label>
            <input type="email" name="email" required />
          </div>
        </div>

        <div className="form-pair">
          <div className="form-row">
            <label>Address</label>
            <input type="text" name="address" required />
          </div>
          <div className="form-row">
            <label>Country</label>
            <select name="country" required>
              <option value="">-- Select Country --</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-pair">
          <div className="form-row">
            <label>Testing Type</label>
            <select name="testing" required>
              <option value="">-- Select Testing --</option>
              <option value="Water">Water</option>
              <option value="Soil">Soil</option>
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
        </div>

        <div className="form-row">
          <label>Message</label>
          <textarea name="message" rows="4" placeholder="Your message" required />
        </div>

        <button type="submit" className="submit-btn">Submit Test</button>

        {result && <p className="result-message">{result}</p>}
      </form>
    </>
  );
};

export default TestForm;
