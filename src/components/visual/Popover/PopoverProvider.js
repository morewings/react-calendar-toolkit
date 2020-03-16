import React from 'react';
import PropTypes from 'prop-types';
import Popover from 'react-tiny-popover';
import classes from './PopoverProvider.module.css';

const PopoverProvider = ({
  renderDatePickerAs,
  isVisible,
  children,
  toggleDatepicker,
  wrapPopoverWith,
}) => {
  const Datepicker = renderDatePickerAs;
  const Wrapper = wrapPopoverWith;
  return (
    <Popover
      align="start"
      isOpen={isVisible}
      position={['bottom', 'top']}
      padding={0}
      containerClassName={classes.container}
      content={({position, targetRect, popoverRect}) => (
        <Wrapper
          targetRect={targetRect}
          popoverRect={popoverRect}
          toggleDatepicker={toggleDatepicker}
          position={position}>
          <Datepicker />
        </Wrapper>
      )}>
      {children}
    </Popover>
  );
};

PopoverProvider.propTypes = {
  children: PropTypes.node.isRequired,
  renderDatePickerAs: PropTypes.elementType.isRequired,
  wrapPopoverWith: PropTypes.elementType.isRequired,
  isVisible: PropTypes.bool.isRequired,
  toggleDatepicker: PropTypes.func.isRequired,
};

PopoverProvider.defaultProps = {};

export default PopoverProvider;
