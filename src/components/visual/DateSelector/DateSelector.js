import React from 'react';
import PropTypes from 'prop-types';
import {useFormatDate} from 'utils/localeContext';
import classes from './DateSelector.module.scss';

const DateSelector = ({
  selectedTimestamp,
  todayTimestamp,
  setPrecision,
  decrementMonth,
  date,
  incrementMonth,
}) => {
  const formatDate = useFormatDate();
  const year = formatDate('y', selectedTimestamp);
  const month = formatDate('LLLL', selectedTimestamp);
  return (
    <div className={classes.wrapper}>
      <div className={classes.buttons}>
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
      <div className={classes.stepper}>
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
  incrementMonth: PropTypes.func.isRequired,
  decrementMonth: PropTypes.func.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
};

export default DateSelector;
