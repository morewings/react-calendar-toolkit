import React from 'react';
import PropTypes from 'prop-types';
import {useFormatDate} from 'utils/localeContext';
import classes from './Selector.module.css';

const Selector = ({
  selectedDate,
  todayDate,
  setPrecision,
  decrementMonth,
  incrementMonth,
}) => {
  const formatDate = useFormatDate();
  const year = formatDate('y', selectedDate);
  const month = formatDate('LLLL', selectedDate);
  return (
    <div className={classes.wrapper}>
      {/** Renders precision selectors */}
      <div className={classes.buttons}>
        <button
          onClick={() => {
            setPrecision('year');
          }}
          aria-live="polite"
          aria-label="select year"
          type="button">
          {year}
        </button>
        <button
          onClick={() => {
            setPrecision('month');
          }}
          aria-live="polite"
          aria-label="select month"
          type="button">
          {month}
        </button>
      </div>
      {/** Renders month stepper */}
      <div className={classes.stepper}>
        <button
          onClick={() => {
            decrementMonth(selectedDate);
          }}
          aria-label="previous month"
          type="button">
          ⟨
        </button>
        <button
          onClick={() => {
            incrementMonth(selectedDate);
          }}
          aria-label="next month"
          type="button">
          ⟩
        </button>
      </div>
    </div>
  );
};

Selector.propTypes = {
  /** Method which sets precision for Calendar shown below, e.g. `setPrecision('month')`. */
  setPrecision: PropTypes.func.isRequired,
  /** Method which __adds 1 month__ to selected date for Calendar and Header components, e.g. `incrementMonth(selectedDate)`. */
  incrementMonth: PropTypes.func.isRequired,
  /** Method which __subtracts 1 month__ from selected date for Calendar and Header components, e.g. `incrementMonth(selectedDate)`. */
  decrementMonth: PropTypes.func.isRequired,
  /** Selected date of Calendar */
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  /** Today date */
  todayDate: PropTypes.instanceOf(Date).isRequired,
};

export default Selector;
