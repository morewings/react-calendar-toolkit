import React from 'react';
import PropTypes from 'prop-types';
import classes from './Day.module.scss';

const DayGrid = ({children, wrapperClassName}) => (
  <div className={wrapperClassName}>{children}</div>
);

DayGrid.propTypes = {
  wrapperClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
};

DayGrid.defaultProps = {
  wrapperClassName: classes.grid,
};

export default DayGrid;
