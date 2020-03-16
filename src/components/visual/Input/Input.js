import React from 'react';
import PropTypes from 'prop-types';
import classes from './Input.module.css';

const Input = ({toggleDatepicker, value, date}) => {
  const handleClick = event => {
    event.stopPropagation();
    toggleDatepicker(true);
  };
  return (
    <input
      className={classes.input}
      readOnly
      value={value}
      onClick={handleClick}
      type="text"
    />
  );
};

Input.propTypes = {
  toggleDatepicker: PropTypes.func.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
