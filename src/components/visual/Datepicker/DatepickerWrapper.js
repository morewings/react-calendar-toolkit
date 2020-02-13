import React from 'react';
import PropTypes from 'prop-types';
import './DatepickerWrapper.scss';

const DatepickerWrapper = props => (
  <div className={props.wrapperClassname}>{props.children}</div>
);

DatepickerWrapper.propTypes = {
  wrapperClassname: PropTypes.string,
  children: PropTypes.node.isRequired,
};

DatepickerWrapper.defaultProps = {
  wrapperClassname: 'datepicker-wrapper',
};

export default DatepickerWrapper;
