import {toDate} from 'utils/dateUtils';

export const getDate = state => {
  // console.log('selector', state.datepicker.date);
  // console.log('selector toDate1', toDate(state.datepicker.date));
  // console.log('selector toDate2', toDate(1580937483586));
  // console.log('selector toDate3', new Date(1580937483586));
  // console.log('selector toDate5', new Date(2020, 1, 1));
  return state.datepicker.date;
};
