import React from 'react';
import {isSameDay} from 'date-fns';
import customLocale from 'date-fns/locale/es';
// eslint-disable-next-line import/no-named-as-default
import DatePicker, {DatePickerInput} from 'lib';
import './App.css';

const highlightDate = ({date, precision}) =>
  isSameDay(date, new Date(2020, 0, 7));

const App = () => (
  <div className="app">
    <div className="container">
      <DatePicker
        startDate={new Date(1999, 11, 6)}
        endDate={new Date(2020, 1, 25)}
        minPrecision="day"
        highlightDate={highlightDate}
        onDateSet={date => {
          // eslint-disable-next-line no-console
          console.log('date set', date);
        }}
        title="Demo datepicker"
        theme={{
          headerBgColor: 'purple',
        }}
      />
    </div>
    <div className="container">
      <DatePickerInput
        minPrecision="month"
        onDateSet={date => {
          // console.log('date set', date);
        }}
        dateFnsLocale={customLocale}
        title="Demo datepicker"
      />
    </div>
  </div>
);

export default App;
