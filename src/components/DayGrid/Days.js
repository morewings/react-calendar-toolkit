/*eslint-disable*/
import React, {Fragment} from 'react'
import {getMonthDays} from 'utils/dateUtils';
import Day from './Day';
import './Days.scss';

const Days = props => {
  const monthDays = getMonthDays(new Date())
  return (
    <div className="days-wrapper">
      {
        monthDays.map(({dayNumber, date}, i) => {
          return (
            <Day dayNumber={dayNumber} date={date} key={i} />
          )
        })
      }
    </div>
  )
}

export default Days