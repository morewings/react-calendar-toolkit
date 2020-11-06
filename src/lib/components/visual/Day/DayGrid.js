import React from 'react';
import PropTypes from 'prop-types';
import classes from './Day.module.css';

const DayGrid = ({children}) => <div className={classes.grid}>{children}</div>;

DayGrid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DayGrid;
