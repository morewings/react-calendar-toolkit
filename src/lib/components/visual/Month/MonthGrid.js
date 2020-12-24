import React from 'react';
import PropTypes from 'prop-types';
import classes from './Month.module.css';

const MonthGrid = ({children, className}) => (
  <div className={className || classes.grid} role="grid">
    {children}
  </div>
);

MonthGrid.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default MonthGrid;
