import React from 'react';
import PropTypes from 'prop-types';
import classes from './Day.module.css';

const DayGrid = ({children, wrapperClassName}) => (
  <div className={wrapperClassName} role="grid">
    {children}
  </div>
);

DayGrid.propTypes = {
  wrapperClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
};

DayGrid.defaultProps = {
  wrapperClassName: classes.grid,
};

export default DayGrid;
