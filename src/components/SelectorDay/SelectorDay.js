import React, {Fragment, useCallback} from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {selectors} from 'features/datepicker';
import {getMonthDays, getIsSameMonth, getIsSameDay} from 'utils/dateUtils';
import Day from 'components/visual/Day';

const SelectorDay = ({onDateSet, wrapperElement, wrapperClassname}) => {
  const selectedTimestamp = useSelector(selectors.getSelectedTimestamp);
  const todayTimestamp = useSelector(selectors.getTodayTimestamp);
  const monthDays = getMonthDays(selectedTimestamp);
  const handleDateSet = useCallback(
    date => {
      onDateSet(date);
    },
    [onDateSet]
  );
  const DaysWrapper = wrapperElement;
  return (
    <Fragment>
      <DaysWrapper className={wrapperClassname}>
        {monthDays.map(({name, date}, i) => (
          <Day
            // TODO: add real holiday
            isHoliday={false}
            // TODO: add real highlighter
            isHiglighted={false}
            onSetDay={handleDateSet}
            isToday={getIsSameDay(date, todayTimestamp)}
            isSelected={getIsSameDay(date, selectedTimestamp)}
            disabled={!getIsSameMonth(date, selectedTimestamp)} // TODO: rename to proper value
            dayNumber={name}
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
  onDateSet: PropTypes.func.isRequired,
};

SelectorDay.defaultProps = {
  wrapperClassname: 'month-grid-wrapper',
  wrapperElement: 'div',
};

export default SelectorDay;
