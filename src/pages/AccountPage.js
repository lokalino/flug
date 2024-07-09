

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AccountPage.css'; 
import '../styles/animations.css'; 
import '../styles/colors.css'; 
const AccountPage = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/users/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.error('Failed to fetch user', error);
      }
    };

    fetchUser();
  }, [userId]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="account-page">
      <h2>Account Details</h2>
      <div className="details">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Balance:</strong> ${user.balance}</p>
      </div>
    </div>
  );
};

export default AccountPage;
