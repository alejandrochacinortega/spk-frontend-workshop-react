import React, { useState } from 'react';

import './AddTrip.css';
import { Trip } from '../../types';

interface AddTripProps {
  addTrip: (trip: Trip) => void;
}

const AddTrip: React.FC<AddTripProps> = ({ addTrip }) => {
  const [studentName, setStudentName] = useState<string>('');
  const [destination, setDestination] = useState<string>('');
  const [date, setDate] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTrip: Trip = {
      id: Date.now(),
      studentName,
      destination,
      date,
    };
    addTrip(newTrip);
    setStudentName('');
    setDestination('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-trip-form">
      <div className="form-group">
        <label>
          <span>Student Name</span>
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          <span>Destination</span>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          <span>Date</span>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
      </div>
      <div className="form-group"></div>
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
};

export default AddTrip;
