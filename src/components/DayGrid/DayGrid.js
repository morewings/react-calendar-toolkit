import React, {Fragment} from 'react';
import {useSelector} from 'react-redux';
import {selectors} from 'features/datepicker';
import {
  getWeekDayNames,
  getMonthDays,
  getIsSameMonth,
  getIsSameDay,
} from 'utils/dateUtils';
import Weekday, {WeekDayWrapper} from 'components/visual/WeekDay';
import Day, {DaysWrapper} from 'components/visual/Day';

const DayGrid = props => {
  const currentDate = useSelector(selectors.getDate);
  const weekDayNames = getWeekDayNames();
  const monthDays = getMonthDays(currentDate);
  const setDay = date => {
    console.log('Set day', date);
  };
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
            onClick={setDay}
            isToday={getIsSameDay(date, currentDate)}
            disabled={!getIsSameMonth(date, currentDate)}
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
