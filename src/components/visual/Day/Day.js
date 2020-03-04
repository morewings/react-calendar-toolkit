import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {useFormatDate} from 'utils/localeContext';
import classes from './Day.module.css';

const Day = ({
  onDateSet,
  date,
  belongsToSameMonth,
  isCurrent,
  isSelected,
  isDisabled,
  isHighlighted,
  isWeekend,
  name,
}) => {
  /**
   * Returns formatted date
   * @param {string} pattern - Formatting pattern
   * @param {Date} date - Date object to apply format
   * @return {string} Formatted date
   */
  const formatDate = useFormatDate();
  const handleClick = () => {
    onDateSet(date);
  };
  return belongsToSameMonth ? (
    <div
      tabIndex={isDisabled ? '-1' : '0'}
      role="button"
      onClick={handleClick}
      onKeyPress={handleClick}
      className={classNames({
        [classes.wrapper]: true,
        /** Conditional class to display, if day is today */
        [classes.isCurrent]: isCurrent,
        /** Conditional class to display, if day is selected */
        [classes.isSelected]: isSelected,
        /** Conditional class to display, if day is disabled */
        [classes.isDisabled]: isDisabled,
        /** Conditional class to display, if day is weekend */
        [classes.isWeekend]: isWeekend,
        /** Conditional class to display, if day is highlighted */
        [classes.isHighlighted]: isHighlighted,
      })}
      aria-disabled={isDisabled}
      aria-label={formatDate('do LLLL EEEE', date)}>
      {name.numeric}
    </div>
  ) : (
    <div className={classes.placeholder} />
  );
};

Day.propTypes = {
  /** Flag, showing if this day entry and selected date __belong to the same month__. */
  belongsToSameMonth: PropTypes.bool.isRequired,
  /** Flag, showing if this day entry is __selected__. */
  isSelected: PropTypes.bool.isRequired,
  /** Flag, showing if this day entry is __disabled__. */
  isDisabled: PropTypes.bool.isRequired,
  /** Flag, showing if this day entry is __highlighted__. */
  isHighlighted: PropTypes.bool.isRequired,
  /** Flag, showing if this day entry is __weekend__. */
  isWeekend: PropTypes.bool.isRequired,
  /** Function to set date for Calendar, e. g. `onDateSet(date)`. */
  onDateSet: PropTypes.func.isRequired,
  /** Date for this day entry */
  date: PropTypes.instanceOf(Date).isRequired,
  /** Flag, showing if this day entry is __today__. */
  isCurrent: PropTypes.bool.isRequired,
  /** Object, which has `numeric` property with day number. */
  name: PropTypes.shape({
    numeric: PropTypes.number.isRequired,
  }).isRequired,
};

export default Day;
