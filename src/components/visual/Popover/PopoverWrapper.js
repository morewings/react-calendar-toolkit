import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {useThemePostCSS} from 'utils/themeContext';
import useOnClickOutside from 'utils/useOnClickOutside';
import classes from './PopoverWrapper.module.css';

const PopoverWrapper = ({
  position,
  targetRect,
  popoverRect,
  children,
  toggleDatepicker,
}) => {
  const [ref, setRef] = useThemePostCSS();

  useOnClickOutside(ref, () => {
    toggleDatepicker(false);
  });

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
        [classes.bottom]: position === 'bottom',
        [classes.top]: position === 'top',
        [classes.right]: position === 'right',
        [classes.left]: position === 'left',
      })}>
      <div
        className={classnames({
          [classes.triangle]: true,
          [classes.bottom]: position === 'bottom',
          [classes.top]: position === 'top',
          [classes.right]: position === 'right',
          [classes.left]: position === 'left',
        })}
      />
      {children}
    </div>
  );
};

PopoverWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  targetRect: PropTypes.instanceOf(DOMRect).isRequired,
  popoverRect: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.instanceOf(DOMRect),
  ]).isRequired,
  toggleDatepicker: PropTypes.func.isRequired,
  position: PropTypes.oneOf(['bottom', 'top', 'left', 'right']).isRequired,
};

PopoverWrapper.defaultProps = {};

export default PopoverWrapper;
