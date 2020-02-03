/*eslint-disable*/
import React from 'react';
import Header from 'components/Header';
import MonthStepper from 'components/DateSelector';
import DayGrid from 'components/DayGrid';
import './DatePicker.scss';


const DatePicker = props => {
  return (
    <div className="datepicker-wrapper">
      <Header />
      <MonthStepper />
      <DayGrid />
    </div>
  );
};

export default DatePicker;
