import React from 'react';
import PropTypes from 'prop-types';
import classes from './Weekdays.module.css';

const Weekdays = ({names}) => (
  <div className={classes.grid} role="presentation">
    {names.map(name => (
      <div key={name.short} className={classes.wrapper} aria-label={name.wide}>
        {name.short}
      </div>
    ))}
  </div>
);

Weekdays.propTypes = {
  /** Object containing weekday name localized in different forms */
  names: PropTypes.arrayOf(
    PropTypes.shape({
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
    }).isRequired
  ).isRequired,
};

export default Weekdays;
