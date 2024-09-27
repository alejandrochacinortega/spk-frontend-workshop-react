import React, { useState } from 'react';
import { Trip } from './types';

import './App.css';
import { data } from './data';
import TripList from './components/trip.list/TripList';
import AddTrip from './components/add-trip/AddTrip';
import SearchTrip from './components/search-trip/SearchTrip';

const App: React.FC = () => {
  const [trips, setTrips] = useState<Trip[]>(data);
  const [searchDestination, setSearchDestination] = useState<string>('');

  const addTrip = (trip: Trip) => {
    setTrips([...trips, trip]);
  };

  const filteredTrips = trips.filter((trip) =>
    searchDestination
      ? trip.destination.toLowerCase().includes(searchDestination.toLowerCase())
      : true,
  );

  return (
    <div>
      <h1>Travel Planner</h1>
      <div className="trip-actions">
        <AddTrip addTrip={addTrip} />
        <SearchTrip
          searchDestination={searchDestination}
          setSearchDestination={setSearchDestination}
        />
      </div>
      <TripList trips={filteredTrips} />
    </div>
  );
};

export default App;
