/*eslint-disable*/
import React, {useRef, useEffect, Fragment, useLayoutEffect} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  useThemePostCSS,
} from 'utils/themeContext';
import defaults from 'utils/defaultTheme';
import classes from './Popover.module.css';

const PopoverWrapper = ({position, targetRect, popoverRect, children}) => {
  const ref = useRef();
  useThemePostCSS(ref.current);
  return (
      <div
        ref={ref}
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
  )
};


PopoverWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.oneOf(['bottom', 'top', 'left', 'right']).isRequired,
};

PopoverWrapper.defaultProps = {};

export default PopoverWrapper
