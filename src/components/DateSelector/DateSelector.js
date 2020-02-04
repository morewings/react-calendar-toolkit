import React from 'react';
import {getFormattedDate} from 'utils/dateUtils';
import './DateSelector.scss';

const DateSelector = props => {
  const year = getFormattedDate('y', new Date());
  const month = getFormattedDate('MMMM', new Date());
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
    <div className="date-selector-wrapper">
      <div className="date-selector-buttons">
        <button
          onClick={() => {
            setPrecision('year');
          }}
          type="button">
          {year}
        </button>
        <button onClick={setMonth} type="button">
          {month}
        </button>
      </div>
      <div className="date-stepper">
        <button onClick={incrementMonth} type="button">
          ⟨
        </button>
        <button onClick={decrementMonth} type="button">
          ⟩
        </button>
      </div>
    </div>
  );
};

export default DateSelector;
