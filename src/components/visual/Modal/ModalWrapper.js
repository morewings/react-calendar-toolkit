import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import useOnClickOutside from 'utils/useOnClickOutside';
import classes from './Modal.module.css';

const ModalWrapper = ({children, toggleDatepicker}) => {
  const ref = useRef();
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
  toggleDatepicker: PropTypes.func.isRequired,
};

export default ModalWrapper;
