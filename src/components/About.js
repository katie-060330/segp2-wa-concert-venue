import React from 'react';
import './About.css';
import Feedback from './Feedback';
import ConnectWithOthers from './ConnectWithOthers'
import FAQ from '../components/FAQ'
import Newsletter from './Newsletter';
import news from'../assets/news.png'

import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about">
      <h1>{t('About Us')}</h1>
      <p>{t('Welcome to The WA, Ottawas premier concert venue!')}</p>
      <p>{t('We are thrilled to have you here. Explore upcoming events, buy tickets, and stay updated with our latest news.')}</p>
      <div className="comp">
        <div className="connect">
          <ConnectWithOthers />
        </div>
        <div className="feed">
          <Feedback />
        </div>
        <div className="newslettwre">
          <img src={news} alt="" />
          <Newsletter/>
        </div>
       
      </div>
      <div className="FQA">
          <FAQ/>

        </div>
    </div>
  );
}

export default About;
