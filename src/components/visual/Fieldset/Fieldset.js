/*eslint-disable*/
import React from 'react';
import './Fieldset.scss'

const Fieldset = props => {
  return (
    <fieldset className={props.className}>{props.children}</fieldset>
  )
};

Fieldset.defaultProps = {
  className: 'datepicker-fieldset'
};

export default Fieldset;