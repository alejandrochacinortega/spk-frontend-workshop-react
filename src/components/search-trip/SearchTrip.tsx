import React from 'react';
import './SearchTrip.css';

interface SearchTripProps {
  searchDestination: string;
  setSearchDestination: (destination: string) => void;
}

const SearchTrip: React.FC<SearchTripProps> = ({
  searchDestination,
  setSearchDestination,
}) => {
  return (
    <div className="search-trip">
      <div className="form-group">
        <label>
          Search by Destination:
          <input
            type="text"
            value={searchDestination}
            onChange={(e) => setSearchDestination(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
};

export default SearchTrip;
