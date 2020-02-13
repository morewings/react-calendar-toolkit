import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {actionTypes, selectors} from 'features/datepicker';
import {getFormattedDate, getAddMonth, getSubMonth} from 'utils/dateUtils';
import DateSelectorVisual from 'components/visual/DateSelector';

const SelectorCombined = props => {
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
  const incrementMonth = useCallback(
    date =>
      dispatch({
        type: actionTypes.SET_DATE,
        payload: {
          selectedTimestamp: getAddMonth(date, 1),
        },
      }),
    [dispatch]
  );
  const decrementMonth = useCallback(
    date =>
      dispatch({
        type: actionTypes.SET_DATE,
        payload: {
          selectedTimestamp: getSubMonth(date, 1),
        },
      }),
    [dispatch]
  );
  const year = getFormattedDate('y', selectedTimestamp);
  const month = getFormattedDate('MMMM', selectedTimestamp);
  return (
    <DateSelectorVisual
      incrementMonth={incrementMonth}
      decrementMonth={decrementMonth}
      setPrecision={setPrecision}
      year={year}
      month={month}
      date={new Date(selectedTimestamp)}
    />
  );
};

export default SelectorCombined;
