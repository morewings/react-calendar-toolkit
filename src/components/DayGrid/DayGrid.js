import React, {Fragment} from 'react';
import {useSelector} from 'react-redux';
import {selectors} from 'features/datepicker';
import {
  getWeekDayNames,
  getMonthDays,
  getIsSameMonth,
  getIsSameDay,
  toDate,
} from 'utils/dateUtils';
import Weekday, {WeekDayWrapper} from 'components/visual/WeekDay';
import Day, {DaysWrapper} from 'components/visual/Day';

const DayGrid = props => {
  const weekDayNames = getWeekDayNames();
  const monthDays = getMonthDays(new Date());
  const currentDate = useSelector(selectors.getDate);
  // const currentDate = useSelector((state) => state.datepicker.date);
  console.log('render', currentDate)
  return (
    <Fragment>
      <WeekDayWrapper>
        {weekDayNames.map(name => (
          <Weekday key={name} name={name} />
        ))}
      </WeekDayWrapper>
      <DaysWrapper>
        {monthDays.map(({dayNumber, date}, i) => {
          // console.log(date)
          // console.log(currentDate)
          return (
            <Day
              isToday={getIsSameDay(date, currentDate)}
              disabled={!getIsSameMonth(date, currentDate)}
              dayNumber={dayNumber}
              date={date}
              key={i}
            />
          )
        })}
      </DaysWrapper>
    </Fragment>
  );
};

export default DayGrid;
