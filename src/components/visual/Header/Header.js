/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import {getFormattedDate} from 'utils/dateUtils';
import './Header.scss';

const Header = props => {
  const date = getFormattedDate('MMM do', props.currentDate);
  return (
    <div className="header-wrapper">
      <div className="datepicker-name">{props.title}</div>
      <div className="current-date">{props.formattedDate}</div>
    </div>
  );
};

Header.propTypes = {
  currentDate: PropTypes.instanceOf(Date).isRequired,
  selectedDate: PropTypes.instanceOf(Date).isRequired, // eslint-disable-line react/no-unused-prop-types
  title: PropTypes.string.isRequired,
};

export default Header;
