import React, {Fragment} from 'react';
import {
  getWeekDayNames,
  getMonthDays,
  getIsSameMonth,
  getIsSameDay,
} from 'utils/dateUtils';
import Weekday, {WeekDayWrapper} from 'components/visual/WeekDay';
import Day, {DaysWrapper} from 'components/visual/Day';

const DayGrid = props => {
  const weekDayNames = getWeekDayNames();
  const monthDays = getMonthDays(new Date());
  return (
    <Fragment>
      <WeekDayWrapper>
        {weekDayNames.map(name => (
          <Weekday key={name} name={name} />
        ))}
      </WeekDayWrapper>
      <DaysWrapper>
        {monthDays.map(({dayNumber, date}, i) => (
          <Day
            isToday={getIsSameDay(date, new Date())}
            disabled={!getIsSameMonth(date, new Date())}
            dayNumber={dayNumber}
            date={date}
            key={i}
          />
        ))}
      </DaysWrapper>
    </Fragment>
  );
};

export default DayGrid;
