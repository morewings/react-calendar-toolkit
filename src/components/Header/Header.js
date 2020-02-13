/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import {getFormattedDate} from 'utils/dateUtils';
import {useSelector} from 'react-redux';
import {toDate} from 'utils/dateUtils';
import {selectors} from 'features/datepicker';
import HeaderVisual from 'components/visual/Header';

const Header = ({title, selectedTimestamp, todayTimestamp}) => {
  const formattedDate = getFormattedDate('MMM do', todayTimestamp);
  return (
    <HeaderVisual
      formattedDate={formattedDate}
      title={title}
      currentDate={toDate(todayTimestamp)}
      selectedDate={toDate(selectedTimestamp)}
    />
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
