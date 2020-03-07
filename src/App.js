/*eslint-disable*/
import React from 'react';
import {isSameDay} from 'date-fns'
import DatePicker from 'entryPoint';
import DatePickerFieldset from 'components/DatePickerFieldset';
import './App.scss';

const highlightDate = ({date, precision}) => {
  return isSameDay(date, new Date(2020, 0, 7))
};

const App = () => (
  <div className="app">
    <div className="container">
      <DatePicker
        startDate={new Date(1990, 0, 1)}
        endDate={new Date(2020, 1, 25)}
        minPrecision="year"
        highlightDate={highlightDate}
        onDateSet={date => {
          console.log('date set', date);
        }}
        title="Demo datepicker"
        // theme={{
        //   '--headerBgColor': 'purple'
        // }}
      />
    </div>
    <div className="container">
      {/*<DatePickerFieldset*/}
      {/*  onDateSet={date => {*/}
      {/*    console.log('date set', date);*/}
      {/*  }}*/}
      {/*  startDate={new Date(1979, 0, 1)}*/}
      {/*  endDate={new Date(2030, 1, 25)}*/}
      {/*  minPrecision="day"*/}
      {/*  title="Demo datepicker"*/}
      {/*/>*/}
    </div>
  </div>
);

export default App;
