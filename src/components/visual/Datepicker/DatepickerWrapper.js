import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import {useThemePostCSS} from 'utils/themeContext';
import classes from './DatepickerWrapper.module.css';

const DatepickerWrapper = props => {
  const ref = useRef();
  /** Hook to set style variables from Theme Context */
  useThemePostCSS(ref.current);
  return (
    <div
      ref={ref}
      className={classes.datepickerWrapper}
      aria-label={props.title}
      role="dialog">
      {props.children}
    </div>
  );
};

DatepickerWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  /** Title of the component, used for accessibility reasons */
  title: PropTypes.string.isRequired,
};

export default DatepickerWrapper;
