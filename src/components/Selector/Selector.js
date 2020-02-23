import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {actionCreators} from 'features/datepicker';
import {decrementMonth, incrementMonth, convertToDate} from 'utils/dateUtils';

const Selector = ({todayTimestamp, selectedTimestamp, renderAs}) => {
  const dispatch = useDispatch();
  const setPrecision = useCallback(
    precision => {
      dispatch(actionCreators.setPrecision(precision));
    },
    [dispatch]
  );
  const onIncrementMonth = useCallback(
    date => {
      dispatch(actionCreators.setDate(incrementMonth(date, 1)));
    },
    [dispatch]
  );
  const onDecrementMonth = useCallback(
    date => {
      dispatch(actionCreators.setDate(decrementMonth(date, 1)));
    },
    [dispatch]
  );
  const SelectorVisual = renderAs;
  return (
    <SelectorVisual
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
};

export default Selector;
