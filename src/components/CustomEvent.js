import React from 'react';

const CustomEvent = ({ event }) => {
  return (
    <div className="custom-event">
      <span>{event.title}</span>
    </div>
  );
};

export default CustomEvent;
