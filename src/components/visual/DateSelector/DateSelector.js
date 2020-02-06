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
      <button onClick={props.incrementMonth} type="button">
        ⟨
      </button>
      <button onClick={props.decrementMonth} type="button">
        ⟩
      </button>
    </div>
  </div>
);

DateSelector.propTypes = {
  setPrecision: PropTypes.func.isRequired,
  incrementMonth: PropTypes.func.isRequired,
  decrementMonth: PropTypes.func.isRequired,
  setMonth: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
  setYear: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
  year: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired, // eslint-disable-line react/no-unused-prop-types
};

export default DateSelector;
