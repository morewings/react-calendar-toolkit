import React from 'react';
import * as moment from 'moment';
import 'moment/locale/ru';

// moment.locale('en-gb', {
//   week: {
//     dow: 1, // Monday is the first day of the week.
//   },
// });
moment.locale('ru');
// duminică to sâmbătă
console.log(moment.weekdays());
// locale aware: luni to duminică
console.log(moment.weekdays(true));
console.log(moment().startOf('isoWeek'));

const Calendar = props => {
  moment.weekdays(true);
  const dateObject = moment();
  const firstDay = dateObject.startOf('month').format('d');
  console.log(firstDay)
  return <div>Calendar</div>;
};

export default Calendar;
