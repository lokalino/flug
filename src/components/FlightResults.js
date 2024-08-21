import React from 'react';

const FlightResults = ({ flights, onSelect }) => {
  return (
    <div>
      {flights.map((flight) => (
        <div key={flight.id} onClick={() => onSelect(flight)}>
          <h3>{flight.origin} to {flight.destination}</h3>
          <p>Date: {flight.date}</p>
        </div>
      ))}
    </div>
  );
};

export default FlightResults;
