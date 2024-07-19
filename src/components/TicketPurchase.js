import React, { useState } from 'react';
import './TicketPurchase.css';
import eventsData from '../Data/DAtaEvents';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function TicketPurchase({ setSelectedPage }) {
  const [event, setEvent] = useState('');
  const [date, setDate] = useState('');
  const [cardInfo, setCardInfo] = useState({ number: '', expiration: '', ccv: '' });
  const [personalInfo, setPersonalInfo] = useState({ firstName: '', lastName: '', address: '', email: '' });
  const [errors, setErrors] = useState({});
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handlePurchase = () => {
    const validationErrors = validateInputs();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Purchasing tickets for', event);
      // Proceed with the purchase logic
    } else {
      setErrors(validationErrors);
    }
  };

  const validateInputs = () => {
    const errors = {};
    if (!event) errors.event = t('Event/Artist is required');
    if (!eventsData.some(e => e.title === event)) errors.event = t('Event/Artist is not playing');
    if (!date) errors.date = t('Date is required');
    if (date && !/^\d{2}\/\d{2}$/.test(date)) errors.date = t('Invalid date format (MM/YY)');

    if (!cardInfo.number || !/^\d{16}$/.test(cardInfo.number)) errors.cardNumber = t('Invalid card number');
    if (!cardInfo.expiration || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(cardInfo.expiration)) errors.expiration = t('Invalid expiration date (MM/YY)');
    if (!cardInfo.ccv || !/^\d{3}$/.test(cardInfo.ccv)) errors.ccv = t('Invalid CCV');

    if (!personalInfo.firstName) errors.firstName = t('First name is required');
    if (!personalInfo.lastName) errors.lastName = t('Last name is required');
    if (!personalInfo.address) errors.address = t('Address is required');
    if (!personalInfo.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(personalInfo.email)) errors.email = t('Invalid email address');

    return errors;
  };

  return (
    <div className="ticket-purchase">
      <h2>{t('Buy Tickets')}</h2>
      <h3>{t('Event Details')}</h3>
      <button id="button" onClick={() => navigate('/events')}>{t('Back to Events')}</button>

      <div className="form-group">
        <input
          type="text"
          placeholder={t('Event/Artist')}
          value={event}
          onChange={e => setEvent(e.target.value)}
        />
        {errors.event && <p className="error">{errors.event}</p>}
        <input
          type="text"
          placeholder={t('Date')}
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        {errors.date && <p className="error">{errors.date}</p>}
      </div>

      <div>
        <h3>{t('Enter Card Information')}</h3>
        <div className="form-group">
          <input
            type="text"
            placeholder={t('Card Number')}
            value={cardInfo.number}
            onChange={e => setCardInfo({ ...cardInfo, number: e.target.value })}
          />
          {errors.cardNumber && <p className="error">{errors.cardNumber}</p>}
          <input
            type="text"
            placeholder={t('Expiration Date (MM/YY)')}
            value={cardInfo.expiration}
            onChange={e => setCardInfo({ ...cardInfo, expiration: e.target.value })}
          />
          {errors.expiration && <p className="error">{errors.expiration}</p>}
          <input
            type="text"
            placeholder={t('CCV')}
            value={cardInfo.ccv}
            onChange={e => setCardInfo({ ...cardInfo, ccv: e.target.value })}
          />
          {errors.ccv && <p className="error">{errors.ccv}</p>}
        </div>
      </div>

      <div>
        <h3>{t('Enter Personal Information')}</h3>
        <div className="form-group">
          <input
            type="text"
            placeholder={t('First Name')}
            value={personalInfo.firstName}
            onChange={e => setPersonalInfo({ ...personalInfo, firstName: e.target.value })}
          />
          {errors.firstName && <p className="error">{errors.firstName}</p>}
          <input
            type="text"
            placeholder={t('Last Name')}
            value={personalInfo.lastName}
            onChange={e => setPersonalInfo({ ...personalInfo, lastName: e.target.value })}
          />
          {errors.lastName && <p className="error">{errors.lastName}</p>}
          <input
            type="text"
            placeholder={t('Address')}
            value={personalInfo.address}
            onChange={e => setPersonalInfo({ ...personalInfo, address: e.target.value })}
          />
          {errors.address && <p className="error">{errors.address}</p>}
          <input
            type="email"
            placeholder={t('Email')}
            value={personalInfo.email}
            onChange={e => setPersonalInfo({ ...personalInfo, email: e.target.value })}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
      </div>

      <button onClick={handlePurchase}>{t('submitNewsLetter')}</button>
    </div>
  );
}

export default TicketPurchase;
