import React from 'react';
import PropTypes from 'prop-types';
import {useTheme} from 'lib/features/theme';
import classes from './DatepickerWrapper.module.css';

const DatepickerWrapper = ({title, children, className}) => {
  const {setRef, style} = useTheme();
  return (
    <div
      style={style}
      ref={setRef}
      className={className}
      aria-label={title}
      role="dialog">
      {children}
    </div>
  );
};

DatepickerWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  /** Title of the component, used for accessibility reasons */
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

DatepickerWrapper.defaultProps = {
  className: classes.datepickerWrapper,
};

export default DatepickerWrapper;
