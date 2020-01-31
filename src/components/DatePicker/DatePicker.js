/*eslint-disable*/
import React from 'react';
import DayGrid from 'components/DayGrid';



// moment.locale('en-gb', {
//   week: {
//     dow: 1, // Monday is the first day of the week.
//   },
// });

const DatePicker = props => {
  return (
    <div>
      Calendar
      <DayGrid></DayGrid>
      {props.children}
    </div>
  );
};

export default DatePicker;
