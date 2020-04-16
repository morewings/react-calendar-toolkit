import React from 'react';
import PropTypes from 'prop-types';
import config from 'utils/config';
import {useLocaleEnumerators} from 'features/locale';
import useLogic from './useLogic';

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

  const {
    getIsDisabled,
    getIsHighlighted,
    handleDateSet,
    getIsWeekend,
    getBelongsToSameMonth,
    getIsSelected,
    getIsCurrent,
    getHandleKeyPress,
  } = useLogic({
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
  });

  const Wrapper = wrapWith;
  const VisualComponent = renderAs;
  return (
    <Wrapper>
      {items.map(({name, date}) => (
        <VisualComponent
          getHandleKeyPress={getHandleKeyPress}
          isWeekend={getIsWeekend(date)}
          onDateSet={handleDateSet}
          isSelected={getIsSelected(date)}
          isCurrent={getIsCurrent()}
          belongsToSameMonth={getBelongsToSameMonth(date)}
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
