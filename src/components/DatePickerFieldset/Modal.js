import React, {useCallback, useEffect, useRef, useState} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Modal = props => {
  const modalWrapperRef = useRef();
  const modalContentRef = useRef();
  const [isNodeAttached, setIsNodeAttached] = useState(false);
  // const handleClick = useCallback(event => {
  //   console.log('click!');
  //   if (!modalContentRef.current.contains(event.target)) {
  //     console.log('outside!');
  //   }
  // }, [modalContentRef.current]);
  useEffect(() => {
    if (!isNodeAttached) {
      modalWrapperRef.current = document.createElement('div');
      modalWrapperRef.current.classList.add('modal-container');
      document.body.appendChild(modalWrapperRef.current);
      setIsNodeAttached(true);
    }
    return () => {
      isNodeAttached && modalWrapperRef.current.remove();
    };
  }, [isNodeAttached]);
  useEffect(() => {
    const handleClick = event => {
      if (!modalContentRef.current.contains(event.target)) {
        console.log('outside!');
      }
    };
    document.addEventListener('click', handleClick, false);
    return () => {
      document.removeEventListener('click', handleClick, false);
    };
  }, [isNodeAttached]);
  return isNodeAttached
    ? ReactDOM.createPortal(
        <div ref={modalContentRef} className="modal-content">
          {props.children}
        </div>,
        modalWrapperRef.current
      )
    : null;
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
