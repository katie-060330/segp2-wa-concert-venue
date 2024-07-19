import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import MyCalendar from './Calendar';
import EventDetails from './EventDetails';
import AllEvents from './AllEvents';
import './Events.css';
import events from '../Data/DAtaEvents';
import Fevents from '../Data/FrenchData';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
  };

  const navigateToTickets = () => {
    navigate('/tickets');
  };

  // Determine which events to use based on the current language
  const currentEvents = i18n.language === 'fr' ? Fevents : events;

  return (
    <div className="events">
      <div className="main-content">
        <div className="calendar-section">
          <MyCalendar events={currentEvents} setSelectedEvent={handleSelectEvent} />
        </div>
        <div className="details-section">
          <EventDetails event={selectedEvent} navigateToTickets={navigateToTickets} />
        </div>
      </div>
      <div className="search-section">
        <AllEvents events={currentEvents} navigateToTickets={navigateToTickets} />
      </div>
    </div>
  );
};

export default Events;
