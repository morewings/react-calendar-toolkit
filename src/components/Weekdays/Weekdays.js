import React from 'react';
import PropTypes from 'prop-types';
import {useLocaleEnumerators} from 'utils/localeContext';

const WeekDays = ({wrapperComponent, visualComponent}) => {
  const WeekDaysWrapper = wrapperComponent;
  const VisualComponent = visualComponent;
  const {getWeekDayNames} = useLocaleEnumerators();
  return (
    <WeekDaysWrapper>
      {getWeekDayNames.map(name => (
        <VisualComponent key={name.short} name={name} />
      ))}
    </WeekDaysWrapper>
  );
};

WeekDays.propTypes = {
  wrapperComponent: PropTypes.elementType.isRequired,
  visualComponent: PropTypes.elementType.isRequired,
  // items: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     short: PropTypes.string.isRequired,
  //     narrow: PropTypes.string.isRequired,
  //     abbreviated: PropTypes.string.isRequired,
  //     wide: PropTypes.string.isRequired,
  //     numeric: PropTypes.number.isRequired,
  //   }).isRequired
  // ).isRequired,
};

export default WeekDays;
