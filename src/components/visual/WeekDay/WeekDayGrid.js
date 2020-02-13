import React from 'react';
import PropTypes from 'prop-types';

const WeekdayGrid = ({children, wrapperClassName}) => (
  <div className={wrapperClassName}>{children}</div>
);

WeekdayGrid.propTypes = {
  wrapperClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
};

WeekdayGrid.defaultProps = {
  wrapperClassName: 'weekdays-wrapper',
};

export default WeekdayGrid;
