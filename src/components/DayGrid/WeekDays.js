/*eslint-disable*/
import React from 'react';
import {getWeekDayNames} from 'utils/dateUtils';
import Weekday from './WeekDay'
import './WeekDays.scss';

const WeekDays = props => {
  const weekDayNames = getWeekDayNames();
  return (
    <div className="weekdays-wrapper">
      {weekDayNames.map(name => (
        <Weekday key={name} name={name} />
      ))}
    </div>
  );
};

export default WeekDays;
