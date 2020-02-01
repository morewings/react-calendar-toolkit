import React, {Fragment} from 'react';
import {getWeekDayNames, getMonthDays} from 'utils/dateUtils';
import Weekday from 'components/visual/WeekDay';
import Day from 'components/visual/Day';
import './DayGrid.scss';

const DayGrid = props => {
  const weekDayNames = getWeekDayNames();
  const monthDays = getMonthDays(new Date());
  return (
    <Fragment>
      <div className="weekdays-wrapper">
        {weekDayNames.map(name => (
          <Weekday key={name} name={name} />
        ))}
      </div>
      <div className="days-wrapper">
        {monthDays.map(({dayNumber, date}, i) => (
          <Day dayNumber={dayNumber} date={date} key={i} />
        ))}
      </div>
    </Fragment>
  );
};

export default DayGrid;
