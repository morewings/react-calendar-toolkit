import React from 'react';
import PropTypes from 'prop-types';
import classes from './DatepickerWrapper.module.css';

const DatepickerWrapper = props => (
  <div className={props.wrapperClassname}>{props.children}</div>
);

DatepickerWrapper.propTypes = {
  wrapperClassname: PropTypes.string,
  children: PropTypes.node.isRequired,
};

DatepickerWrapper.defaultProps = {
  wrapperClassname: classes.datepickerWrapper,
};

export default DatepickerWrapper;
