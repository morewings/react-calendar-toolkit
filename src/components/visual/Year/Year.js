import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import useScrollIntoView from 'utils/useScrollIntoView';
import classNames from 'classnames';
import './Year.scss';

const Year = props => {
  const handleClick = () => {
    props.onDateSet(props.date);
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
        isSameYear: props.isSameYear,
        isSelected: props.isSelected,
      })}>
      {props.name.numeric}
    </div>
  );
};

Year.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  onDateSet: PropTypes.func.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  isSameYear: PropTypes.bool.isRequired,
  name: PropTypes.shape({
    numeric: PropTypes.number.isRequired,
  }).isRequired,
};

export default Year;
