/*eslint-disable*/
import React from 'react';

const Input = props => {
  const handleFocus = () => {
    props.onToggleDatepicker(true)
  }
  return (
    <input value={props.value} onFocus={handleFocus} type="text"/>
  )
};

export default Input;