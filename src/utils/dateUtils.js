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
} from 'date-fns/fp';

/**
 * Date union type may be Date or Unix timestamp
 * @typedef {(Date|number)} DateUnion
 */

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
