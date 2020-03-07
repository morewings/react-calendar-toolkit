import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {actionCreators} from 'features/datepicker';
import {
  decrementMonth,
  incrementMonth,
  convertToDate,
  checkIsWithinInterval,
} from 'utils/dateUtils';
import {useMonthStepperLabels} from 'utils/localeContext';

const Selector = ({
  todayTimestamp,
  selectedTimestamp,
  renderAs,
  startDate,
  endDate,
}) => {
  const dispatch = useDispatch();
  const monthStepperLabels = useMonthStepperLabels();
  const isDisabled = useCallback(
    date => checkIsWithinInterval({start: startDate, end: endDate}, date),
    [endDate, startDate]
  );
  const setPrecision = useCallback(
    nextPrecision => {
      dispatch(actionCreators.setPrecision(nextPrecision));
    },
    [dispatch]
  );
  const onIncrementMonth = useCallback(
    date => {
      const nextDate = incrementMonth(date, 1);
      isDisabled(nextDate) && dispatch(actionCreators.setDate(nextDate));
    },
    [dispatch, isDisabled]
  );
  const onDecrementMonth = useCallback(
    date => {
      const nextDate = decrementMonth(date, 1);
      isDisabled(nextDate) && dispatch(actionCreators.setDate(nextDate));
    },
    [dispatch, isDisabled]
  );
  const SelectorVisual = renderAs;
  return (
    <SelectorVisual
      monthStepperLabels={monthStepperLabels}
      incrementMonth={onIncrementMonth}
      decrementMonth={onDecrementMonth}
      setPrecision={setPrecision}
      todayDate={convertToDate(todayTimestamp)}
      selectedDate={convertToDate(selectedTimestamp)}
    />
  );
};

Selector.propTypes = {
  selectedTimestamp: PropTypes.number.isRequired,
  todayTimestamp: PropTypes.number.isRequired,
  renderAs: PropTypes.elementType.isRequired,
  startDate: PropTypes.instanceOf(Date).isRequired,
  endDate: PropTypes.instanceOf(Date).isRequired,
};

export default Selector;
