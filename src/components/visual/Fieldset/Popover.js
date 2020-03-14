/*eslint-disable*/
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Popover, {ArrowContainer} from 'react-tiny-popover';
import classNames from 'classnames';
import classes from './Popover.module.css';

const PopoverContainer = props => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const Datepicker = props.renderDatePickerAs
  return (
    <Popover
      align="start"
      isOpen={true}
      position={['bottom', 'top']}
      padding={0}
      onClickOutside={() => {
        setIsPopoverOpen(false);
      }}
      content={({position, targetRect, popoverRect}) => (
        <div className={classes.wrapper}>
          <Datepicker />
        </div>
      )}>
      {props.children}
    </Popover>
  );
};

PopoverContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

PopoverContainer.defaultProps = {};

export default PopoverContainer;
