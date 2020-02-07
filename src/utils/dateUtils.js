import locale from 'date-fns/esm/locale/ru';
import {
  addDays,
  differenceInDays,
  endOfMonth,
  endOfWeek,
  startOfMonth,
  startOfWeek,
  getDate,
  isSameMonth,
  isSameDay,
  format,
  addMonths,
  getTime,
  toDate,
} from 'date-fns';

export const getWeekDayNames = () =>
  [...Array(7).keys()].map(i => locale.localize.day(i, {width: 'short'}));

export const getMonthDays = date => {
  const monthStart = startOfMonth(date);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const cellLength = differenceInDays(endDate, startDate);
  return new Array(cellLength + 1).fill('').map((_, i) => ({
    date: addDays(startDate, i),
    dayNumber: getDate(addDays(startDate, i)),
  }));
};

export const getIsSameMonth = (day, month) => {
  const monthStart = startOfMonth(month);
  return isSameMonth(day, monthStart);
};

export const getIsSameDay = (dateLeft, dateRight) =>
  isSameDay(dateLeft, dateRight);

export const getFormattedDate = (template, date) => format(date, template);

export {getUnixTime} from 'date-fns';

export {getTime, toDate};

export const getAddMonth = (date, amount) =>
  getTime(addMonths(toDate(date), amount));

export const getSubMonth = (date, amount) => getAddMonth(date, -amount);
