// Feedback.js
import React, { useState } from 'react';
import './Feedback.css';
import { useTranslation } from 'react-i18next';


function Feedback() {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { t } = useTranslation();
 

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Feedback submitted:', feedback);
    setSubmitted(true);
  };

  return (
    <div className="feedback">
      <h2>{t('We value your feedback!')}</h2>
      {submitted ? (
        <p>{t('Thank you for your feedback!')}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder={t("Enter your feedback here...")}
            required
          />
          <button type="submit">{t("submitNewsLetter")}</button>
        </form>
      )}
    </div>
  );
}

export default Feedback;
