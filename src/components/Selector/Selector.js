/*eslint-disable*/
import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {actionTypes, selectors} from 'features/datepicker';
import {decrementMonth, incrementMonth, convertToDate} from 'utils/dateUtils';
import DateSelectorVisual from 'components/visual/DateSelector';

const Selector = props => {
  const selectedTimestamp = useSelector(selectors.getSelectedTimestamp);
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
      })
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
  const year = props.formatDate('y', selectedTimestamp);
  const month = props.formatDate('LLLL', selectedTimestamp);
  return (
    <DateSelectorVisual
      incrementMonth={onIncrementMonth}
      decrementMonth={onDecrementMonth}
      setPrecision={setPrecision}
      year={year}
      month={month}
      date={convertToDate(selectedTimestamp)}
    />
  );
};

export default Selector;
