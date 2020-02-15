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

const Grid = ({
  onDateSet,
  wrapperComponent,
  wrapperClassname,
  items,
  todayTimestamp,
  selectedTimestamp,
  visualComponent,
  precision,
  startDate,
  endDate,
  disableDate,
  highlightWeekends,
}) => {
  const getIsDisabled = useCallback(
    date => {
      if (precision === 'year') return false; // we are not disabling years, just rendering the range
      if (precision === 'month') {
        return (
          !checkIsSameMonth(date, startDate) && !checkIsSameMonth(date, endDate)
        );
      }
      return (
        disableDate({date, isWeekend: checkIsWeekend(date)}) ||
        !checkIsWithinInterval({start: startDate, end: endDate}, date)
      );
    },
    [disableDate, endDate, precision, startDate]
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
        {items.map(({name, date}) => (
          <VisualComponent
            isWeekend={precision === 'day' ? isWeekendHighlighted(date) : false}
            onDateSet={handleDateSet}
            isToday={checkIsSameDay(date, todayTimestamp)}
            isSelected={getIsSelected(date, selectedTimestamp)}
            isSameMonth={checkIsSameMonth(date, selectedTimestamp)}
            isSameYear={checkIsSameMonth(date, selectedTimestamp)}
            isDisabled={getIsDisabled(date)}
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
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.shape({
        wide: PropTypes.string,
        abbreviated: PropTypes.string,
        narrow: PropTypes.string,
        numeric: PropTypes.number,
        short: PropTypes.string,
      }).isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
    }).isRequired
  ).isRequired,
  startDate: PropTypes.instanceOf(Date).isRequired,
  endDate: PropTypes.instanceOf(Date).isRequired,
  disableDate: PropTypes.func.isRequired,
  highlightWeekends: PropTypes.bool,
};

Grid.defaultProps = {
  wrapperClassname: '',
  highlightWeekends: false,
};

export default Grid;
