import React from 'react';
import PropTypes from 'prop-types';

const YearGrid = props => (
  <div className="year-scroll-container">
    {/* TODO: fix class mismatch */}
    <div className={props.className || 'year-grid-wrapper'}>
      {props.children}
    </div>
  </div>
);

YearGrid.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

YearGrid.defaultProps = {
  className: 'year-grid-wrapper',
};

export default YearGrid;
