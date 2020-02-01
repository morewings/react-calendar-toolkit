import locale from 'date-fns/esm/locale/ru';
import {
  addDays,
  differenceInDays,
  endOfMonth,
  endOfWeek,
  startOfMonth,
  startOfWeek,
  getDate,
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
