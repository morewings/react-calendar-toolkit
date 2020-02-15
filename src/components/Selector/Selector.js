import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {actionTypes} from 'features/datepicker';
import {decrementMonth, incrementMonth, convertToDate} from 'utils/dateUtils';

const Selector = ({todayTimestamp, selectedTimestamp, selectorComponent}) => {
  const dispatch = useDispatch();
  const setPrecision = useCallback(
    precision =>
      dispatch({
        type: actionTypes.SET_PRECISION,
        payload: precision,
      }),
    [dispatch]
  );
  const onIncrementMonth = useCallback(
    date => {
      dispatch({
        type: actionTypes.SET_DATE,
        payload: {
          selectedTimestamp: incrementMonth(date, 1),
        },
      });
    },
    [dispatch]
  );
  const onDecrementMonth = useCallback(
    date =>
      dispatch({
        type: actionTypes.SET_DATE,
        payload: {
          selectedTimestamp: decrementMonth(date, 1),
        },
      }),
    [dispatch]
  );
  const SelectorVisual = selectorComponent;
  return (
    <SelectorVisual
      selectedTimestamp={selectedTimestamp}
      todayTimestamp={todayTimestamp}
      incrementMonth={onIncrementMonth}
      decrementMonth={onDecrementMonth}
      setPrecision={setPrecision}
      date={convertToDate(selectedTimestamp)}
    />
  );
};

Selector.propTypes = {
  selectedTimestamp: PropTypes.number.isRequired,
  todayTimestamp: PropTypes.number.isRequired,
  selectorComponent: PropTypes.elementType.isRequired,
};

export default Selector;
