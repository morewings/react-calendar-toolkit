/*eslint-disable*/
import React from 'react';
import {isSameDay} from 'date-fns'
import DatePicker, {DatePickerInput} from 'entryPoint';
import './App.css';

const highlightDate = ({date, precision}) => {
  return isSameDay(date, new Date(2020, 0, 7))
};

const App = () => (
  <div className="app">
    <div className="container">
      <DatePicker
        startDate={new Date(1999, 11, 6)}
        endDate={new Date(2020, 1, 25)}
        minPrecision="year"
        highlightDate={highlightDate}
        onDateSet={date => {
          console.log('date set', date);
        }}
        title="Demo datepicker"
        theme={{
          '--headerBgColor': 'purple'
        }}
      />
    </div>
    <div className="container">
      <DatePickerInput
        onDateSet={date => {
          // console.log('date set', date);
        }}
        mode="modal"
        title="Demo datepicker"
      />
    </div>
  </div>
);

export default App;
