import React from 'react';
import PropTypes from 'prop-types';
import './DatepickerWrapper.scss';

const DatepickerWrapper = props => (
  <div className={props.className}>{props.children}</div>
);

DatepickerWrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

DatepickerWrapper.defaultProps = {
  className: 'datepicker-wrapper',
};

export default DatepickerWrapper;
