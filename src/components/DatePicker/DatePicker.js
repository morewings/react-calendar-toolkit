/*eslint-disable*/
import React from 'react';
import * as moment from 'moment';
import 'moment/locale/ru';
import locale from 'date-fns/esm/locale/ru';

const weekdays = [...Array(7).keys()].map(i =>
  locale.localize.day(i, {width: 'short'})
);
console.log(weekdays);

// moment.locale('en-gb', {
//   week: {
//     dow: 1, // Monday is the first day of the week.
//   },
// });
moment.locale('ru');

const DatePicker = props => {
  const dateObject = moment();
  console.log(moment.weekdays(true));
  console.log(dateObject);
  const firstDay = dateObject.startOf('month').format('d');
  return (
    <div>
      Calendar
      {props.children}
    </div>
  );
};

export default DatePicker;
