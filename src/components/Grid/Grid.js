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

const Grid = ({
  onDateSet,
  wrapperComponent,
  wrapperClassname,
  todayTimestamp,
  selectedTimestamp,
  visualComponent,
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
        return (
          !checkIsSameMonth(date, startDate) && !checkIsSameMonth(date, endDate)
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
  const Wrapper = wrapperComponent;
  const VisualComponent = visualComponent;
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
            isSameYear={checkIsSameMonth(date, selectedTimestamp)}
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

Grid.propTypes = {
  wrapperClassname: PropTypes.string,
  precision: PropTypes.oneOf(config.supportedPrecisions).isRequired,
  wrapperComponent: PropTypes.elementType.isRequired,
  visualComponent: PropTypes.elementType.isRequired,
  onDateSet: PropTypes.func.isRequired,
  todayTimestamp: PropTypes.number.isRequired,
  selectedTimestamp: PropTypes.number.isRequired,
  // items: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     name: PropTypes.shape({
  //       wide: PropTypes.string,
  //       abbreviated: PropTypes.string,
  //       narrow: PropTypes.string,
  //       numeric: PropTypes.number,
  //       short: PropTypes.string,
  //     }).isRequired,
  //     date: PropTypes.instanceOf(Date).isRequired,
  //   }).isRequired
  // ).isRequired,
  startDate: PropTypes.instanceOf(Date).isRequired,
  endDate: PropTypes.instanceOf(Date).isRequired,
  disableDate: PropTypes.func.isRequired,
  highlightDate: PropTypes.func.isRequired,
  highlightWeekends: PropTypes.bool,
};

Grid.defaultProps = {
  wrapperClassname: '',
  highlightWeekends: false,
};

export default Grid;
