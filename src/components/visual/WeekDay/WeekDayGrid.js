import React from 'react';
import PropTypes from 'prop-types';
import classes from './WeekDay.module.css';

const WeekdayGrid = ({children, wrapperClassName}) => (
  <div className={wrapperClassName}>{children}</div>
);

WeekdayGrid.propTypes = {
  wrapperClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
};

WeekdayGrid.defaultProps = {
  wrapperClassName: classes.grid,
};

export default WeekdayGrid;
