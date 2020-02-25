import React, {Fragment, useCallback} from 'react';
import PropTypes from 'prop-types';
import config from 'utils/config';
import {
  checkIsSameMonth,
  checkIsSameDay,
  checkIsSameYear,
  checkIsWithinInterval,
  checkIsWeekend,
} from 'utils/dateUtils';
import {useLocaleEnumerators} from 'utils/localeContext';

const Calendar = ({
  onDateSet,
  wrapWith,
  wrapperClassname,
  todayTimestamp,
  selectedTimestamp,
  renderAs,
  precision,
  startDate,
  endDate,
  disableDate,
  highlightDate,
  highlightWeekends,
}) => {
  const {getYears, getMonths, getDays} = useLocaleEnumerators();
  const getItems = () => {
    if (precision === 'day') {
      return getDays(selectedTimestamp);
    }
    if (precision === 'month') {
      return getMonths(selectedTimestamp);
    }
    if (precision === 'year') {
      return getYears(startDate, endDate);
    }
    return null;
  };
  const getIsDisabled = useCallback(
    date => {
      if (precision === 'year') return false; // we are not disabling years, just rendering the range
      if (precision === 'month') {
        return !checkIsWithinInterval({start: startDate, end: endDate}, date);
      }
      return (
        disableDate({date, isWeekend: checkIsWeekend(date), precision}) ||
        !checkIsWithinInterval({start: startDate, end: endDate}, date)
      );
    },
    [disableDate, endDate, precision, startDate]
  );

  const getIsHighlighted = useCallback(
    date => highlightDate({date, isWeekend: checkIsWeekend(date), precision}),
    [highlightDate, precision]
  );

  const handleDateSet = useCallback(
    date => {
      const isDisabled = getIsDisabled(date);
      !isDisabled && onDateSet(date);
    },
    [getIsDisabled, onDateSet]
  );

  const getIsSelected = useCallback(
    (date, timestamp) => {
      const matchers = {
        day: checkIsSameDay,
        month: checkIsSameMonth,
        year: checkIsSameYear,
      };
      return matchers[precision](date, timestamp);
    },
    [precision]
  );

  const isWeekendHighlighted = date =>
    highlightWeekends && checkIsWeekend(date);

  const Wrapper = wrapWith;
  const VisualComponent = renderAs;

  return (
    <Fragment>
      <Wrapper className={wrapperClassname}>
        {getItems().map(({name, date}) => (
          <VisualComponent
            isWeekend={precision === 'day' ? isWeekendHighlighted(date) : false}
            onDateSet={handleDateSet}
            isToday={checkIsSameDay(date, todayTimestamp)}
            isSelected={getIsSelected(date, selectedTimestamp)}
            isSameMonth={checkIsSameMonth(date, selectedTimestamp)}
            isSameYear={checkIsSameYear(date, selectedTimestamp)}
            isDisabled={getIsDisabled(date)}
            isHighlighted={getIsHighlighted(date)}
            name={name}
            date={date}
            key={date}
          />
        ))}
      </Wrapper>
    </Fragment>
  );
};

Calendar.propTypes = {
  wrapperClassname: PropTypes.string,
  precision: PropTypes.oneOf(config.supportedPrecisions).isRequired,
  wrapWith: PropTypes.elementType.isRequired,
  renderAs: PropTypes.elementType.isRequired,
  onDateSet: PropTypes.func.isRequired,
  todayTimestamp: PropTypes.number.isRequired,
  selectedTimestamp: PropTypes.number.isRequired,
  startDate: PropTypes.instanceOf(Date).isRequired,
  endDate: PropTypes.instanceOf(Date).isRequired,
  disableDate: PropTypes.func.isRequired,
  highlightDate: PropTypes.func.isRequired,
  highlightWeekends: PropTypes.bool,
};

Calendar.defaultProps = {
  wrapperClassname: '',
  highlightWeekends: false,
};

export default Calendar;
