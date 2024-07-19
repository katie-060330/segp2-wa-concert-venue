import React, { useState } from 'react';
import './Newsletter.css';

import { useTranslation } from 'react-i18next';

const Newsletter = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubscription = () => {
    if (validateEmail(email)) {
      alert(t('Subscribed with: ') + email);
      setEmail('');
      setError('');
    } else {
      setError(t('emailError'));
    }
  };
  

  const validateEmail = (email) => {
    // Simple email validation regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <div className="newsletter">
      <h2>{t ('Subscribe')}</h2>
      <div className="newsletter-inputs">
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder={t("Enter your email")}
        />
        <button onClick={handleSubscription}>{t('submitNewsLetter')}</button>
      </div>
      {error && <p className="error">{error}</p>}
    </div>
  );
}


export default Newsletter;
