import React from 'react';
import PropTypes from 'prop-types';

const YearWrapper = props => (
  <div className="year-scroll-container">
    <div className={props.className}>{props.children}</div>
  </div>
);

YearWrapper.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default YearWrapper;
