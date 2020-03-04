import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './Year.module.css';

const Year = ({
  isHighlighted,
  onDateSet,
  date,
  isSelected,
  isCurrent,
  name,
}) => {
  const handleClick = () => {
    onDateSet(date);
  };

  return (
    <div
      tabIndex="0"
      role="button"
      onClick={handleClick}
      onKeyPress={handleClick}
      className={classNames({
        [classes.wrapper]: true,
        /** Conditional class to display, if year belongs to same year as today */
        [classes.isCurrent]: isCurrent,
        /** Conditional class to display, if year is selected */
        [classes.isSelected]: isSelected,
        /** Conditional class to display, if year is highlighted */
        [classes.isHighlighted]: isHighlighted,
      })}
      aria-label={name.numeric}>
      {name.numeric}
    </div>
  );
};

Year.propTypes = {
  /** Flag, showing if this year entry is __selected__. */
  isSelected: PropTypes.bool.isRequired,
  /** Flag, showing if this year entry is __highlighted__. */
  isHighlighted: PropTypes.bool.isRequired,
  /** Function to set date for Calendar, e. g. `onDateSet(date)`. */
  onDateSet: PropTypes.func.isRequired,
  /** Date for this year entry */
  date: PropTypes.instanceOf(Date).isRequired,
  /** Flag, showing if this month entry and current date __belong to the same year__. */
  isCurrent: PropTypes.bool.isRequired,
  /** Object, which has `numeric` property with current year number. */
  name: PropTypes.shape({
    numeric: PropTypes.number.isRequired,
  }).isRequired,
};

export default Year;
