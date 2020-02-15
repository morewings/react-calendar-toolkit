/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

const Header = props => {
  const date = props.formatDate('MMM do', props.selectedTimestamp);
  return (
    <div className="header-wrapper">
      <div className="datepicker-name">{props.title}</div>
      <div className="current-date">{date}</div>
    </div>
  );
};

Header.propTypes = {
  todayTimestamp: PropTypes.number.isRequired,
  selectedTimestamp: PropTypes.number.isRequired, // eslint-disable-line react/no-unused-prop-types
  title: PropTypes.string.isRequired,
};

export default Header;
