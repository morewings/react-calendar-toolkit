/*eslint-disable*/
import React from 'react';
import './DayWrapper.scss'

const DayWrapper = props => {
  return (
    <div  className="days-wrapper">{props.children}</div>
  )
};

export default DayWrapper