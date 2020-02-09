import React from 'react';
import PropTypes from 'prop-types';
import './DatepickerWrapper.scss';

const DatepickerWrapper = props => (
  <div className={props.className}>{props.children}</div>
);

DatepickerWrapper.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default DatepickerWrapper;
