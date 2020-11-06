import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import useOnClickOutside from 'lib/utils/useOnClickOutside';
import classes from './ModalWrapper.module.css';

const ModalWrapper = ({children, toggleDatepicker}) => {
  const ref = useRef();

  /* React hook to trigger provided callback, when user clicks outside modal content area */
  useOnClickOutside(ref, () => {
    toggleDatepicker(false);
  });
  return (
    <div ref={ref} className={classes.content}>
      {children}
    </div>
  );
};

ModalWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  /** Callback to toggle Datepicker visibility */
  toggleDatepicker: PropTypes.func.isRequired,
};

export default ModalWrapper;
