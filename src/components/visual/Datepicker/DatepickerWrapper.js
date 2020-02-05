/*eslint-disable*/
import React from 'react';
import './DatepickerWrapper.scss'

const DatepickerWrapper = props => {
  return (
    <div  className="datepicker-wrapper">{props.children}</div>
  )
};

export default DatepickerWrapper