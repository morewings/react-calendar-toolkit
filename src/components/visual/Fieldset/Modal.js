import React, {useEffect, useRef, useState} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classes from './Modal.module.scss';

const Modal = ({
  toggleDatepicker,
  children,
  modalClassName,
  wrapperClassName,
}) => {
  const modalWrapperRef = useRef();
  const modalContentRef = useRef();
  const [isNodeAttached, setIsNodeAttached] = useState(false);
  useEffect(() => {
    if (!isNodeAttached) {
      modalWrapperRef.current = document.createElement('div');
      modalWrapperRef.current.classList.add(wrapperClassName);
      document.body.appendChild(modalWrapperRef.current);
      setIsNodeAttached(true);
    }
    return () => {
      isNodeAttached && modalWrapperRef.current.remove();
    };
  }, [isNodeAttached, wrapperClassName]);
  useEffect(() => {
    const handleClick = event => {
      const isModalContent = node => modalContentRef.current.contains(node);
      if (!isModalContent(event.target)) {
        toggleDatepicker(false);
      }
    };
    document.addEventListener('mousedown', handleClick, false);
    return () => {
      document.removeEventListener('mousedown', handleClick, false);
    };
  }, [isNodeAttached, toggleDatepicker]);
  return isNodeAttached
    ? ReactDOM.createPortal(
        <div ref={modalContentRef} className={modalClassName}>
          {children}
        </div>,
        modalWrapperRef.current
      )
    : null;
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  toggleDatepicker: PropTypes.func.isRequired,
  wrapperClassName: PropTypes.string,
  modalClassName: PropTypes.string,
};

Modal.defaultProps = {
  wrapperClassName: classes.container,
  modalClassName: classes.content,
  placement: '',
};

export default Modal;
