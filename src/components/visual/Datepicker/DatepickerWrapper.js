import React from 'react';
import PropTypes from 'prop-types';
import classes from './DatepickerWrapper.module.css';

const DatepickerWrapper = props => (
  <div
    className={classes.datepickerWrapper}
    aria-label={props.title}
    role="dialog">
    {props.children}
  </div>
);

DatepickerWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  /** Title of the component, used for accessibility reasons */
  title: PropTypes.string.isRequired,
};

export default DatepickerWrapper;
