import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Home from './components/Home';
import Venues from './components/Venue';
import Tickets from './components/TicketPurchase';
import Events from './components/Events';
import About from './components/About';
import Footer from './components/Footer'; 
import './i18n';

const App = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Router>
      <Header changeLanguage={changeLanguage} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/venues" element={<Venues />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
