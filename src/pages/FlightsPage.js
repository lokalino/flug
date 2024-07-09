

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FlightsPage.css'; 
import '../styles/animations.css'; 
import '../styles/colors.css'; 

const FlightsPage = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axios.get('http://localhost:3001/flights');
        setFlights(response.data);
      } catch (error) {
        console.error('Failed to fetch flights', error);
      }
    };

    fetchFlights();
  }, []);

  return (
    <div className="flights-page">
      <h2>Available Flights</h2>
      <ul className="flight-list">
        {flights.map(flight => (
          <li key={flight.id} className="flight-item">
            <div><strong>From:</strong> {flight.from}</div>
            <div><strong>To:</strong> {flight.to}</div>
            <div><strong>Price:</strong> ${flight.price}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlightsPage;
