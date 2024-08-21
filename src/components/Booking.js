import React from 'react';

const Booking = ({ flight }) => {
  return (
    <div>
      <h2>Booking Confirmation</h2>
      <p>Flight: {flight.origin} to {flight.destination}</p>
      <p>Date: {flight.date}</p>
      <p>Price: ${flight.price}</p>
    </div>
  );
};

export default Booking;
