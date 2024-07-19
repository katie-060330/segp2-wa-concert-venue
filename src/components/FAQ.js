import React, { useState } from 'react';
import './FAQ.css';

import { useTranslation } from 'react-i18next';

function FAQ() {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { t } = useTranslation();

  const dummyQuestions = [
    { question: 'How can I Buy Tickets?', answer: 'Head to the tickets center and type in the...' },
    { question: 'I can\'t find my favorite band?', answer: 'If you don\'t see your favorite band, it means they might not be touring at this moment. Head to the home page to sign up for our newsletter to learn about who is coming to town!' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newQuestion.trim()) {
      setQuestions([...questions, { question: newQuestion, answer: t('One of our representatives will be right with the answer to your question ')}]);
      setNewQuestion('');
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000); // Reset submission message after 3 seconds
    }
  };

  return (
    <div className="faq-container">
      <div className="faq">
        <h2>FAQ</h2>
        <ul>
          {[...dummyQuestions, ...questions].map((q, index) => (
            <li key={index} className="faq-item">
              <p><strong>Question:</strong> {q.question}</p>
              <p><strong>{t("Answer:")}</strong> {q.answer}</p>
            </li>
          ))}
        </ul>
        <h3>{t("Don't See Your Question? Submit It Here")}</h3>
        {submitted ? (
          <p>{t("Thank you for your question!")}</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <textarea
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                placeholder={t("Enter your question here...")}
                required
              />
            </div>
            <button type="submit">{t('submitNewsLetter')}</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default FAQ;
