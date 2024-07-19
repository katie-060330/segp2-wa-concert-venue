import React, { useState } from 'react';
import './Venue.css';
import stageA from '../assets/micor.jpg';
import stageB from '../assets/party.jpg';
import stageC from '../assets/stagec.jpg';

import { useTranslation } from 'react-i18next';

function Venue() {
  const [showInfo, setShowInfo] = useState({
    stageA: false,
    stageB: false,
    stageC: false
  });
  const {t} = useTranslation();

  const toggleInfo = (stage) => {
    setShowInfo(prevState => ({ ...prevState, [stage]: !prevState[stage] }));
  };

  return (
    <div className="venue">
      <h2>{t("Venues")}</h2>
      <div className="flexbox-container">
        <div className="stage">
          <img src={stageA} alt="Stage A, microphone in a dark room " />
          <button onClick={() => toggleInfo('stageA')}>{t("More Info")}</button>
          {showInfo.stageA && <p>{t("Stage A")}</p>}
        </div>
        <div className="stage">
          <img src={stageB} alt="Stage B, a party ocncert" />
          <button onClick={() => toggleInfo('stageB')}>{t("More Info")}</button>
          {showInfo.stageB && <p>{t("Stage B")}</p>}
        </div>
        <div className="stage">
          <img src={stageC} alt="Stage C, theater stage " />
          <button onClick={() => toggleInfo('stageC')}>{t("More Info")}</button>
          {showInfo.stageC && <p>{t("Stage C")}</p>}
        </div>
      </div>
    </div>
  );
}

export default Venue;
