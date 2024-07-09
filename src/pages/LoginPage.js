

import React, { useState } from 'react';
import axios from 'axios';
import './LoginPage.css'; 
import '../styles/animations.css'; 
import '../styles/colors.css'; 

const LoginPage = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:3001/users');
      const user = response.data.find(user => user.email === email && user.password === password);
      if (user) {
        onLoginSuccess(user.id);
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="login-page"> {}
      <div className="form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Email" 
              required 
            />
          </div>
          <div className="input-group">
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Password" 
              required 
            />
          </div>
          <div className="input-group">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
