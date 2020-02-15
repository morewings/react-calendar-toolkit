import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

const Header = ({formatDate, selectedTimestamp, title}) => (
  <div className="header-wrapper">
    <div className="datepicker-name">{title}</div>
    <div className="current-date">
      {formatDate('MMM do', selectedTimestamp)}
    </div>
  </div>
);

Header.propTypes = {
  todayTimestamp: PropTypes.number.isRequired, // eslint-disable-line react/no-unused-prop-types
  selectedTimestamp: PropTypes.number.isRequired, // eslint-disable-line react/no-unused-prop-types
  title: PropTypes.string.isRequired,
  formatDate: PropTypes.func.isRequired,
};

export default Header;
