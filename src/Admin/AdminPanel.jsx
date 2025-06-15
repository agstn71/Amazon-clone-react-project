import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token"); // ensure token is saved on login

        const res = await axios.get("http://localhost:5000/api/admin/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUsers(res.data);
      } catch (err) {
        console.error("Failed to fetch users", err);
        alert("Access Denied or Error fetching users");
      }
    };

    fetchUsers();
  }, []);

  return (
   <div className="bg-green-500">
      hello
   </div>
  );
};

export default AdminPanel;
