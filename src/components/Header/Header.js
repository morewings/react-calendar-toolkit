/*eslint-disable*/
import React from 'react';
import {getFormattedDate} from 'utils/dateUtils';
import './Header.scss';

const Header = props => {
  const formattedDate = getFormattedDate('MMM d', new Date());
  return (
    <div className="header-wrapper">
      <div className="current-date">{formattedDate}</div>
    </div>
  )
}

export default Header;