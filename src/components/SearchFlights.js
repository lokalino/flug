import React, { useState } from 'react';
import axios from 'axios';

const SearchFlights = ({ onFlightsFound }) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const searchFlights = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3001/flights`);
      const flights = response.data.filter(flight => flight.from.toLowerCase() === from.toLowerCase() && flight.to.toLowerCase() === to.toLowerCase());
      onFlightsFound(flights);
    } catch (error) {
      console.error('Failed to fetch flights', error);
    }
  };

  return (
    <form onSubmit={searchFlights}>
      <h2>Search Flights</h2>
      <input 
        type="text" 
        value={from} 
        onChange={(e) => setFrom(e.target.value)} 
        placeholder="From" 
        required 
      />
      <input 
        type="text" 
        value={to} 
        onChange={(e) => setTo(e.target.value)} 
        placeholder="To" 
        required 
      />
      <button type="submit">Search Flights</button>
    </form>
  );
};

export default SearchFlights;
