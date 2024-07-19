import React, { useState } from 'react';
import './Venue.css';
import stageA from '../assets/micor.jpg';
import stageB from '../assets/party.jpg';
import stageC from '../assets/stagec.jpg';

function Venue() {
  const [showInfo, setShowInfo] = useState({
    stageA: false,
    stageB: false,
    stageC: false
  });

  const toggleInfo = (stage) => {
    setShowInfo(prevState => ({ ...prevState, [stage]: !prevState[stage] }));
  };

  return (
    <div className="venue">
      <h2>Our Venues</h2>
      <div className="flexbox-container">
        <div className="stage">
          <img src={stageA} alt="Stage A" />
          <button onClick={() => toggleInfo('stageA')}>More Info</button>
          {showInfo.stageA && <p>Stage A: Known for its incredible acoustics, Stage A has hosted numerous iconic performances. Established in 1980, it has a rich history of musical excellence.</p>}
        </div>
        <div className="stage">
          <img src={stageB} alt="Stage B" />
          <button onClick={() => toggleInfo('stageB')}>More Info</button>
          {showInfo.stageB && <p>Stage B: The heart of our outdoor events, Stage B offers a unique open-air experience. It was established in 1995 and has been a favorite for summer festivals.</p>}
        </div>
        <div className="stage">
          <img src={stageC} alt="Stage C" />
          <button onClick={() => toggleInfo('stageC')}>More Info</button>
          {showInfo.stageC && <p>Stage C: A modern venue with state-of-the-art facilities, Stage C is perfect for contemporary performances. It has been operational since 2005.</p>}
        </div>
      </div>
    </div>
  );
}

export default Venue;
