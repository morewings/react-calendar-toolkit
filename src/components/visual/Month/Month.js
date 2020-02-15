import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Month.scss';

const Month = ({
  onDateSet,
  date,
  isDisabled,
  isSameMonth,
  isSelected,
  name,
  formatDate,
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
        'month-wrapper': true,
        isDisabled,
        isSameMonth,
        isSelected,
      })}>
      {name.wide}
    </div>
  );
};

Month.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onDateSet: PropTypes.func.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  isSameMonth: PropTypes.bool.isRequired,
  formatDate: PropTypes.func.isRequired,
  name: PropTypes.shape({
    wide: PropTypes.string.isRequired,
    abbreviated: PropTypes.string.isRequired,
    narrow: PropTypes.string.isRequired,
    numeric: PropTypes.number.isRequired,
  }).isRequired,
};

export default Month;
