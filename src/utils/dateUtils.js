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
  startOfYear,
  parse,
  addYears,
  isSameYear,
} from 'date-fns';

export const getWeekDayNames = () =>
  [...Array(7).keys()].map(i => locale.localize.day(i, {width: 'short'}));

export const getMonthNames = () =>
  [...Array(12).keys()].map(i => locale.localize.month(i, {width: 'wide'}));

export const getMonths = date => {
  const year = startOfYear(date);
  return getMonthNames().map((name, i) => ({
    name,
    date: toDate(getAddMonth(year, i)), // TODO: fix this shit, double date conversion
  }));
};

export const parseYearNumber = yearNumber =>
  parse(yearNumber, 'y', new Date(1900, 0, 1));

export const getYears = (startYear = 1900, endYear = 2050) => {
  const startDate = parseYearNumber(startYear);
  const years = [...Array(endYear - startYear).keys()];
  return years.map((year, i) => ({
    yearNumber: startYear + i,
    date: addYears(startDate, i),
  }));
};

export const getMonthDays = timestamp => {
  const monthStart = startOfMonth(timestamp);
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

export const getIsSameYear = (yearLeft, yearRight) =>
  isSameYear(yearLeft, yearRight);

export const getIsSameDay = (dateLeft, dateRight) =>
  isSameDay(dateLeft, dateRight);

export const getFormattedDate = (template, date) => format(date, template);

export {getUnixTime} from 'date-fns';

export {getTime, toDate};

export const getAddMonth = (date, amount) =>
  getTime(addMonths(toDate(date), amount)); // TODO: fix this double date

export const getSubMonth = (date, amount) => getAddMonth(date, -amount);
