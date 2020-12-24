import React from 'react';
import PropTypes from 'prop-types';
import config from 'lib/utils/config';
import {useLocaleEnumerators} from 'lib/features/locale';
import {DayGrid} from 'lib/components/visual/Day';
import {MonthGrid} from 'lib/components/visual/Month';
import {YearGrid} from 'lib/components/visual/Year';
import useLogic from './useLogic';

const Calendar = ({
  onDateSet,
  wrapperClassName,
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

  const Wrapper = {
    day: DayGrid,
    month: MonthGrid,
    year: YearGrid,
  }[precision];

  const VisualComponent = renderAs;
  return (
    <Wrapper className={wrapperClassName}>
      {items.map(({name, date}) => (
        <VisualComponent
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
  wrapperClassName: PropTypes.string.isRequired,
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
