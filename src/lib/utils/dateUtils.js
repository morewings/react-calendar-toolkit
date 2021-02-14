import {
  formatWithOptions,
  isSameMonth,
  isSameYear,
  toDate,
  getTime,
  addMonths,
  addDays,
  addYears,
  isWithinInterval,
  isWeekend,
  isSameDay,
  isSameHour,
  getDate,
  startOfMonth,
  endOfMonth,
} from 'date-fns/fp';
import compose from 'lib/utils/compose';

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
export const checkIsSameMonth = isSameMonth;

/**
 * @function
 * @name checkIsSameYear
 * @description Checks if two dates belong to the same year
 * @param {DateUnion} dateLeft - Date to check
 * @param {DateUnion} dateRight - Date to check
 * @return {boolean}
 */
export const checkIsSameYear = isSameYear;

/**
 * @function
 * @name checkIsSameDay
 * @description Checks if two dates belong to the same day
 * @param {DateUnion} dateLeft - Date to check
 * @param {DateUnion} dateRight - Date to check
 * @return {boolean}
 */
export const checkIsSameDay = isSameDay;

/**
 * @function
 * @name checkIsSameHour
 * @description Checks if two dates belong to the same hour
 * @param {DateUnion} dateLeft - Date to check
 * @param {DateUnion} dateRight - Date to check
 * @return {boolean}
 */
export const checkIsSameHour = isSameHour;

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
 * @description Converts provided Unix timestamp or Date to day of month number
 * @param {DateUnion} timestamp - Timestamp or Date to convert
 * @return {number} Day of the month
 */
export const convertToDayOfMonth = timestamp => getDate(timestamp);

/**
 * @function
 * @name checkIsWithinInterval
 * @description Checks if date belongs to the interval
 * @typedef {Object} Interval
 * @property {Date} start - Start of interval
 * @property {Date} end - End of interval
 * @param {DateUnion} date - Date to check
 * @param {Interval} interval - Time range to check
 * @return {boolean}
 */
export const checkIsWithinInterval = isWithinInterval;

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

/**
 * @function
 * @name addMonth
 * @description Adds months
 * @param {DateUnion} date - Date or Unix timestamp
 * @param {number} amount - Amount of months to add
 * @return {UnixTimestamp}
 */
export const addMonth = (date, amount) =>
  compose(convertToTimestamp, addMonths)(amount, date);

/**
 * @function
 * @name subMonth
 * @description Subtracts months
 * @param {DateUnion} date - Date or Unix timestamp
 * @param {number} amount - Amount of months to subtract
 * @return {UnixTimestamp}
 */
export const subMonth = (date, amount) =>
  compose(convertToTimestamp, addMonths)(-amount, date);

/**
 * @function
 * @name addDay
 * @description Adds days
 * @param {DateUnion} date - Date or Unix timestamp
 * @param {number} amount - Amount of days to add
 * @return {UnixTimestamp}
 */
export const addDay = (date, amount) =>
  compose(convertToTimestamp, addDays)(amount, date);

/**
 * @function
 * @name subDay
 * @description Subtracts days
 * @param {DateUnion} date - Date or Unix timestamp
 * @param {number} amount - Amount of days to subtract
 * @return {UnixTimestamp}
 */
export const subDay = (date, amount) =>
  compose(convertToTimestamp, addDays)(-amount, date);

/**
 * @function
 * @name addYear
 * @description Adds years
 * @param {DateUnion} date - Date or Unix timestamp
 * @param {number} amount - Amount of years to add
 * @return {UnixTimestamp}
 */
export const addYear = (date, amount) =>
  compose(convertToTimestamp, addYears)(amount, date);

/**
 * @function
 * @name subYear
 * @description Subtracts years
 * @param {DateUnion} date - Date or Unix timestamp
 * @param {number} amount - Amount of days to subtract
 * @return {UnixTimestamp}
 */
export const subYear = (date, amount) =>
  compose(convertToTimestamp, addYears)(-amount, date);
