import React from 'react';
import PropTypes from 'prop-types';
import {convertToDate} from 'lib/utils/dateUtils';
import {useMonthStepperLabels} from 'lib/features/locale';
import useLogic from './useLogic';

const Selector = ({
  todayTimestamp,
  selectedTimestamp,
  renderAs,
  startDate,
  endDate,
  visibleTimestamp,
  precision,
}) => {
  const monthStepperLabels = useMonthStepperLabels();

  const {onSetPrecision, onIncrementMonth, onDecrementMonth} = useLogic({
    startDate,
    endDate,
    visibleTimestamp,
  });

  const SelectorVisual = renderAs;
  return (
    <SelectorVisual
      precision={precision}
      monthStepperLabels={monthStepperLabels}
      incrementMonth={onIncrementMonth}
      decrementMonth={onDecrementMonth}
      setPrecision={onSetPrecision}
      todayDate={convertToDate(todayTimestamp)}
      selectedDate={convertToDate(selectedTimestamp)}
      visibleDate={convertToDate(visibleTimestamp)}
    />
  );
};

Selector.propTypes = {
  selectedTimestamp: PropTypes.number.isRequired,
  todayTimestamp: PropTypes.number.isRequired,
  visibleTimestamp: PropTypes.number.isRequired,
  renderAs: PropTypes.elementType.isRequired,
  startDate: PropTypes.instanceOf(Date).isRequired,
  endDate: PropTypes.instanceOf(Date).isRequired,
  precision: PropTypes.oneOf(['year', 'month', 'day']).isRequired,
};

export default Selector;
