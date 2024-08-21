import React, { useState } from 'react';
import FlightSearch from './components/FlightSearch';
import FlightResults from './components/FlightResults';
import FlightDetail from './components/FlightDetail';
import Booking from './components/Booking';
import UserProfile from './components/UserProfile';
import './styles.css';

const App = () => {
  const [flights, setFlights] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [bookedFlight, setBookedFlight] = useState(null);

  const handleSearch = (searchParams) => {
    // Mock flight data
    const mockFlights = [
      { id: 1, origin: 'New York', destination: 'London', date: '2024-10-01', price: 500 },
      // Add more mock flights as needed
    ];
    setFlights(mockFlights);
  };

  const handleSelectFlight = (flight) => {
    setSelectedFlight(flight);
  };

  const handleBookFlight = (flight) => {
    setBookedFlight(flight);
  };

  return (
    <div>
      <FlightSearch onSearch={handleSearch} />
      <FlightResults flights={flights} onSelect={handleSelectFlight} />
      <FlightDetail flight={selectedFlight} onBook={handleBookFlight} />
      {bookedFlight && <Booking flight={bookedFlight} />}
      <UserProfile />
    </div>
  );
};

export default App;
