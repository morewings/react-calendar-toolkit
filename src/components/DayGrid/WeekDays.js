/*eslint-disable*/
import React from 'react';
import {getWeekDays} from 'utils/dateUtils';
import './WeekDays.scss';

const WeekDays = props => {
  const weekDays = getWeekDays();
  return (
    <div className="weekdays-wrapper">
      {weekDays.map(day => (
        <div className={} key={day}>{day}</div>
      ))}
    </div>
  );
};

export default WeekDays;
