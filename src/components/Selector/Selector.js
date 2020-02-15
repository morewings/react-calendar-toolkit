import React, {Fragment, useCallback} from 'react';
import PropTypes from 'prop-types';
import config from 'utils/config';
import {
  getIsSameMonth,
  getIsSameDay,
  getIsSameYear,
  getIsWithinInterval,
} from 'utils/dateUtils';

const Selector = ({
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
}) => {
  const getIsDisabled = useCallback(
    date => {
      if (precision === 'year') return false; // we are not disabling years, just rendering the range
      return !getIsWithinInterval(date, {start: startDate, end: endDate});
    },
    [endDate, precision, startDate]
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
        day: getIsSameDay,
        month: getIsSameMonth,
        year: getIsSameYear,
      };
      return matchers[precision](date, timestamp);
    },
    [precision]
  );
  const Wrapper = wrapperComponent;
  const VisualComponent = visualComponent;
  return (
    <Fragment>
      <Wrapper className={wrapperClassname}>
        {items.map(({name, date}, i) => (
          <VisualComponent
            onDateSet={handleDateSet}
            isToday={getIsSameDay(date, todayTimestamp)}
            isSelected={getIsSelected(date, selectedTimestamp)}
            isSameMonth={getIsSameMonth(date, selectedTimestamp)}
            isSameYear={getIsSameMonth(date, selectedTimestamp)}
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

Selector.propTypes = {
  wrapperClassname: PropTypes.string,
  precision: PropTypes.oneOf(config.supportedPrecisions).isRequired,
  wrapperComponent: PropTypes.elementType.isRequired,
  visualComponent: PropTypes.elementType.isRequired,
  onDateSet: PropTypes.func.isRequired,
  todayTimestamp: PropTypes.number.isRequired,
  selectedTimestamp: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
    }).isRequired
  ).isRequired,
  startDate: PropTypes.instanceOf(Date).isRequired,
  endDate: PropTypes.instanceOf(Date).isRequired,
};

Selector.defaultProps = {
  wrapperClassname: '',
};

export default Selector;
