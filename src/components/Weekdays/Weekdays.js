import React from 'react';
import PropTypes from 'prop-types';

const WeekDays = ({wrapperComponent, visualComponent, items}) => {
  const WeekDaysWrapper = wrapperComponent;
  const VisualComponent = visualComponent;
  return (
    <WeekDaysWrapper>
      {items.map(name => (
        <VisualComponent key={name} name={name} />
      ))}
    </WeekDaysWrapper>
  );
};

WeekDays.propTypes = {
  wrapperComponent: PropTypes.elementType.isRequired,
  visualComponent: PropTypes.elementType.isRequired,
  items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default WeekDays;
