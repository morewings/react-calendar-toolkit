import React from 'react';
import PropTypes from 'prop-types';
import {useDatepickerContext} from 'lib/features/datepicker';
import {convertToDate} from 'lib/utils/dateUtils';

const Header = ({renderAs, title}) => {
  const {
    state: {selectedTimestamp, todayTimestamp},
  } = useDatepickerContext();
  const HeaderUI = renderAs;
  return (
    <HeaderUI
      selectedDate={convertToDate(selectedTimestamp)}
      todayDate={convertToDate(todayTimestamp)}
      title={title}
    />
  );
};

Header.propTypes = {
  renderAs: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
