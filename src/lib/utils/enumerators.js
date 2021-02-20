import {
  startOfYear,
  getYear,
  getHours as getHourValue,
  getMinutes as getMinuteValue,
  addYears,
  addDays,
  toDate,
  differenceInDays,
  endOfWeekWithOptions,
  startOfWeekWithOptions,
  getDate,
  startOfDay,
  endOfDay,
  min,
  max,
  eachHourOfInterval,
  startOfHour,
  endOfHour,
  isBefore,
  addMinutes,
} from 'date-fns/fp';
import {addMonth, ceilMonth, floorMonth} from 'lib/utils/dateUtils';
import curry from 'lib/utils/curry';
import getDaytimeLabels from 'lib/utils/getDaytimeLabels';

/**
 * Item name
 * @typedef {Object} ItemName
 * @property {string} [narrow] - Narrow name of item - 'S'
 * @property {string} [short] - Short name of item - 'Su'
 * @property {string} [abbreviated] - Abbreviated name of item - 'Sun'
 * @property {string} [wide] - Full name of item - 'Sunday'
 * @property {number} [numeric] - Numeric name of item - 1
 */

/**
 * Item description
 * @typedef {Object} ItemDescription
 * @property {ItemName} name - Item name vocabulary
 * @property {Date} date - starting date of the item
 */

/**
 * Date union type may be Date or Unix timestamp
 * @typedef {(Date|number)} DateUnion
 */

/**
 * @function
 * @name getWeekDayNames
 * @description Returns array of weekday names
 * @param {Object} locale - Date-fns locale object
 * @return {Array.<ItemName>}
 */
export const getWeekDayNames = locale =>
  [...Array(7).keys()].map(i => {
    const dayNumber =
      i + locale.options.weekStartsOn === 7
        ? 0
        : i + locale.options.weekStartsOn;
    return {
      short: locale.localize.day(dayNumber, {width: 'short'}),
      narrow: locale.localize.day(dayNumber, {width: 'narrow'}),
      abbreviated: locale.localize.day(dayNumber, {width: 'abbreviated'}),
      wide: locale.localize.day(dayNumber, {width: 'wide'}),
      numeric: i,
    };
  });

/**
 * @function
 * @name getYears
 * @description Returns collection year description objects in the provided range
 * @param {DateUnion} startDate - Start date
 * @param {DateUnion} endDate - End date
 * @return {Array.<ItemDescription>}
 */
const getYears = (startDate, endDate) => {
  const startYear = getYear(startDate);
  const endYear = getYear(endDate) + 1;
  const years = [...Array(endYear - startYear).keys()];
  return years.map((year, i) => ({
    name: {
      numeric: startYear + i,
    },
    date: addYears(i, startDate),
  }));
};

const getYearsCurried = curry(getYears);

export {getYearsCurried as getYears};

/**
 * @function
 * @name getMonths
 * @description Returns collection of month description objects based on provided date
 * @param {Object} locale - Date-fns locale object
 * @param {DateUnion} date - Date or Unix timestamp
 * @return {Array.<ItemDescription>}
 */
const getMonths = (locale, date) => {
  const year = startOfYear(date);
  const monthNames = [...Array(12).keys()].map(i => ({
    wide: locale.localize.month(i, {width: 'wide'}),
    abbreviated: locale.localize.month(i, {width: 'abbreviated'}),
    narrow: locale.localize.month(i, {width: 'narrow'}),
    numeric: i,
  }));
  return monthNames.map((name, i) => ({
    name,
    date: toDate(addMonth(year, i)),
  }));
};

const getMonthsCurried = curry(getMonths);

export {getMonthsCurried as getMonths};

/**
 * @function
 * @name getDays
 * @description Returns collection of day description objects based on provided date
 * @param {Object} locale - Date-fns locale object
 * @param {DateUnion} timestamp - Unix timestamp or Date object
 * @return {Array.<ItemDescription>}
 */
const getDays = (locale, timestamp) => {
  const monthStart = floorMonth(timestamp);
  const monthEnd = ceilMonth(monthStart);
  const startDate = startOfWeekWithOptions({locale}, monthStart);
  const endDate = endOfWeekWithOptions({locale}, monthEnd);
  const cellLength = differenceInDays(startDate, endDate);
  return new Array(cellLength + 1).fill('').map((_, i) => ({
    date: addDays(i, startDate),
    name: {
      numeric: getDate(addDays(i, startDate)),
    },
  }));
};

const getDaysCurried = curry(getDays);

export {getDaysCurried as getDays};

/**
 * @function
 * @name getHours
 * @description Returns collection of hours Date objects based on provided date and interval
 * @param {Object} locale - Date-fns locale object
 * @param {DateUnion} timestamp - Unix timestamp or Date object
 * @param {DateUnion} startDate - Unix timestamp or Date object
 * @param {DateUnion} endDate - Unix timestamp or Date object
 * @return {Array.<ItemDescription>}
 */
export const getHours = (locale, timestamp, startDate, endDate) => {
  const {timeFormat, amLabel, pmLabel} = getDaytimeLabels(locale);
  const HALF_DAY = 12;
  const hourStart = max([startOfDay(timestamp), startDate]);
  const hourEnd = min([endOfDay(timestamp), endDate]);
  const checkIsAm = date => getHourValue(date) <= HALF_DAY;
  const getLocalizedHourName = date => {
    if (timeFormat === '24') {
      return getHourValue(date);
    }
    if (timeFormat === '12') {
      return checkIsAm(date)
        ? getHourValue(date)
        : getHourValue(date) - HALF_DAY;
    }
    return null;
  };
  return eachHourOfInterval({start: hourStart, end: hourEnd}).map(date => ({
    date,
    name: getLocalizedHourName(date),
    daytimeLabel: checkIsAm(date) ? amLabel : pmLabel,
  }));
};

export const getMinutes = (timestamp, startDate, endDate) => {
  const minuteStart = max([startOfHour(timestamp), startDate]);
  const minuteEnd = min([endOfHour(timestamp), endDate]);
  const result = [];
  let minute = minuteStart;
  while (isBefore(minuteEnd, minute)) {
    // eslint-disable-next-line fp/no-mutating-methods
    result.push(minute);
    // eslint-disable-next-line fp/no-mutation
    minute = addMinutes(1, minute);
  }
  return result.map(date => ({
    date,
    name: getMinuteValue(date),
  }));
};
