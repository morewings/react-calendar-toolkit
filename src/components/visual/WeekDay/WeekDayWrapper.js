/*eslint-disable*/
import React from 'react';
import './WeekDayWrapper.scss'

const WeekDayWrapper = props => {
  return (
    <div className="weekdays-wrapper">{props.children}</div>
  )
};

export default WeekDayWrapper