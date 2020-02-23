import React from 'react';
import PropTypes from 'prop-types';
import classes from './Year.module.css';

const YearGrid = props => (
  <div className={classes.scrollContainer}>
    <div className={classes.grid}>{props.children}</div>
  </div>
);

YearGrid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default YearGrid;
