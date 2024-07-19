import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';
import logo from '../assets/The_WA-removebg-preview2.png';

const Header = ({ changeLanguage }) => {
  const { t } = useTranslation();

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/venues">{t('Venues')}</Link></li>
          <li><Link to="/tickets">{t('BuyTickets')}</Link></li>
          <li className="logo"><Link to="/">
            <img src={logo} alt="The WA" />
          </Link></li>
          <li><Link to="/events">{t('Events')}</Link></li>
          <li><Link to="/about">{t('About')}</Link></li>
        </ul>
      </nav>
      <div className="language-switcher">
        <button onClick={() => changeLanguage('en')}>EN</button>
        <button onClick={() => changeLanguage('fr')}>FR</button>
      </div>
    </header>
  );
};

export default Header;
