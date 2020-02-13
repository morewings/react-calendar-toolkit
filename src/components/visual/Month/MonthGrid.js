import React from 'react';
import PropTypes from 'prop-types';

const MonthGrid = ({children, wrapperClassName}) => (
  <div className={wrapperClassName}>{children}</div>
);

MonthGrid.propTypes = {
  wrapperClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
};

MonthGrid.defaultProps = {
  wrapperClassName: 'day-grid-wrapper',
};

export default MonthGrid;
