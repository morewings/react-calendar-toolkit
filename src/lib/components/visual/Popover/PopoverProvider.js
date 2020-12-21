import React from 'react';
import PropTypes from 'prop-types';
import {Popover} from 'react-tiny-popover';
import classes from './PopoverProvider.module.css';

const PopoverProvider = ({
  renderDatepickerAs,
  isVisible,
  children,
  toggleDatepicker,
  wrapPopoverWith,
}) => {
  const Datepicker = renderDatepickerAs;
  const Wrapper = wrapPopoverWith;
  return (
    <Popover
      align="start"
      isOpen={isVisible}
      padding={0}
      containerClassName={classes.container}
      content={({position}) => (
        <Wrapper toggleDatepicker={toggleDatepicker} position={position}>
          <Datepicker />
        </Wrapper>
      )}>
      {children}
    </Popover>
  );
};

PopoverProvider.propTypes = {
  children: PropTypes.node.isRequired,
  renderDatepickerAs: PropTypes.elementType.isRequired,
  wrapPopoverWith: PropTypes.elementType.isRequired,
  isVisible: PropTypes.bool.isRequired,
  toggleDatepicker: PropTypes.func.isRequired,
};

PopoverProvider.defaultProps = {};

export default PopoverProvider;
