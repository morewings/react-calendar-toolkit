import React, {Fragment, useCallback} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {actionTypes, selectors} from 'features/datepicker';
import {
  getWeekDayNames,
  getMonthDays,
  getIsSameMonth,
  getIsSameDay,
  getTime,
} from 'utils/dateUtils';
import Weekday from 'components/visual/WeekDay';
import Day from 'components/visual/Day';

const SelectorDay = ({
  onDateSet,
  wrapperElement,
  subWrapperElement,
  subWrapperClassname,
  wrapperClassname,
}) => {
  const selectedTimestamp = useSelector(selectors.getSelectedTimestamp);
  const todayTimestamp = useSelector(selectors.getTodayTimestamp);
  const weekDayNames = getWeekDayNames();
  const monthDays = getMonthDays(selectedTimestamp);
  const dispatch = useDispatch();
  const setDay = useCallback(
    date => {
      dispatch({
        type: actionTypes.SET_DATE,
        payload: {
          selectedTimestamp: getTime(date),
          precision: 'day',
        },
      });
      onDateSet(date);
    },
    [dispatch, onDateSet]
  );
  const DaysWrapper = wrapperElement;
  const WeekDaysWrapper = subWrapperElement;
  return (
    <Fragment>
      <WeekDaysWrapper className={subWrapperClassname}>
        {weekDayNames.map(name => (
          <Weekday key={name} name={name} />
        ))}
      </WeekDaysWrapper>
      <DaysWrapper className={wrapperClassname}>
        {monthDays.map(({dayNumber, date}, i) => (
          <Day
            // TODO: add real holiday
            isHoliday={false}
            // TODO: add real highlighter
            isHiglighted={false}
            onSetDay={setDay}
            isToday={getIsSameDay(date, todayTimestamp)}
            isSelected={getIsSameDay(date, selectedTimestamp)}
            disabled={!getIsSameMonth(date, selectedTimestamp)} // TODO: rename to proper value
            dayNumber={dayNumber}
            date={date}
            key={date}
          />
        ))}
      </DaysWrapper>
    </Fragment>
  );
};

SelectorDay.propTypes = {
  wrapperClassname: PropTypes.string,
  wrapperElement: PropTypes.elementType,
  subWrapperClassname: PropTypes.string,
  subWrapperElement: PropTypes.elementType,
  onDateSet: PropTypes.func.isRequired,
};

SelectorDay.defaultProps = {
  subWrapperClassname: 'weekdays-wrapper',
  wrapperClassname: 'month-grid-wrapper',
  wrapperElement: 'div',
  subWrapperElement: 'div',
};

export default SelectorDay;
