import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Day.scss';

const Day = props => {
  const handleClick = () => {
    props.onSetDay(props.date);
  };
  return (
    <div
      tabIndex="0"
      role="button"
      onClick={handleClick}
      onKeyPress={handleClick}
      className={classNames({
        'day-wrapper': true,
        isOtherMonth: !props.isSameMonth,
        isToday: props.isToday,
        isSelected: props.isSelected,
      })}>
      {props.name}
    </div>
  );
};

Day.propTypes = {
  isSameMonth: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSetDay: PropTypes.func.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  isToday: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default Day;
