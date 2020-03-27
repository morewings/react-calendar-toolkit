import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {useThemePostCSS} from 'features/theme';
import useOnClickOutside from 'utils/useOnClickOutside';
import classes from './PopoverWrapper.module.css';

const PopoverWrapper = ({position, children, toggleDatepicker}) => {
  /* Apply postcss theme to containing div */
  const [ref, setRef] = useThemePostCSS();

  /* Close popover on click outside */
  useOnClickOutside(ref, () => {
    toggleDatepicker(false);
  });

  /* Close popover when user is scrolling page */
  useEffect(() => {
    const listener = () => {
      toggleDatepicker(false);
    };
    document.addEventListener('scroll', listener);
    return () => {
      document.removeEventListener('scroll', listener);
    };
  }, [toggleDatepicker]);

  return (
    <div
      ref={setRef}
      className={classnames({
        [classes.wrapper]: true,
        /* Conditional class to position Popover relative to Input */
        [classes[position]]: true,
      })}>
      <div
        className={classnames({
          [classes.triangle]: true,
          /* Conditional class to position triangle attachment relative to Input */
          [classes[position]]: true,
        })}
      />
      {children}
    </div>
  );
};

PopoverWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  /** Method to toggle Datepicker visibility */
  toggleDatepicker: PropTypes.func.isRequired,
  /** Calculated position of Popover to fit into viewport */
  position: PropTypes.oneOf(['bottom', 'top', 'left', 'right']).isRequired,
};

export default PopoverWrapper;
