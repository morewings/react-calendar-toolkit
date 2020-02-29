import React from 'react';
import PropTypes from 'prop-types';
import classes from './DatepickerWrapper.module.css';

const DatepickerWrapper = props => (
  <div className={classes.datepickerWrapper}>{props.children}</div>
);

DatepickerWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DatepickerWrapper;
