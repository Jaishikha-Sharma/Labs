import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Dashboard.css";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    avatar: "",
  });
  const [tests, setTests] = useState([
    { name: "CBC", date: "2024-04-01", price: 500, pdf: "#" },
    { name: "KFT", date: "2024-04-15", price: 800, pdf: "#" },
    { name: "LFT", date: "2024-04-20", price: 700, pdf: "#" },
  ]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:500/api/profile", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setUser(response.data);
          setFormData({
            name: response.data.name,
            email: response.data.email,
            phone: response.data.phone || "",
            avatar: response.data.avatar,
          });
        })
        .catch((err) => console.error("Error fetching profile:", err));
    }
  }, []);

  const handleUpdate = () => {
    const token = localStorage.getItem("token");
    axios
      .put("http://localhost:500/api/profile", formData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setUser(response.data);
        alert("Profile updated successfully.");
      })
      .catch((err) => console.error("Error updating profile:", err));
  };

  return (
    <div className="dashboard-container">
      <div className="profile-section">
        <h2>ECMA LAB</h2>
        <div className="profile-card">
          <img src={user?.avatar || "default-avatar.png"} alt="Avatar" className="avatar" />
          <h3>{user?.name}</h3>
          <p>{user?.email}</p>
          <h4>Edit Profile</h4>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <input
            type="text"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
          <input
            type="file"
            onChange={(e) => setFormData({ ...formData, avatar: e.target.files[0] })}
          />
          <button onClick={handleUpdate}>Save</button>
        </div>
      </div>

      <div className="test-history">
        <h3>Edit Profile</h3>
        <select>
          <option>Month</option>
        </select>
        <select>
          <option>April</option>
        </select>
        <select>
          <option>2024</option>
        </select>
        <table>
          <thead>
            <tr>
              <th>Test Name</th>
              <th>Date</th>
              <th>PDF</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {tests.map((test, index) => (
              <tr key={index}>
                <td>{test.name}</td>
                <td>{test.date}</td>
                <td>
                  <a href={test.pdf}>Download</a>
                </td>
                <td>{test.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
