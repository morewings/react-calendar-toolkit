import React from 'react';
import DatePicker from 'components/DatePicker';
import DatePickerFieldset from 'components/DatePickerFieldset';
import './App.scss';

const App = () => (
  <div className="app">
    <div className="container">
      <DatePicker title="Demo datepicker" />
    </div>
    <div className="container">
      <DatePickerFieldset title="Demo datepicker" />
    </div>
  </div>
);

export default App;
