import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {toDate} from 'utils/dateUtils';
import {selectors} from 'features/datepicker';
import HeaderVisual from 'components/visual/Header';

const Header = props => {
  const selectedTimestamp = useSelector(selectors.getSelectedTimestamp);
  const todayTimestamp = useSelector(selectors.getTodayTimestamp);
  return (
    <HeaderVisual
      title={props.title}
      currentDate={toDate(todayTimestamp)}
      selectedDate={toDate(selectedTimestamp)}
    />
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
