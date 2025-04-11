import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Admin.css";
import AssignTest from "./AssignTest";

const AdminDashboard = ({ token }) => {
  const [userList, setUserList] = useState([]);

  const BASE_URL =
    window.location.hostname === "localhost"
      ? "http://localhost:5000"
      : "https://auth-backend-ombp.onrender.com";

  useEffect(() => {
    if (token) {
      axios
        .post(`${BASE_URL}/api/get-user-list`, {}, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          if (response.data.success) {
            // Show newest users on top
            setUserList(response.data.userList.reverse());
          } else {
            console.error("Failed to fetch user list.");
          }
        })
        .catch((error) => {
          console.error("Error fetching user list:", error);
        });
    }
  }, [token]);

  return (
    <div className="admin-dashboard">
      <div className="admin-content">
        <div className="admin-left">
          <h2>Admin Dashboard</h2>
          <AssignTest token={token} />
        </div>

        <div className="admin-right">
          <div className="table-wrapper">
            <table className="user-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {userList.map((user) => (
                  <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone || "N/A"}</td>
                    <td>
                      {user.isAdmin ? (
                        <span className="admin-badge">Admin</span>
                      ) : (
                        "User"
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
