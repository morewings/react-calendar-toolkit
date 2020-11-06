import {useCallback} from 'react';
import {
  ceilMonth,
  checkIsSameMonth,
  checkIsWeekend,
  checkIsWithinInterval,
  floorMonth,
  matchDatesWithPrecision,
} from 'lib/utils/dateUtils';

const useLogic = ({
  disableDate,
  endDate,
  precision,
  startDate,
  highlightDate,
  onDateSet,
  highlightWeekends,
  visibleTimestamp,
  selectedTimestamp,
  todayTimestamp,
}) => {
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

  const getIsWeekend = date =>
    precision === 'day' && highlightWeekends && checkIsWeekend(date);

  const getBelongsToSameMonth = date =>
    precision === 'day' && checkIsSameMonth(date, visibleTimestamp);

  const getIsSelected = date =>
    matchDatesWithPrecision(precision, date, selectedTimestamp);

  const getIsCurrent = date =>
    matchDatesWithPrecision(precision, date, todayTimestamp);

  return {
    getIsDisabled,
    getIsHighlighted,
    handleDateSet,
    getIsWeekend,
    getBelongsToSameMonth,
    getIsSelected,
    getIsCurrent,
  };
};

export default useLogic;
