import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Day.scss';

const Day = props => (
  <div
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
  isToday: PropTypes.bool.isRequired,
  dayNumber: PropTypes.string.isRequired,
};

export default Day;
