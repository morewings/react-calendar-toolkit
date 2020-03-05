import React, {useRef, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {useThemePostCSS} from 'utils/themeContext';
import defaultTheme from 'utils/defaultTheme';
import classes from './DatepickerWrapper.module.css';

const DatepickerWrapper = props => {
  const ref = useRef();
  const [hasRendered, setHasRendered] = useState(false);
  useEffect(() => {
    setHasRendered(true);
    return () => {
      setHasRendered(false);
    };
  }, []);
  /** Hook to set style variables from Theme Context */
  useThemePostCSS(defaultTheme, ref.current);
  return (
    <div
      ref={ref}
      className={classNames({
        [classes.datepickerWrapper]: true,
        /** We are hiding component, until ref is available */
        [classes.hidden]: !hasRendered,
      })}
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
