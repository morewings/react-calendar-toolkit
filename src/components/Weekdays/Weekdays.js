import React from 'react';
import PropTypes from 'prop-types';
import {getWeekDayNames} from 'utils/dateUtils';

const WeekDays = ({wrapperComponent, visualComponent}) => {
  const weekDayNames = getWeekDayNames();
  const WeekDaysWrapper = wrapperComponent;
  const VisualComponent = visualComponent;
  return (
    <WeekDaysWrapper>
      {weekDayNames.map(name => (
        <VisualComponent key={name} name={name} />
      ))}
    </WeekDaysWrapper>
  );
};

WeekDays.propTypes = {
  wrapperComponent: PropTypes.elementType.isRequired,
  visualComponent: PropTypes.elementType.isRequired,
};

export default WeekDays;
