import React, {useEffect, useRef, useState, useLayoutEffect} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {setCSSVariable, removeCSSVariable} from 'utils/themeContext';
import defaults from 'utils/defaultTheme';
import classes from './Modal.module.css';

const Modal = ({
  toggleDatepicker,
  children,
  modalClassName,
  wrapperClassName,
}) => {
  const modalWrapperRef = useRef();
  const modalContentRef = useRef();
  const [isNodeAttached, setIsNodeAttached] = useState(false);
  /** Create modal container node */
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

  /** Add outside click handler */
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

  /** Set css variables */
  useLayoutEffect(() => {
    const varName = '--modalBgColor';
    isNodeAttached &&
      setCSSVariable(modalWrapperRef.current, varName, defaults[varName]);
    return () => {
      isNodeAttached && removeCSSVariable(modalWrapperRef.current, varName);
    };
  }, [isNodeAttached]);

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
