import React from 'react';
import PropTypes from 'prop-types';
import classes from './WeekDay.module.css';

const WeekDay = ({name}) => (
  <div className={classes.wrapper} aria-label={name.wide}>
    {name.short}
  </div>
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
