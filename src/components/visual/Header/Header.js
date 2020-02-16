import React from 'react';
import PropTypes from 'prop-types';
import {useFormatDate} from 'utils/localeContext';
import classes from './Header.module.css';

const Header = ({selectedTimestamp, title}) => {
  const formatDate = useFormatDate();
  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>{title}</div>
      <div className={classes.currentDate}>
        {formatDate('MMM do', selectedTimestamp)}
      </div>
    </div>
  );
};

Header.propTypes = {
  todayTimestamp: PropTypes.number.isRequired, // eslint-disable-line react/no-unused-prop-types
  selectedTimestamp: PropTypes.number.isRequired, // eslint-disable-line react/no-unused-prop-types
  title: PropTypes.string.isRequired,
};

export default Header;
