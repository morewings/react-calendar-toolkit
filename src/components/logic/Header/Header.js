import React from 'react';
import PropTypes from 'prop-types';
import {useDatePickerContext} from 'features/datepicker';
import {convertToDate} from 'utils/dateUtils';

const Header = ({renderAs, title}) => {
  const {
    state: {selectedTimestamp, todayTimestamp},
  } = useDatePickerContext();
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
