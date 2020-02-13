import React from 'react';
import PropTypes from 'prop-types';

const DayGrid = ({children, wrapperClassName}) => (
  <div className={wrapperClassName}>{children}</div>
);

DayGrid.propTypes = {
  wrapperClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
};

DayGrid.defaultProps = {
  wrapperClassName: 'day-grid-wrapper',
};

export default DayGrid;
