

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AccountPage from './pages/AccountPage';
import FlightsPage from './pages/FlightsPage';
import './styles/colors.css';
import './styles/animations.css';

const App = () => {
  const [userId, setUserId] = useState(null);

  const handleLoginSuccess = (id) => {
    setUserId(id);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/account" element={userId ? <AccountPage userId={userId} /> : <LoginPage onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/flights" element={<FlightsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
