import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './Day.module.css';

const Day = ({
  onDateSet,
  date,
  isSameMonth,
  isToday,
  isSelected,
  isDisabled,
  isHighlighted,
  isWeekend,
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
        [classes.isOtherMonth]: !isSameMonth,
        [classes.isToday]: isToday,
        [classes.isSelected]: isSelected,
        [classes.isDisabled]: isDisabled,
        [classes.isWeekend]: isWeekend,
        [classes.isHighlighted]: isHighlighted,
      })}>
      {name.numeric}
    </div>
  );
};

Day.propTypes = {
  isSameMonth: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  isHighlighted: PropTypes.bool.isRequired,
  isWeekend: PropTypes.bool.isRequired,
  onDateSet: PropTypes.func.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  isToday: PropTypes.bool.isRequired,
  name: PropTypes.shape({
    numeric: PropTypes.number.isRequired,
  }).isRequired,
};

export default Day;
