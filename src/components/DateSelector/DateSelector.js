import React from 'react';
import {useSelector} from 'react-redux';
import {actionTypes, selectors} from 'features/datepicker';
import {getFormattedDate} from 'utils/dateUtils';
import DateSelectorVisual from 'components/visual/DateSelector';

const DateSelector = props => {
  const selectedDate = useSelector(selectors.getSelectedDate);
  const year = getFormattedDate('y', selectedDate);
  const month = getFormattedDate('MMMM', selectedDate);
  const setYear = yearDate => {
    console.log(yearDate);
  };
  const setMonth = monthDate => {
    console.log(monthDate);
  };
  const incrementMonth = monthDate => {
    console.log(`increment month;`);
  };
  const decrementMonth = monthDate => {
    console.log(`decrement month;`);
  };
  const setPrecision = precision => {
    console.log('setPrecision precision');
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
