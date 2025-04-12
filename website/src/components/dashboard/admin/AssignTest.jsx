import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AssignTest.css";

const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : "https://auth-backend-ombp.onrender.com";

const AssignTest = ({ token }) => {
  const [formData, setFormData] = useState({
    userId: "",
    testName: "",
    date: "",
    price: "",
    pdfUrl: "",
  });

  const [pdfFile, setPdfFile] = useState(null);
  const [users, setUsers] = useState([]);

  // ✅ Fetch user list
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.post(
          `${BASE_URL}/api/get-user-list`,
          { page: 1, limit: 100 },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUsers(res.data.userList || []);
      } catch (err) {
        console.error("Error fetching users:", err.message);
      }
    };

    fetchUsers();
  }, [token]);

  const handlePdfUpload = async () => {
    if (!pdfFile) return "";

    const data = new FormData();
    data.append("file", pdfFile);

    try {
      const res = await axios.post(`${BASE_URL}/api/test/upload`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      return res.data.url || "";
    } catch (err) {
      console.error("PDF upload failed:", err);
      return "";
    }
  };

  const handleAssign = async (e) => {
    e.preventDefault();

    try {
      const uploadedPdfUrl = pdfFile ? await handlePdfUpload() : "";

      const payload = {
        ...formData,
        pdfUrl: uploadedPdfUrl,
      };

      const res = await axios.post(`${BASE_URL}/api/test/assign`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 201) {
        alert("✅ Test assigned successfully!");
        setFormData({
          userId: "",
          testName: "",
          date: "",
          price: "",
          pdfUrl: "",
        });
        setPdfFile(null);
      } else {
        alert("❌ Failed to assign test: " + (res.data.message || "Unknown error"));
      }
    } catch (err) {
      const msg = err.response?.data?.message || err.message || "Unexpected error";
      console.error("❌ Error assigning test:", msg);
      alert("❌ Failed to assign test: " + msg);
    }
  };

  return (
    <div className="assign-test-container">
      <form className="assign-form" onSubmit={handleAssign}>
        <label>Select User</label>
        <select
          required
          value={formData.userId}
          onChange={(e) =>
            setFormData({ ...formData, userId: e.target.value })
          }
        >
          <option value="">Select a User</option>
          {users.map((user) => (
            <option key={user._id} value={user._id}>
              {user.name} ({user.email})
            </option>
          ))}
        </select>

        <label>Test Name</label>
        <input
          type="text"
          placeholder="e.g., CBC"
          value={formData.testName}
          onChange={(e) =>
            setFormData({ ...formData, testName: e.target.value })
          }
          required
        />

        <label>Date</label>
        <input
          type="date"
          value={formData.date}
          onChange={(e) =>
            setFormData({ ...formData, date: e.target.value })
          }
          required
        />

        <label>Price (₹)</label>
        <input
          type="number"
          value={formData.price}
          onChange={(e) =>
            setFormData({ ...formData, price: e.target.value })
          }
          required
        />

        <label>Upload PDF Report</label>
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setPdfFile(e.target.files[0])}
          required
        />

        <button type="submit">Assign Test</button>
      </form>
    </div>
  );
};

export default AssignTest;
