import React from 'react';
import PropTypes from 'prop-types';
import './DateSelector.scss';

const DateSelector = ({
  formatDate,
  selectedTimestamp,
  todayTimestamp,
  setPrecision,
  decrementMonth,
  date,
  incrementMonth,
}) => {
  const year = formatDate('y', selectedTimestamp);
  const month = formatDate('LLLL', selectedTimestamp);
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
        <button
          onClick={() => {
            setPrecision('month');
          }}
          type="button">
          {month}
        </button>
      </div>
      <div className="date-stepper">
        <button
          onClick={() => {
            decrementMonth(date);
          }}
          type="button">
          ⟨
        </button>
        <button
          onClick={() => {
            incrementMonth(date);
          }}
          type="button">
          ⟩
        </button>
      </div>
    </div>
  );
};

DateSelector.propTypes = {
  selectedTimestamp: PropTypes.number.isRequired,
  todayTimestamp: PropTypes.number.isRequired,
  setPrecision: PropTypes.func.isRequired,
  formatDate: PropTypes.func.isRequired,
  incrementMonth: PropTypes.func.isRequired,
  decrementMonth: PropTypes.func.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
};

export default DateSelector;
