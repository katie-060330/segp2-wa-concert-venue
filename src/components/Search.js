import React, { useState } from 'react';
import './Search.css';

function Search({ setSelectedEvent }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // Mock search function, replace with actual search logic
    const event = { date: '2023-07-07', title: 'Event 1' };
    setSelectedEvent(event);
  };

  return (
    <div className="search">
      <h2>Search Events</h2>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search by artist or event"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Search;
