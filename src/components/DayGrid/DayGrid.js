import React, {Fragment, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {actionTypes, selectors} from 'features/datepicker';
import {
  getWeekDayNames,
  getMonthDays,
  getIsSameMonth,
  getIsSameDay,
  getTime,
} from 'utils/dateUtils';
import Weekday, {WeekDayWrapper} from 'components/visual/WeekDay';
import Day, {DaysWrapper} from 'components/visual/Day';

const DayGrid = props => {
  const selectedTimestamp = useSelector(selectors.getSelectedTimestamp);
  const todayTimestamp = useSelector(selectors.getTodayTimestamp);
  const weekDayNames = getWeekDayNames();
  const monthDays = getMonthDays(selectedTimestamp);
  const dispatch = useDispatch();
  const setDay = useCallback(
    date =>
      dispatch({
        type: actionTypes.SET_DATE,
        payload: {
          selectedTimestamp: getTime(date),
          precision: 'day',
        },
      }),
    [dispatch]
  );
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
            // TODO: add real holiday
            isHoliday={false}
            // TODO: add real highlighter
            isHiglighted={false}
            onSetDay={setDay}
            isToday={getIsSameDay(date, todayTimestamp)}
            isSelected={getIsSameDay(date, selectedTimestamp)}
            disabled={!getIsSameMonth(date, selectedTimestamp)}
            dayNumber={dayNumber}
            date={date}
            key={date}
          />
        ))}
      </DaysWrapper>
    </Fragment>
  );
};

export default DayGrid;
