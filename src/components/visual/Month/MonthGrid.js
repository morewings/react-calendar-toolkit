import React from 'react';
import PropTypes from 'prop-types';
import classes from './Month.module.scss';

const MonthGrid = ({children, wrapperClassName}) => (
  <div className={wrapperClassName}>{children}</div>
);

MonthGrid.propTypes = {
  wrapperClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
};

MonthGrid.defaultProps = {
  wrapperClassName: classes.grid,
};

export default MonthGrid;
