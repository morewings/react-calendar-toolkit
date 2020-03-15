import React, {useEffect, useRef, useState, Fragment} from 'react';
import PropTypes from 'prop-types';
import {useThemePostCSS} from 'utils/themeContext';
import useOnClickOutside from 'utils/useOnClickOutside';
import classes from './Modal.module.css';

const ModalWrapper = ({children, toggleDatepicker}) => {
  const ref = useRef();
  useOnClickOutside(ref, () => {
    toggleDatepicker(false);
  });
  // useThemePostCSS(ref.current);
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
