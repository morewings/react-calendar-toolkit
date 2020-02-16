import React from 'react';
import PropTypes from 'prop-types';
import classes from './Year.module.css';

const YearGrid = props => (
  <div className={classes.scrollContainer}>
    <div className={props.className}>{props.children}</div>
  </div>
);

YearGrid.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

YearGrid.defaultProps = {
  className: classes.wrapper,
};

export default YearGrid;
