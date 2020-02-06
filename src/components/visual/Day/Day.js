/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Day.scss';

const Day = props => (
  <div
    role="button"
    onClick={() => {props.onClick(props.date)}}
    className={classNames({
      'day-wrapper': true,
      disabled: props.disabled,
      isToday: props.isToday,
    })}>
    {props.dayNumber}
  </div>
);

Day.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
  isToday: PropTypes.bool.isRequired,
  dayNumber: PropTypes.number.isRequired,
};

export default Day;
