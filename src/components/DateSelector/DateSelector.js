import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {actionTypes, selectors} from 'features/datepicker';
import {getFormattedDate, getAddMonth} from 'utils/dateUtils';
import DateSelectorVisual from 'components/visual/DateSelector';

const DateSelector = props => {
  const selectedDate = useSelector(selectors.getSelectedDate);
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
          date: getAddMonth(date, 1),
          precision: 'month',
        },
      }),
    [dispatch]
  );
  const year = getFormattedDate('y', selectedDate);
  const month = getFormattedDate('MMMM', selectedDate);
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
      date={new Date(selectedDate)}
    />
  );
};

export default DateSelector;
