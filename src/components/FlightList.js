
import React from 'react';
import axios from 'axios';

const FlightList = ({ flights, userId }) => {
  const bookFlight = async (flightId) => {
    try {
      const response = await axios.get(`http://localhost:3001/users/${userId}`);
      const user = response.data;

      const flight = flights.find(flight => flight.id === flightId);
      if (user.balance >= flight.price) {
        user.balance -= flight.price;
        await axios.put(`http://localhost:3001/users/${userId}`, user);
        await axios.post('http://localhost:3001/transactions', { userId, flightId });
        alert('Flight booked successfully');
      } else {
        alert('Insufficient balance');
      }
    } catch (error) {
      console.error('Failed to book flight', error);
    }
  };

  return (
    <ul>
      {flights.map(flight => (
        <li key={flight.id}>
          {flight.from} to {flight.to} - ${flight.price}
          <button onClick={() => bookFlight(flight.id)}>Book</button>
        </li>
      ))}
    </ul>
  );
};

export default FlightList;
