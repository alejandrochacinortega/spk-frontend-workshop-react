import React from 'react';

import './TripList.css';
import { Trip } from '../../types';

interface TripListProps {
  trips: Trip[];
}

const TripList: React.FC<TripListProps> = ({ trips }) => {
  return (
    <div>
      <h2>Planned Trips</h2>
      <div className="trip-list">
        {trips.map((trip) => (
          <div key={trip.id} className="trip-card">
            <div className="trip-image">
              <img
                src="https://via.placeholder.com/300"
                alt={trip.destination}
              />
            </div>
            <div className="trip-details">
              <h3>{trip.destination}</h3>
              <p>
                <strong>Student:</strong> {trip.studentName}
              </p>
              <p>
                <strong>Date:</strong> {trip.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripList;
