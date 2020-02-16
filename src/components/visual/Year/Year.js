import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import useScrollIntoView from 'utils/useScrollIntoView';
import classNames from 'classnames';
import classes from './Year.module.scss';

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
  isSelected: PropTypes.bool.isRequired,
  isHighlighted: PropTypes.bool.isRequired,
  onDateSet: PropTypes.func.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  isSameYear: PropTypes.bool.isRequired,
  name: PropTypes.shape({
    numeric: PropTypes.number.isRequired,
  }).isRequired,
};

export default Year;
