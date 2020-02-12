/*eslint-disable*/
import React from 'react';
import DatePicker from 'components/DatePicker';
import DatePickerFieldset from 'components/DatePickerFieldset';
import './App.scss';

const App = () => (
  <div className="app">
    <div className="container">
      <DatePicker
        onDateSet={date => {
          console.log('date set', date);
        }}
        title="Demo datepicker"
      />
    </div>
    <div className="container">
      <DatePickerFieldset
        onDateSet={date => {
          console.log('date set', date);
        }}
        minPrecision="day"
        title="Demo datepicker"
      />
    </div>
  </div>
);

export default App;
