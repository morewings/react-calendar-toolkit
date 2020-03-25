import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import config from 'utils/config';
import {
  checkIsSameMonth,
  checkIsWithinInterval,
  checkIsWeekend,
  matchDatesWithPrecision,
  floorMonth,
  ceilMonth,
} from 'utils/dateUtils';
import {useLocaleEnumerators} from 'features/locale';

const Calendar = ({
  onDateSet,
  wrapWith,
  todayTimestamp,
  selectedTimestamp,
  visibleTimestamp,
  renderAs,
  precision,
  startDate,
  endDate,
  disableDate,
  highlightDate,
  highlightWeekends,
}) => {
  const getItems = useLocaleEnumerators(precision);
  const items =
    precision === 'year'
      ? getItems(startDate, endDate)
      : getItems(visibleTimestamp);

  const getIsDisabled = useCallback(
    date => {
      if (precision === 'year') return false; // we are not disabling years, just rendering the range
      if (precision === 'month') {
        return !checkIsWithinInterval(
          {start: floorMonth(startDate), end: ceilMonth(endDate)},
          date
        );
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

  const getIsWeekend = date => highlightWeekends && checkIsWeekend(date);

  const Wrapper = wrapWith;
  const VisualComponent = renderAs;
  return (
    <Wrapper>
      {items.map(({name, date}) => (
        <VisualComponent
          isWeekend={precision === 'day' && getIsWeekend(date)}
          onDateSet={handleDateSet}
          isSelected={matchDatesWithPrecision(
            precision,
            date,
            selectedTimestamp
          )}
          isCurrent={matchDatesWithPrecision(precision, date, todayTimestamp)}
          belongsToSameMonth={
            precision === 'day' && checkIsSameMonth(date, visibleTimestamp)
          }
          isDisabled={getIsDisabled(date)}
          isHighlighted={getIsHighlighted(date)}
          name={name}
          date={date}
          key={date}
        />
      ))}
    </Wrapper>
  );
};

Calendar.propTypes = {
  precision: PropTypes.oneOf(config.supportedPrecisions).isRequired,
  wrapWith: PropTypes.elementType.isRequired,
  renderAs: PropTypes.elementType.isRequired,
  onDateSet: PropTypes.func.isRequired,
  todayTimestamp: PropTypes.number.isRequired,
  selectedTimestamp: PropTypes.number.isRequired,
  visibleTimestamp: PropTypes.number.isRequired,
  startDate: PropTypes.instanceOf(Date).isRequired,
  endDate: PropTypes.instanceOf(Date).isRequired,
  disableDate: PropTypes.func.isRequired,
  highlightDate: PropTypes.func.isRequired,
  highlightWeekends: PropTypes.bool,
};

Calendar.defaultProps = {
  highlightWeekends: false,
};

export default Calendar;
