import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const AdminDashboard = () => {
  const token = useSelector((state) => state.auth.token);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/admin/dashboard', {
          headers: { Authorization: token }
        });
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, [token]);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.username} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
