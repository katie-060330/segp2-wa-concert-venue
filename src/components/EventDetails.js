import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './EventDetails.css';

const EventDetails = ({ event }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const navigateToTickets = () => {
    navigate('/tickets');
  };

  if (!event) {
    return <div className="event-details">{t('Select an event to see the details')}</div>;
  }

  return (
    <div className="event-details">
      <h2>{t(event.title)}</h2>
      <p><strong>{t('Date')}:</strong> {new Date(event.start).toLocaleString()}</p>
      <p><strong>{t('Description')}:</strong> {t(event.desc)}</p>
      <p><strong>{t('Genre')}:</strong> {t(event.genre)}</p>
      <p><strong>{t('Type')}:</strong> {t(event.type)}</p>
      <p><strong>{t('Decade')}:</strong> {t(event.decade)}</p>
      <button onClick={navigateToTickets}>{t('BuyTickets')}</button>
    </div>
  );
};

export default EventDetails;
