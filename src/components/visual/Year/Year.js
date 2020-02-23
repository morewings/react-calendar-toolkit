import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import useScrollIntoView from 'utils/useScrollIntoView';
import classNames from 'classnames';
import classes from './Year.module.css';

const Year = ({
  isHighlighted,
  onDateSet,
  date,
  isSelected,
  isSameYear,
  name,
}) => {
  const handleClick = () => {
    onDateSet(date);
  };
  const currentYear = useRef();
  useScrollIntoView(currentYear, isSelected);
  return (
    <div
      ref={currentYear}
      tabIndex="0"
      role="button"
      onClick={handleClick}
      onKeyPress={handleClick}
      className={classNames({
        [classes.wrapper]: true,
        [classes.isSameYear]: isSameYear,
        [classes.isSelected]: isSelected,
        [classes.isHighlighted]: isHighlighted,
      })}>
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
  isSameYear: PropTypes.bool.isRequired,
  /** Object, which has `numeric` property with current year number. */
  name: PropTypes.shape({
    numeric: PropTypes.number.isRequired,
  }).isRequired,
};

export default Year;
