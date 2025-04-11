import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Dashboard.css";
import AdminDashboard from "./admin/AdminDashboard";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    avatar: "",
  });
  const [tests, setTests] = useState([]);

  const BASE_URL =
    window.location.hostname === "localhost"
      ? "http://localhost:5000"
      : "https://auth-backend-ombp.onrender.com";

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get(`${BASE_URL}/api/profile`, {
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

      axios
        .get(`${BASE_URL}/api/test/getTest`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log("Fetched tests:", res.data);
          setTests(res.data);
        })
        .catch((err) => console.error("Error fetching tests:", err));
    }
  }, []);

  const handleUpdate = () => {
    const token = localStorage.getItem("token");

    const updatedData = new FormData();
    updatedData.append("name", formData.name);
    updatedData.append("email", formData.email);
    updatedData.append("phone", formData.phone);
    if (formData.avatar instanceof File) {
      updatedData.append("avatar", formData.avatar);
    }

    axios
      .put(`${BASE_URL}/api/profile`, updatedData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setUser(response.data);
        alert("Profile updated successfully.");
      })
      .catch((err) => console.error("Error updating profile:", err));
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div className="dashboard-container">
      {user.isAdmin ? (
        <AdminDashboard token={localStorage.getItem("token")} />
      ) : (
        <>
          <div className="profile-section">
            <h2 style={{textAlign:"center"}}>ECMA LAB</h2>
            <div className="profile-card">
              <img
                src={
                  typeof user.avatar === "string" && user.avatar !== ""
                    ? user.avatar
                    : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                }
                alt="Avatar"
                className="avatar"
              />
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <p>{user.phone}</p>
              <h4>Edit Profile</h4>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <input
                type="text"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
              {/* <input
                type="file"
                onChange={(e) =>
                  setFormData({ ...formData, avatar: e.target.files[0] })
                }
              /> */}
              <button onClick={handleUpdate}>Save</button>
            </div>
          </div>

          <div className="test-history">
            <h3>Test History</h3>
            <div className="filters">
              <select>
                <option>Month</option>
                <option>April</option>
              </select>
              <select>
                <option>2024</option>
              </select>
            </div>
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
                {tests.map((test) => (
                  <tr key={test._id}>
                    <td>{test.testName}</td>
                    <td>{new Date(test.date).toLocaleDateString()}</td>
                    <td>
                      {test.pdfUrl ? (
                        <a href={test.pdfUrl} target="_blank" rel="noreferrer">
                          Download
                        </a>
                      ) : (
                        "N/A"
                      )}
                    </td>
                    <td>{test.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
