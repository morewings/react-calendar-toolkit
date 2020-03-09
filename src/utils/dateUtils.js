import {
  formatWithOptions,
  isSameMonth,
  isSameYear,
  toDate,
  getTime,
  addMonths,
  isWithinInterval,
  isWeekend,
  isSameDay,
  getDate,
  startOfMonth,
  endOfMonth,
} from 'date-fns/fp';

/**
 * Unix timestamp
 * @typedef {number} UnixTimestamp
 */

/**
 * Date union type may be Date or Unix timestamp
 * @typedef {(Date|UnixTimestamp)} DateUnion
 */

/**
 * @function
 * @name formatDateWithLocale
 * @description Returns formatted date
 * @param {Object} options - Options object with locale
 * @param {string} pattern - Formatting pattern
 * @param {Date} date - Date object to apply format
 * @return {string} Formatted date
 */
export const formatDateWithLocale = formatWithOptions;

/**
 * @function
 * @name checkIsSameMonth
 * @description Checks if two dates belong to the same month
 * @param {DateUnion} dateLeft - Date to check
 * @param {DateUnion} dateRight - Date to check
 * @return {boolean}
 */
export const checkIsSameMonth = (dateLeft, dateRight) =>
  isSameMonth(dateLeft, dateRight);

/**
 * @function
 * @name checkIsSameYear
 * @description Checks if two dates belong to the same year
 * @param {DateUnion} dateLeft - Date to check
 * @param {DateUnion} dateRight - Date to check
 * @return {boolean}
 */
export const checkIsSameYear = (dateLeft, dateRight) =>
  isSameYear(dateLeft, dateRight);

/**
 * @function
 * @name checkIsSameDay
 * @description Checks if two dates belong to the same day
 * @param {DateUnion} dateLeft - Date to check
 * @param {DateUnion} dateRight - Date to check
 * @return {boolean}
 */
export const checkIsSameDay = (dateLeft, dateRight) =>
  isSameDay(dateLeft, dateRight);

/**
 * @function
 * @name convertToTimestamp
 * @description Converts provided date to Unix timestamp
 * @param {Date} date - Date to convert
 * @return {UnixTimestamp} Unix timestamp
 */
export const convertToTimestamp = date => getTime(date);

/**
 * @function
 * @name convertToDate
 * @description Converts provided Unix timestamp to Date object
 * @param {number} timestamp - Date to convert
 * @return {Date}
 */
export const convertToDate = timestamp => toDate(timestamp);

/**
 * @function
 * @name convertToDayOfMonth
 * @description Converts provided Unix timestamp or to day of month number
 * @param {DateUnion} timestamp - Timestamp or Date to convert
 * @return {number} Day of the month
 */
export const convertToDayOfMonth = timestamp => getDate(timestamp);

/**
 * @function
 * @name incrementMonth
 * @description Adds months
 * @param {DateUnion} date - Date or Unix timestamp
 * @param {number} amount - Amount of months to add
 * @return {UnixTimestamp}
 */
export const incrementMonth = (date, amount) =>
  getTime(addMonths(amount, date));

/**
 * @function
 * @name decrementMonth
 * @description Subtracts month
 * @param {DateUnion} date - Date or Unix timestamp to substract
 * @param {number} amount - Amount of months to substract
 * @return {UnixTimestamp}
 */
export const decrementMonth = (date, amount) => incrementMonth(date, -amount);

/**
 * @function
 * @name checkIsWithinInterval
 * @description Checks if date belongs to the interval
 * @typedef {Object} Interval
 * @property {Date} start - Start of interval
 * @property {Date} end - End of interval
 * @param {DateUnion} date - Date to check
 * @param {Interval} interval - Time rang to check
 * @return {boolean}
 */
export const checkIsWithinInterval = (interval, date) =>
  isWithinInterval(interval, date);

/**
 * @function
 * @name checkIsWeekend
 * @description Checks if date belongs to the weekend
 * @param {DateUnion} date - Date to check
 * @return {boolean}
 */
export const checkIsWeekend = date => isWeekend(date);

/**
 * @function
 * @name matchDatesWithPrecision
 * @description Checks if dates are the same with given precision, eg belong to same day|month|year
 * @param {string} precision - Date to check
 * @param {DateUnion} dateLeft - Date to check
 * @param {DateUnion} dateRight - Date to check
 * @return {boolean}
 */
export const matchDatesWithPrecision = (precision, dateLeft, dateRight) =>
  ({
    day: checkIsSameDay,
    month: checkIsSameMonth,
    year: checkIsSameYear,
  }[precision](dateLeft, dateRight));

/**
 * @function
 * @name ceilMonth
 * @description Gets end of month date
 * @param {DateUnion} date
 * @return {Date}
 */
export const ceilMonth = endOfMonth;

/**
 * @function
 * @name floorMonth
 * @description Gets start of month date
 * @param {DateUnion} date
 * @return {Date}
 */
export const floorMonth = startOfMonth;
