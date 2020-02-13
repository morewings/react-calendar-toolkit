import React, {Fragment, useCallback} from 'react';
import PropTypes from 'prop-types';
import config from 'utils/config';
import {useSelector} from 'react-redux';
import {selectors} from 'features/datepicker';
import {getIsSameMonth, getIsSameDay, getIsSameYear} from 'utils/dateUtils';

const Selector = ({
  onDateSet,
  wrapperComponent,
  wrapperClassname,
  items,
  todayTimestamp,
  selectedTimestamp,
  visualComponent,
  precision,
}) => {
  // const monthDays = getMonthDays(selectedTimestamp);
  const handleDateSet = useCallback(
    date => {
      onDateSet(date);
    },
    [onDateSet]
  );
  const getIsSelected = (matcherPrecision, date, timestamp) => {
    const matchers = {
      day: getIsSameDay,
      month: getIsSameMonth,
      year: getIsSameYear,
    };
    return matchers[matcherPrecision](date, timestamp);
  };
  const Wrapper = wrapperComponent;
  const VisualComponent = visualComponent;
  return (
    <Fragment>
      <Wrapper className={wrapperClassname}>
        {items.map(({name, date}, i) => (
          <VisualComponent
            onSetDay={handleDateSet}
            isToday={getIsSameDay(date, todayTimestamp)}
            isSelected={getIsSelected(precision, date, selectedTimestamp)}
            isSameMonth={getIsSameMonth(date, selectedTimestamp)}
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
};

Selector.defaultProps = {
  wrapperClassname: '',
};

export default Selector;
