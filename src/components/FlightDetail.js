import React from 'react';

const FlightDetail = ({ flight, onBook }) => {
  if (!flight) return null;

  return (
    <div>
      <h2>{flight.origin} to {flight.destination}</h2>
      <p>Date: {flight.date}</p>
      <p>Price: ${flight.price}</p>
      <button onClick={() => onBook(flight)}>Book Now</button>
    </div>
  );
};

export default FlightDetail;
