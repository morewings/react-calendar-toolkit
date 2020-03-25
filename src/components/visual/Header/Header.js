import React from 'react';
import PropTypes from 'prop-types';
import {useFormatDate} from 'entryPoint';
import classes from './Header.module.css';

const Header = ({selectedDate, title}) => {
  /**
   * Returns formatted date
   * @param {string} pattern - Formatting pattern
   * @param {Date} date - Date object to apply format
   * @return {string} Formatted date
   */
  const formatDate = useFormatDate();
  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>{title}</div>
      <div aria-live="polite" className={classes.currentDate}>
        {formatDate('MMM do', selectedDate)}
      </div>
    </div>
  );
};

Header.propTypes = {
  /** Set today date. */
  todayDate: PropTypes.instanceOf(Date).isRequired, // eslint-disable-line react/no-unused-prop-types
  /** Set selected date. */
  selectedDate: PropTypes.instanceOf(Date).isRequired, // eslint-disable-line react/no-unused-prop-types
  /** Set title of datepicker. */
  title: PropTypes.string.isRequired,
};

export default Header;
