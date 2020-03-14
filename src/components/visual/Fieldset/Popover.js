import React from 'react';
import PropTypes from 'prop-types';
import Popover, {ArrowContainer} from 'react-tiny-popover';
import classes from './Popover.module.css';

const PopoverContainer = ({
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
      onClickOutside={() => {
        toggleDatepicker(false);
      }}
      content={({position, targetRect, popoverRect}) => (
        <div className={classes.wrapper}>
          <Datepicker />
        </div>
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
