import React from 'react';
import PropTypes from 'prop-types';
import {getWeekDayNames} from 'utils/dateUtils';
import Weekday from 'components/visual/WeekDay';

const WeekDays = ({wrapperElement, wrapperClassname, visualComponent}) => {
  const weekDayNames = getWeekDayNames();
  const WeekDaysWrapper = wrapperElement;
  const VisualComponent = visualComponent;
  return (
    <WeekDaysWrapper className={wrapperClassname}>
      {weekDayNames.map(name => (
        <VisualComponent key={name} name={name} />
      ))}
    </WeekDaysWrapper>
  );
};

WeekDays.propTypes = {
  wrapperClassname: PropTypes.string,
  wrapperElement: PropTypes.elementType,
  visualComponent: PropTypes.elementType,
};

WeekDays.defaultProps = {
  wrapperClassname: 'weekdays-wrapper',
  wrapperElement: 'div',
  visualComponent: Weekday,
};

export default WeekDays;
