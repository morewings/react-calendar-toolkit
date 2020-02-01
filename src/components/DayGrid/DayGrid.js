import React, {Fragment} from 'react';
import WeekDays from './WeekDays';
import Days from './Days';
import './DayGrid.scss';

const DayGrid = props => (
  <Fragment>
    <WeekDays />
    <Days />
  </Fragment>
);

export default DayGrid;
