import React from 'react';
import PropTypes from 'prop-types';
import classes from './Day.module.css';

const DayGrid = ({children, className}) => (
  <div className={className || classes.grid}>{children}</div>
);

DayGrid.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

export default DayGrid;
