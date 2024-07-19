import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './AllEvents.css';

function AllEvents({ events, navigateToTickets }) {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedDecade, setSelectedDecade] = useState([]);
  const [date, setDate] = useState('');

  const handleGenreChange = (genre) => {
    setSelectedGenres((prevSelectedGenres) =>
      prevSelectedGenres.includes(genre)
        ? prevSelectedGenres.filter((g) => g !== genre)
        : [...prevSelectedGenres, genre]
    );
  };

  const handleTypeChange = (type) => {
    setSelectedTypes((prevSelectedTypes) =>
      prevSelectedTypes.includes(type)
        ? prevSelectedTypes.filter((t) => t !== type)
        : [...prevSelectedTypes, type]
    );
  };

  const handleDecadeChange = (decade) => {
    setSelectedDecade((prevSelectedDecade) =>
      prevSelectedDecade.includes(decade)
        ? prevSelectedDecade.filter((d) => d !== decade)
        : [...prevSelectedDecade, decade]
    );
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedGenres([]);
    setSelectedTypes([]);
    setSelectedDecade([]);
    setDate('');
  };

  const filteredEvents = events.filter((event) => {
    const matchesTitle = event.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenres.length === 0 || selectedGenres.includes(event.genre);
    const matchesType = selectedTypes.length === 0 || selectedTypes.includes(event.type);
    const matchesDecade = selectedDecade.length === 0 || selectedDecade.includes(event.decade);
    const matchesDate =
      date === '' || new Date(event.start).toLocaleDateString() === new Date(date).toLocaleDateString();
    return matchesTitle && matchesGenre && matchesType && matchesDate && matchesDecade;
  });

  const genres = [...new Set(events.map((event) => event.genre))];
  const types = [...new Set(events.map((event) => event.type))];
  const decades = [...new Set(events.map((event) => event.decade))];

  return (
    <div className="all-events">
      <h2>{t('All Events')}</h2>
      <input
        type="text"
        placeholder={t('Search for an artist')}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="filters">
        <div className="genre-filters">
          <h4>{t('Genre')}</h4>
          {genres.map((genre) => (
            <label key={genre}>
              <input
                type="checkbox"
                value={genre}
                checked={selectedGenres.includes(genre)}
                onChange={() => handleGenreChange(genre)}
              />
              {genre}
            </label>
          ))}
        </div>
        <div className="type-filters">
          <h4>{t('Type')}</h4>
          {types.map((type) => (
            <label key={type}>
              <input
                type="checkbox"
                value={type}
                checked={selectedTypes.includes(type)}
                onChange={() => handleTypeChange(type)}
              />
              {type}
            </label>
          ))}
        </div>
        <div className="decade-filters">
          <h4>{t('Decade')}</h4>
          {decades.map((decade) => (
            <label key={decade}>
              <input
                type="checkbox"
                value={decade}
                checked={selectedDecade.includes(decade)}
                onChange={() => handleDecadeChange(decade)}
              />
              {decade}
            </label>
          ))}
        </div>
      </div>
      <div className="date-clear-filters">
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <button onClick={handleClearFilters}>{t('Clear All Filters')}</button>
      </div>
      <div className="events-grid">
        {filteredEvents.map((event) => (
          <div key={event.id} className="event-card">
            <h3>{event.title}</h3>
            <p>{new Date(event.start).toLocaleString()}</p>
            <p>{event.genre}</p>
            <p>{event.type}</p>
            <p>{event.decade}</p>
            <button onClick={navigateToTickets}>{t('BuyTickets')}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllEvents;
