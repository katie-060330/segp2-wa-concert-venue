import React from 'react';
import './ConnectWithOthers.css';
import facebook from '../assets/fbook.png';
import insta from '../assets/isnta.jpeg';
import twitter from '../assets/twitter.png';

import { useTranslation } from 'react-i18next';

const ConnectWithOthers = () =>{
  const { t } = useTranslation();
 
  return (
    <div className="connect-with-others">
      <div className="connectingwothers-container">
        <div className="connectingwothers">
          <div className="social-media">
            <h3>{t('Connect With Others')}</h3>
            <div>
              <ul>
                <li>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src={facebook} alt="Facebook" />
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={insta} alt="Instagram" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src={twitter} alt="Twitter" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConnectWithOthers;
