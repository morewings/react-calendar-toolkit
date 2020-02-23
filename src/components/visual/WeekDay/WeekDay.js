import React from 'react';
import PropTypes from 'prop-types';
import classes from './WeekDay.module.css';

const WeekDay = props => (
  <div className={classes.wrapper}>{props.name.short}</div>
);

WeekDay.propTypes = {
  /** Object containing weekday name localized in different forms */
  name: PropTypes.shape({
    /** 'su', 'mo', 'tu', 'we', 'th', 'fr', 'sa' */
    short: PropTypes.string.isRequired,
    /** 's', 'm', 't', 'w', 't', 'f', 's' */
    narrow: PropTypes.string.isRequired,
    /** 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' */
    abbreviated: PropTypes.string.isRequired,
    /** 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' */
    wide: PropTypes.string.isRequired,
    /** 0, 1, 2, 3, 4, 5, 6 */
    numeric: PropTypes.number.isRequired,
  }).isRequired,
};

export default WeekDay;
