import React from 'react';
import PropTypes from 'prop-types';
import './DateSelector.scss';

const DateSelector = props => (
  <div className="date-selector-wrapper">
    <div className="date-selector-buttons">
      <button
        onClick={() => {
          props.setPrecision('year');
        }}
        type="button">
        {props.year}
      </button>
      <button
        onClick={() => {
          props.setPrecision('month');
        }}
        type="button">
        {props.month}
      </button>
    </div>
    <div className="date-stepper">
      <button
        onClick={() => {
          props.decrementMonth(props.date);
        }}
        type="button">
        ⟨
      </button>
      <button
        onClick={() => {
          props.incrementMonth(props.date);
        }}
        type="button">
        ⟩
      </button>
    </div>
  </div>
);

DateSelector.propTypes = {
  setPrecision: PropTypes.func.isRequired,
  incrementMonth: PropTypes.func.isRequired,
  decrementMonth: PropTypes.func.isRequired,
  year: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired, // eslint-disable-line react/no-unused-prop-types
};

export default DateSelector;
