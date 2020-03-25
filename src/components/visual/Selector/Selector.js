import React from 'react';
import PropTypes from 'prop-types';
import {useFormatDate} from 'entryPoint';
import classes from './Selector.module.css';

const Selector = ({
  selectedDate,
  todayDate,
  setPrecision,
  decrementMonth,
  incrementMonth,
  precision,
  monthStepperLabels,
  visibleDate,
}) => {
  const formatDate = useFormatDate();
  const year = formatDate('y', visibleDate);
  const month = formatDate('LLLL', visibleDate);
  return (
    <div className={classes.wrapper}>
      {/** Render precision selectors */}
      <div className={classes.buttons}>
        <button
          onClick={() => {
            setPrecision('year');
          }}
          aria-live="polite"
          type="button">
          {year}
        </button>
        {/** Render month precision selector, only if minPrecision is not `year`  */}
        {precision !== 'year' && (
          <button
            onClick={() => {
              setPrecision('month');
            }}
            aria-live="polite"
            type="button">
            {month}
          </button>
        )}
      </div>
      {/** Render month stepper, only if minPrecision is not `year` */}
      {precision === 'day' && (
        <div className={classes.stepper}>
          <button
            onClick={() => {
              decrementMonth();
            }}
            aria-label={monthStepperLabels.decrementMonthLabel}
            type="button">
            ⟨
          </button>
          <button
            onClick={() => {
              incrementMonth();
            }}
            aria-label={monthStepperLabels.incrementMonthLabel}
            type="button">
            ⟩
          </button>
        </div>
      )}
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
  /** Defines visibility of dates, displayed in current Calendar */
  visibleDate: PropTypes.instanceOf(Date).isRequired,
  /** Today date */
  todayDate: PropTypes.instanceOf(Date).isRequired,
  /** Set minimum precision (measuring unit) of calendar. Possible values: 'day', 'month', 'year'. */
  precision: PropTypes.oneOf(['year', 'month', 'day']).isRequired,
  /** Localized accessibility labels for __month stepper__ */
  monthStepperLabels: PropTypes.shape({
    /** +1 month */
    incrementMonthLabel: PropTypes.string.isRequired,
    /** -1 month */
    decrementMonthLabel: PropTypes.string.isRequired,
  }).isRequired,
};

export default Selector;
