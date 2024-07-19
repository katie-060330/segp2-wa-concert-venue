import React from 'react';
import { useTranslation } from 'react-i18next';
import Newsletter from './Newsletter';
import './Home.css';
import ReactPlayer from 'react-player';

const Home = ({ changeLanguage }) => {
  const { t } = useTranslation();

  return (
    <div className="home">
      <div className="fluid-container">
        <div className="video">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=oeZTcfciFwo"
            controls
            width="600px"
            height="400px"
          />
        </div>
        <div className="text-container">
          <h1>{t('Welcome to The WA Concert Venue')}</h1>
          <p>{t('Your ultimate destination for the latest concerts and events. Explore upcoming events, book tickets, and stay updated with our latest news.')}</p>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default Home;
