import {
  formatWithOptions,
  startOfYear,
  getYear,
  addYears,
  addDays,
  isSameMonth,
  isSameYear,
  toDate,
  getTime,
  addMonths,
  isWithinInterval,
  isWeekend,
  isSameDay,
  differenceInDays,
  endOfMonth,
  endOfWeekWithOptions,
  startOfMonth,
  startOfWeekWithOptions,
  getDate,
} from 'date-fns/fp';

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
 * Returns array of weekday names
 * @param {Object} locale - Locale object
 * @return {Array.<string>} Array of weekday names
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
 * Returns collection year description objects in the provided range
 * @param {Date} startDate - Start date
 * @param {Date} endDate - End date
 * @return {Array.<ItemDescription>} Array of year description objects
 */
export const getYears = (startDate, endDate) => {
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

/**
 * Returns collection of month description objects based on provided date
 * @param {Object} locale - Locale object
 * @param {Date} date - Selected date
 * @return {Array.<ItemDescription>} Array of month description objects
 */
export const getMonths = (locale, date) => {
  const year = startOfYear(date);
  const monthNames = [...Array(12).keys()].map(i => ({
    wide: locale.localize.month(i, {width: 'wide'}),
    abbreviated: locale.localize.month(i, {width: 'abbreviated'}),
    narrow: locale.localize.month(i, {width: 'narrow'}),
    numeric: i,
  }));
  return monthNames.map((name, i) => ({
    name,
    date: toDate(incrementMonth(year, i)),
  }));
};

/**
 * Returns collection of day description objects based on provided date
 * @param {Object} locale - Locale object
 * @param {DateUnion} timestamp - Unix timestamp or Date object
 * @return {Array.<ItemDescription>} Array of month description objects
 */
export const getDays = (locale, timestamp) => {
  const monthStart = startOfMonth(timestamp);
  const monthEnd = endOfMonth(monthStart);
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

/**
 * Returns formatted date
 * @param {Object} options - Options object with locale
 * @param {string} pattern - Formatting pattern
 * @param {Date} date - Date object to apply format
 * @return {string} Formatted date
 */
export const formatDateWithLocale = formatWithOptions;

/**
 * Checks if two dates belong to the same month
 * @param {DateUnion} dateLeft - Date to check
 * @param {DateUnion} dateRight - Date to check
 * @return {boolean} Result of the check
 */
export const checkIsSameMonth = (dateLeft, dateRight) =>
  isSameMonth(dateLeft, dateRight);

/**
 * Checks if two dates belong to the same year
 * @param {DateUnion} dateLeft - Date to check
 * @param {DateUnion} dateRight - Date to check
 * @return {boolean} Result of the check
 */
export const checkIsSameYear = (dateLeft, dateRight) =>
  isSameYear(dateLeft, dateRight);

/**
 * Checks if two dates belong to the same day
 * @param {DateUnion} dateLeft - Date to check
 * @param {DateUnion} dateRight - Date to check
 * @return {boolean} Result of the check
 */
export const checkIsSameDay = (dateLeft, dateRight) =>
  isSameDay(dateLeft, dateRight);

/**
 * Converts provided date to Unix timestamp
 * @param {Date} date - Date to convert
 * @return {number} Converted Unix timestamp
 */
export const convertToTimestamp = date => getTime(date);

/**
 * Converts provided Unix timestamp to Date object
 * @param {number} timestamp - Date to convert
 * @return {Date} Converted Date
 */
export const convertToDate = timestamp => toDate(timestamp);

/**
 * Converts provided Unix timestamp or to day of month number
 * @param {DateUnion} timestamp - Timestamp or Date to convert
 * @return {number} Day of the month
 */
export const convertToDayOfMonth = timestamp => getDate(timestamp);

/**
 * Adds months
 * @param {number} amount - Amount of months to add
 * @param {DateUnion} date - Date or Unix timestamp
 * @return {number} Result Unix timestamp
 */
export const incrementMonth = (date, amount) =>
  getTime(addMonths(amount, date));

/**
 * Substracts month
 * @param {DateUnion} date - Date or Unix timestamp to substract
 * @param {number} amount - Amount of months to substract
 * @return {number} Result Unix timestamp
 */
export const decrementMonth = (date, amount) => incrementMonth(date, -amount);

/**
 * Checks if date belongs to the interval
 * @typedef {Object} Interval
 * @property {Date} start - Start of interval
 * @property {Date} end - End of interval
 * @param {DateUnion} date - Date to check
 * @param {Interval} interval - Time rang to check
 * @return {boolean} Result of check
 */
export const checkIsWithinInterval = (interval, date) =>
  isWithinInterval(interval, date);

/**
 * Checks if date belongs to the weekend
 * @param {DateUnion} date - Date to check
 * @return {boolean} Result of check
 */
export const checkIsWeekend = date => isWeekend(date);
