import React from 'react';
import PropTypes from 'prop-types';
import Popover from 'react-tiny-popover';
import PopoverWrapper from './PopoverWrapper';

const PopoverProvider = ({
  renderDatePickerAs,
  isVisible,
  children,
  toggleDatepicker,
}) => {
  const Datepicker = renderDatePickerAs;
  return (
    <Popover
      align="start"
      isOpen={isVisible}
      position={['bottom', 'top']}
      padding={0}
      content={({position, targetRect, popoverRect}) => (
        <PopoverWrapper
          targetRect={targetRect}
          popoverRect={popoverRect}
          toggleDatepicker={toggleDatepicker}
          position={position}>
          <Datepicker />
        </PopoverWrapper>
      )}>
      {children}
    </Popover>
  );
};

PopoverProvider.propTypes = {
  children: PropTypes.node.isRequired,
  renderDatePickerAs: PropTypes.elementType.isRequired,
  isVisible: PropTypes.bool.isRequired,
  toggleDatepicker: PropTypes.func.isRequired,
};

PopoverProvider.defaultProps = {};

export default PopoverProvider;
