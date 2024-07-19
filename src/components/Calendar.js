import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Calendar.css';
import { useTranslation } from 'react-i18next';

const localizer = momentLocalizer(moment);

const eventStyleGetter = (event, start, end, isSelected) => {
  const style = {
    backgroundColor: isSelected ? '#000' : '#f58318',
    borderRadius: '5px',
    opacity: 0.8,
    color: isSelected ? '#fff' : 'white',
    border: '0px',
    display: 'block',
    fontFamily: 'om',
  };

  return {
    style,
  };
};

function MyCalendar({ events, setSelectedEvent }) {
  const { t } = useTranslation();

  const handleSelectEvent = event => {
    setSelectedEvent(event);
  };

  const translatedEvents = events.map(event => ({
    ...event,
    title: t(event.title),
    desc: t(event.desc),
  }));

  return (
    <div className="calendar-container">
      <Calendar
        localizer={localizer}
        events={translatedEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600, width: '100%' }}
        views={['month']}
        onSelectEvent={handleSelectEvent}
        eventPropGetter={eventStyleGetter}
      />
    </div>
  );
}

export default MyCalendar;
