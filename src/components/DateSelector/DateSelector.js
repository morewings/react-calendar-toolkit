import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {actionTypes, selectors} from 'features/datepicker';
import {getFormattedDate, getAddMonth} from 'utils/dateUtils';
import DateSelectorVisual from 'components/visual/DateSelector';

const DateSelector = props => {
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
          precision: 'month',
        },
      }),
    [dispatch]
  );
  const year = getFormattedDate('y', selectedTimestamp);
  const month = getFormattedDate('MMMM', selectedTimestamp);
  const setYear = yearDate => {
    console.log(yearDate);
  };
  const setMonth = monthDate => {
    console.log(monthDate);
  };
  const decrementMonth = monthDate => {
    console.log(`decrement month;`);
  };
  return (
    <DateSelectorVisual
      setMonth={setMonth}
      setYear={setYear}
      incrementMonth={incrementMonth}
      decrementMonth={decrementMonth}
      setPrecision={setPrecision}
      year={year}
      month={month}
      date={new Date(selectedTimestamp)}
    />
  );
};

export default DateSelector;
