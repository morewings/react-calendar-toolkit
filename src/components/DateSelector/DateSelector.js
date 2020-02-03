import React from 'react';
import {getFormattedDate} from 'utils/dateUtils';
import './DateSelector.scss';

const DateSelector = props => {
  const year = getFormattedDate('y', new Date());
  const month = getFormattedDate('MMMM', new Date());
  return (
    <div className="date-selector-wrapper">
      <div className="date-selector-buttons">
        <button type="button">{year}</button>
        <button type="button">{month}</button>
      </div>
      <div className="date-stepper">
        <button type="button">⟨</button>
        <button type="button">⟩</button>
      </div>
    </div>
  );
};

export default DateSelector;
