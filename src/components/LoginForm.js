import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

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

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:3001/users');
      const existingUser = response.data.find(user => user.email === email);
      if (existingUser) {
        alert('Email already registered');
      } else {
        const newUser = { email, password, balance: 0 };
        await axios.post('http://localhost:3001/users', newUser);
        alert('Registration successful. Please login.');
        setIsRegistering(false);
      }
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  const toggleRegisterMode = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div>
      {isRegistering ? (
        <form onSubmit={handleRegister}>
          <h2>Register</h2>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Email" 
            required 
          />
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Password" 
            required 
          />
          <button type="submit">Register</button>
          <button type="button" onClick={toggleRegisterMode}>Switch to Login</button>
        </form>
      ) : (
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Email" 
            required 
          />
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Password" 
            required 
          />
          <button type="submit">Login</button>
          <button type="button" onClick={toggleRegisterMode}>Switch to Register</button>
        </form>
      )}
    </div>
  );
};

export default LoginForm;
