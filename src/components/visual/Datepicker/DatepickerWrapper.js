import React, {useRef, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {useThemePostCSS} from 'utils/themeContext';
import classes from './DatepickerWrapper.module.css';

const DatepickerWrapper = props => {
  const [, setRef] = useThemePostCSS();
  return (
    <div
      ref={setRef}
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
