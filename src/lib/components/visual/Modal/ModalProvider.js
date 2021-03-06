import React, {useEffect, useRef, useState, Fragment} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {useThemeContext} from 'lib/features/theme';
import defaults from 'lib/utils/defaultTheme';
import classes from './ModalProvider.module.css';

const Modal = ({
  toggleDatepicker,
  children,
  isVisible,
  renderDatepickerAs,
  wrapModalWith,
}) => {
  const modalContainerRef = useRef();
  const [isNodeAttached, setIsNodeAttached] = useState(false);
  const Datepicker = renderDatepickerAs;
  const Wrapper = wrapModalWith;
  const theme = useThemeContext();

  /** Create modal container node */
  useEffect(() => {
    const propName = 'modalBgColor';
    const bgColor = theme[propName] || defaults[propName];
    if (isVisible && !isNodeAttached) {
      modalContainerRef.current = document.createElement('div');
      modalContainerRef.current.classList.add(classes.container);
      modalContainerRef.current.style.setProperty(`--${propName}`, bgColor);
      document.body.appendChild(modalContainerRef.current);
      setIsNodeAttached(true);
    }
    return () => {
      isNodeAttached && modalContainerRef.current.remove();
      isNodeAttached && setIsNodeAttached(false);
    };
  }, [isNodeAttached, isVisible, theme]);

  return (
    <Fragment>
      {children}
      {isVisible &&
        isNodeAttached &&
        ReactDOM.createPortal(
          <Wrapper toggleDatepicker={toggleDatepicker}>
            <Datepicker />
          </Wrapper>,
          modalContainerRef.current
        )}
    </Fragment>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  toggleDatepicker: PropTypes.func.isRequired,
  renderDatepickerAs: PropTypes.elementType.isRequired,
  wrapModalWith: PropTypes.elementType.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default Modal;
