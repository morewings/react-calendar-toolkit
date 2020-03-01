import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './Month.module.css';

const Month = ({
  onDateSet,
  date,
  isDisabled,
  isSameMonth,
  isSelected,
  name,
  isHighlighted,
}) => {
  const handleClick = () => {
    onDateSet(date);
  };
  const getAriaLabel = () =>
    `${name.wide} ${isSameMonth ? 'is current month' : ''} ${
      isSelected ? 'is selected' : ''
    } ${isHighlighted ? 'is highlighted' : ''}`;
  return (
    <div
      tabIndex={isDisabled ? '-1' : '0'}
      role="button"
      onClick={handleClick}
      onKeyPress={handleClick}
      className={classNames({
        [classes.wrapper]: true,
        /** Conditional class to display, if month is selected */
        [classes.isSelected]: isSelected,
        /** Conditional class to display, if month is disabled */
        [classes.isDisabled]: isDisabled,
        /** Conditional class to display, if month belongs to same month as today */
        [classes.isSameMonth]: isSameMonth,
        /** Conditional class to display, if month is highlighted */
        [classes.isHighlighted]: isHighlighted,
      })}
      aria-label={getAriaLabel()}
      aria-disabled={isDisabled}>
      {name.wide}
    </div>
  );
};

Month.propTypes = {
  /** Flag, showing if this month entry is __disabled__. */
  isDisabled: PropTypes.bool.isRequired,
  /** Flag, showing if this month entry is __highlighted__. */
  isHighlighted: PropTypes.bool.isRequired,
  /** Flag, showing if this month entry is __selected__. */
  isSelected: PropTypes.bool.isRequired,
  /** Function to set date for Calendar, e. g. `onDateSet(date)`. */
  onDateSet: PropTypes.func.isRequired,
  /** Date for this month entry */
  date: PropTypes.instanceOf(Date).isRequired,
  /** Flag, showing if this month entry and current date __belong to the same month__. */
  isSameMonth: PropTypes.bool.isRequired,
  /** Object containing month name localized in different forms */
  name: PropTypes.shape({
    /** 'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre' */
    wide: PropTypes.string.isRequired,
    /** 'ene.', 'feb.', 'mar.', 'abr.', 'may.', 'jun.', 'jul.', 'ago.', 'sep.', 'oct.', 'nov.', 'dic.' */
    abbreviated: PropTypes.string.isRequired,
    /** 'E', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D' */
    narrow: PropTypes.string.isRequired,
    /** 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 */
    numeric: PropTypes.number.isRequired,
  }).isRequired,
};

export default Month;
