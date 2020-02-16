import React from 'react';
import PropTypes from 'prop-types';
import classes from './WeekDay.module.css';

const WeekDay = props => (
  <div className={classes.wrapper}>{props.name.short}</div>
);

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
