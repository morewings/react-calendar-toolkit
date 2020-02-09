import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import {useScrollIntoView} from 'components/SelectorYear';
import classNames from 'classnames';
import './Year.scss';

const Year = props => {
  const handleClick = () => {
    props.onSetYear(props.date);
  };
  const currentYear = useRef();
  useScrollIntoView(currentYear, props.isSelected);
  return (
    <div
      ref={currentYear}
      tabIndex="0"
      role="button"
      onClick={handleClick}
      onKeyPress={handleClick}
      className={classNames({
        'year-wrapper': true,
        disabled: props.disabled,
        isSameYear: props.isSameYear,
        isSelected: props.isSelected,
      })}>
      {props.yearNumber}
    </div>
  );
};

Year.propTypes = {
  disabled: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSetYear: PropTypes.func.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  isSameYear: PropTypes.bool.isRequired,
  yearNumber: PropTypes.number.isRequired,
};

export default Year;
