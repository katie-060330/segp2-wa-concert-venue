import React from 'react';
import './Footer.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
 

  return (
    <footer>
      <div className="hello">
        <h3>{t('Contact')}</h3>
        <p>{t('Email')}: wa.ottawal@gmail.com</p>
        <p>{t('PhoneNumber')}: 905-773-2626</p>
      </div>

      <div className="hours">
        <h3>{t('Hours')}</h3>
        <p>{t('FridaySunday')}: 8pm - 3am</p>
        <p>{t('MondayThursday')}: 6pm - 2am</p>
      </div>

      <div className="location">
        <h3>{t('Location')}</h3>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.481410261465!2d-75.69248578487457!3d45.42612247910085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce050cb4d1dfd7%3A0x62b299f9a0ab7f91!2s50%20Rideau%20St%2C%20Ottawa%2C%20ON%20K1N%209J7%2C%20Canada!5e0!3m2!1sen!2sus!4v1598982843294!5m2!1sen!2sus"
          allowFullScreen
        ></iframe>
      </div>
    </footer>
  );
};

export default Footer;
