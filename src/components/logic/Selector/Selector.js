import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {useDatePickerActions} from 'features/datepicker';
import {
  decrementMonth,
  incrementMonth,
  convertToDate,
  checkIsWithinInterval,
  ceilMonth,
  floorMonth,
} from 'utils/dateUtils';
import {useMonthStepperLabels} from 'features/locale';

const Selector = ({
  todayTimestamp,
  selectedTimestamp,
  renderAs,
  startDate,
  endDate,
  visibleTimestamp,
  precision,
}) => {
  const {setVisibility, setPrecision} = useDatePickerActions();

  const monthStepperLabels = useMonthStepperLabels();

  // TODO: wrong name
  const isDisabled = useCallback(
    date =>
      checkIsWithinInterval(
        {start: floorMonth(startDate), end: ceilMonth(endDate)},
        date
      ),
    [endDate, startDate]
  );

  const onSetPrecision = useCallback(
    nextPrecision => {
      setPrecision(nextPrecision);
    },
    [setPrecision]
  );

  const onIncrementMonth = useCallback(() => {
    const nextDate = incrementMonth(visibleTimestamp, 1);
    isDisabled(nextDate) && setVisibility(nextDate);
  }, [isDisabled, setVisibility, visibleTimestamp]);

  const onDecrementMonth = useCallback(() => {
    const nextDate = decrementMonth(visibleTimestamp, 1);
    isDisabled(nextDate) && setVisibility(nextDate);
  }, [isDisabled, setVisibility, visibleTimestamp]);

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
