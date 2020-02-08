import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Month.scss';

const Month = props => {
  const handleClick = () => {
    props.onSetMonth(props.date);
  };
  return (
    <div
      tabIndex="0"
      role="button"
      onClick={handleClick}
      onKeyPress={handleClick}
      className={classNames({
        'month-wrapper': true,
        disabled: props.disabled,
        isSameMonth: props.isSameMonth,
        isSelected: props.isSelected,
      })}>
      {props.name}
    </div>
  );
};

Month.propTypes = {
  disabled: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSetMonth: PropTypes.func.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  isSameMonth: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default Month;
