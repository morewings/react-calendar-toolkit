import React from 'react';
import './WeekDay.scss';
import PropTypes from 'prop-types';

const WeekDay = props => <div className="weekday">{props.name.short}</div>;

WeekDay.propTypes = {
  name: PropTypes.shape({
    short: PropTypes.string.isRequired,
    narrow: PropTypes.string.isRequired,
    abbreviated: PropTypes.string.isRequired,
    wide: PropTypes.string.isRequired,
    numeric: PropTypes.number.isRequired,
  }).isRequired,
};

export default WeekDay;
