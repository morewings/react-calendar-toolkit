import React, {useRef, useEffect, Fragment, useLayoutEffect} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Popover from 'react-tiny-popover';
import useOnClickOutside from 'utils/useOnClickOutside';
import {
  setCSSVariable,
  removeCSSVariable,
  useSetCSSVariable,
} from 'utils/themeContext';
import defaults from 'utils/defaultTheme';
import PopoverWrapper from './PopoverWrapper';
import classes from './Popover.module.css';

const PopoverContainer = ({
  renderDatePickerAs,
  isVisible,
  children,
  toggleDatepicker,
}) => {
  const Datepicker = renderDatePickerAs;
  const ref = useRef();
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
    <Popover
      align="start"
      isOpen={isVisible}
      position={['left', 'right']}
      padding={0}
      content={({position, targetRect, popoverRect}) => (
        <PopoverWrapper position={position}>
          <Datepicker />
        </PopoverWrapper>
      )}>
      {children}
    </Popover>
  );
};

PopoverContainer.propTypes = {
  children: PropTypes.node.isRequired,
  renderDatePickerAs: PropTypes.elementType.isRequired,
  isVisible: PropTypes.bool.isRequired,
  toggleDatepicker: PropTypes.func.isRequired,
};

PopoverContainer.defaultProps = {};

export default PopoverContainer;
