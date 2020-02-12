import React from 'react';
import PropTypes from 'prop-types';

const Input = ({toggleDatepicker, value}) => {
  const handleClick = event => {
    event.stopPropagation();
    toggleDatepicker(true);
  };
  return <input readOnly value={value} onClick={handleClick} type="text" />;
};

Input.propTypes = {
  toggleDatepicker: PropTypes.func.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  date: PropTypes.instanceOf(Date).isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
