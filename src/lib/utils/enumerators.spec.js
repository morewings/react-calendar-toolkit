import enLocale from 'date-fns/locale/en-US';
import ruLocale from 'date-fns/locale/ru';
import {getWeekDayNames, getYears, getMonths, getDays} from './enumerators';

const startDate = new Date('1999-01-20T00:00:00.000+01:00'); // 20.01.1999
const endDate = new Date('2020-01-20T00:00:00.000+01:00'); // 20.01.2020

describe('getWeekDayNames', () => {
  it('returns collection of weekday names from locale', () => {
    expect(getWeekDayNames(enLocale)).toMatchSnapshot();
    expect(getWeekDayNames(ruLocale)).toMatchSnapshot();
  });
});

describe('getYears', () => {
  it('returns collection of year dates and numeric `1999` values', () => {
    expect(getYears(startDate, endDate)).toMatchSnapshot();
    expect(getYears(startDate.getTime(), endDate.getTime())).toMatchSnapshot();
  });
});

describe('getMonths', () => {
  it('returns collection of month names and date from locale', () => {
    expect(getMonths(enLocale, startDate)).toMatchSnapshot();
    expect(getMonths(enLocale, startDate.getTime())).toMatchSnapshot();
    expect(getMonths(ruLocale, startDate)).toMatchSnapshot();
    expect(getMonths(ruLocale, startDate.getTime())).toMatchSnapshot();
  });
});

describe('getDays', () => {
  it('returns collection of day dates and numeric values for calendar month (starting from specified week start) of provided date', () => {
    expect(getDays(enLocale, startDate)).toMatchSnapshot();
    expect(getDays(enLocale, startDate.getTime())).toMatchSnapshot();
    expect(getDays(ruLocale, startDate)).toMatchSnapshot();
    expect(getDays(ruLocale, startDate.getTime())).toMatchSnapshot();
  });
});
