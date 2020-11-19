import React from 'react';
import PropTypes from 'prop-types';
import {useThemePostCSS} from 'lib/features/theme';
import classes from './Input.module.css';

const Input = ({toggleDatepicker, value, date, onChange}) => {
  const {setRef, style} = useThemePostCSS();

  const handleClick = event => {
    event.stopPropagation();
    toggleDatepicker(true);
  };
  return (
    <input
      style={style}
      ref={setRef}
      className={classes.input}
      readOnly
      value={value}
      onClick={handleClick}
      type="text"
    />
  );
};

Input.propTypes = {
  /** Method to toggle Datepicker visibility */
  toggleDatepicker: PropTypes.func.isRequired,
  /** Sets date for datepicker from user input.
   * `Date => {console.log(Date)}`
   */
  onChange: PropTypes.func.isRequired,
  /** Selected date */
  date: PropTypes.instanceOf(Date).isRequired,
  /** Value to display inside Input */
  value: PropTypes.string.isRequired,
};

export default Input;
