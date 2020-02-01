/*eslint-disable*/
import React from 'react';
import DayGrid from 'components/DayGrid';
import './DatePicker.scss';


const DatePicker = props => {
  return (
    <div className="datepicker-wrapper">
      <DayGrid></DayGrid>
    </div>
  );
};

export default DatePicker;
