import React from 'react';
import PropTypes from 'prop-types';
import classes from './Year.module.css';

const YearGrid = ({children, className}) => (
  <div className={classes.scrollContainer}>
    <div className={className || classes.grid}>{children}</div>
  </div>
);

YearGrid.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

export default YearGrid;
