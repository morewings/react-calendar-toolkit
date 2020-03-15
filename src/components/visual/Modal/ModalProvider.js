import React, {useEffect, useRef, useState, Fragment} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import useOnClickOutside from 'utils/useOnClickOutside';
import {setCSSVariable, useThemeContext} from 'utils/themeContext';
import defaults from 'utils/defaultTheme';
import classes from './Modal.module.css';

const Modal = ({toggleDatepicker, children, isVisible, renderDatePickerAs}) => {
  const modalWrapperRef = useRef();
  const modalContentRef = useRef();
  const [isNodeAttached, setIsNodeAttached] = useState(false);
  const Datepicker = renderDatePickerAs;
  const theme = useThemeContext();

  /** Create modal container node */
  useEffect(() => {
    const propName = '--modalBgColor';
    const bgColor = theme[propName] || defaults[propName];
    if (isVisible && !isNodeAttached) {
      modalWrapperRef.current = document.createElement('div');
      modalWrapperRef.current.classList.add(classes.container);
      setCSSVariable(modalWrapperRef.current, propName, bgColor);
      document.body.appendChild(modalWrapperRef.current);
      setIsNodeAttached(true);
    }
    return () => {
      isNodeAttached && modalWrapperRef.current.remove();
      isNodeAttached && setIsNodeAttached(false);
    };
  }, [isNodeAttached, isVisible, theme]);

  useOnClickOutside(modalContentRef, () => {
    toggleDatepicker(false);
  });

  return (
    <Fragment>
      {children}
      {isVisible &&
        isNodeAttached &&
        ReactDOM.createPortal(
          <div ref={modalContentRef} className={classes.content}>
            <Datepicker />
          </div>,
          modalWrapperRef.current
        )}
    </Fragment>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  toggleDatepicker: PropTypes.func.isRequired,
  renderDatePickerAs: PropTypes.elementType.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default Modal;
