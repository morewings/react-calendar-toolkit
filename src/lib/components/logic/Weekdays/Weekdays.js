import React from 'react';
import PropTypes from 'prop-types';
import {useWeekDayNames} from 'lib/features/locale';

const WeekDays = ({wrapWith, renderAs}) => {
  const WeekDaysWrapper = wrapWith;
  const VisualComponent = renderAs;
  const getWeekDayNames = useWeekDayNames();
  return (
    <WeekDaysWrapper>
      {getWeekDayNames.map(name => (
        <VisualComponent key={name.short} name={name} />
      ))}
    </WeekDaysWrapper>
  );
};

WeekDays.propTypes = {
  wrapWith: PropTypes.elementType.isRequired,
  renderAs: PropTypes.elementType.isRequired,
};

export default WeekDays;