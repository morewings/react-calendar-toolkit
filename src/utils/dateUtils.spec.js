import enLocale from 'date-fns/locale/en-US';
import {
  formatDateWithLocale,
  checkIsSameMonth,
  checkIsSameYear,
  checkIsSameDay,
  convertToTimestamp,
  convertToDate,
  convertToDayOfMonth,
  incrementMonth,
  decrementMonth,
  checkIsWithinInterval,
  checkIsWeekend,
  matchDatesWithPrecision,
  ceilMonth,
  floorMonth,
} from './dateUtils';

const date = new Date('2020-01-20T00:00:00.000'); // 20.01.2020

const saturday = new Date('2020-01-11T00:00:00.000'); // 11.01.2020
const sunday = new Date('2020-01-12T00:00:00.000'); // 12.01.2020
const monday = new Date('2020-01-13T00:00:00.000'); // 13.01.2020
const tuesday = new Date('2020-01-14T00:00:00.000'); // 14.01.2020
const wednesday = new Date('2020-01-15T00:00:00.000'); // 15.01.2020
const thursday = new Date('2020-01-16T00:00:00.000'); // 16.01.2020
const friday = new Date('2020-01-17T00:00:00.000'); // 17.01.2020

const sameDay = [
  new Date('2020-01-20T00:00:00.000'),
  new Date('2020-01-20T11:00:00.000'),
];

const notSameDay = [
  new Date('2020-01-20T00:00:00.000'),
  new Date('2020-01-21T00:00:00.000'),
];

const sameMonth = [
  new Date('2020-01-01T00:00:00.000'),
  new Date('2020-01-20T00:00:00.000'),
];

const notSameMonth = [
  new Date('2020-01-20T00:00:00.000'),
  new Date('2020-02-20T00:00:00.000'),
];

const sameYear = [
  new Date('2020-01-01T00:00:00.000'),
  new Date('2020-11-20T00:00:00.000'),
];

const notSameYear = [
  new Date('2020-01-20T00:00:00.000'),
  new Date('2021-02-20T00:00:00.000'),
];

const validInterval = {
  start: new Date('2019-01-20T00:00:00.000'),
  end: new Date('2021-01-20T00:00:00.000'),
};

const invalidInterval = {
  start: new Date('2021-01-20T00:00:00.000'),
  end: new Date('2022-01-20T00:00:00.000'),
};

describe('formatDateWithLocale', () => {
  const locale = {locale: enLocale};
  const pattern = `yyyy-MM-dd'T'HH:mm:ss.SSSxxx`;
  const expected = '2020-01-20T00:00:00.000+00:00';

  it('returns formatted date', () => {
    expect(formatDateWithLocale(locale, pattern, date)).toBe(expected);
    expect(formatDateWithLocale(locale, pattern)(date)).toBe(expected);
    expect(formatDateWithLocale(locale)(pattern)(date)).toBe(expected);
  });
});

describe('checkIsSameMonth', () => {
  it('returns `true`, if provided dates belong to the same month', () => {
    const [leftDate, rightDate] = sameMonth;
    expect(checkIsSameMonth(leftDate, rightDate)).toBe(true);
    expect(checkIsSameMonth(leftDate.getTime(), rightDate.getTime())).toBe(
      true
    );
  });
  it('returns `false`, if provided dates do not belong to the same month', () => {
    const [leftDate, rightDate] = notSameMonth;
    expect(checkIsSameMonth(leftDate, rightDate)).toBe(false);
    expect(checkIsSameMonth(leftDate.getTime(), rightDate.getTime())).toBe(
      false
    );
  });
});

describe('checkIsSameYear', () => {
  it('returns `true`, if provided dates belong to the same year', () => {
    const [leftDate, rightDate] = sameYear;
    expect(checkIsSameYear(leftDate, rightDate)).toBe(true);
    expect(checkIsSameYear(leftDate.getTime(), rightDate.getTime())).toBe(true);
  });
  it('returns `false`, if provided dates do not belong to the same year', () => {
    const [leftDate, rightDate] = notSameYear;
    expect(checkIsSameYear(leftDate, rightDate)).toBe(false);
    expect(checkIsSameYear(leftDate.getTime(), rightDate.getTime())).toBe(
      false
    );
  });
});

describe('checkIsSameDay', () => {
  it('returns `true`, if provided dates belong to the same day', () => {
    const [leftDate, rightDate] = sameDay;
    expect(checkIsSameDay(leftDate, rightDate)).toBe(true);
    expect(checkIsSameDay(leftDate.getTime(), rightDate.getTime())).toBe(true);
  });
  it('returns `false`, if provided dates do not belong to the same day', () => {
    const [leftDate, rightDate] = notSameDay;
    expect(checkIsSameDay(leftDate, rightDate)).toBe(false);
    expect(checkIsSameDay(leftDate.getTime(), rightDate.getTime())).toBe(false);
  });
});

describe('convertToTimestamp', () => {
  it('converts provided date to timestamp', () => {
    expect(convertToTimestamp(date)).toBe(date.getTime());
  });
});

describe('convertToDate', () => {
  it('converts provided timestamp to date', () => {
    const timestamp = date.getTime();
    expect(convertToDate(timestamp)).toStrictEqual(date);
  });
});

describe('convertToDayOfMonth', () => {
  it('converts provided timestamp to date', () => {
    const timestamp = date.getTime();
    expect(convertToDayOfMonth(date)).toBe(20);
    expect(convertToDayOfMonth(timestamp)).toBe(20);
  });
});

describe('incrementMonth', () => {
  it('adds specified amount of months to provided date or timestamp and returns timestamp', () => {
    const timestamp = date.getTime();
    const firstExpected = 1582156800000;
    const secondExpected = 1587340800000;
    expect(incrementMonth(date, 1)).toBe(firstExpected);
    expect(incrementMonth(timestamp, 1)).toBe(firstExpected);
    expect(incrementMonth(date, 3)).toBe(secondExpected);
    expect(incrementMonth(timestamp, 3)).toBe(secondExpected);
  });
});

describe('decrementMonth', () => {
  it('adds specified amount of months to provided date or timestamp and returns timestamp', () => {
    const timestamp = date.getTime();
    const firstExpected = 1576800000000;
    const secondExpected = 1571529600000;
    expect(decrementMonth(date, 1)).toBe(firstExpected);
    expect(decrementMonth(timestamp, 1)).toBe(firstExpected);
    expect(decrementMonth(date, 3)).toBe(secondExpected);
    expect(decrementMonth(timestamp, 3)).toBe(secondExpected);
  });
});

describe('checkIsWithinInterval', () => {
  it('returns `true`, if provided date or timestamp is within provided Interval', () => {
    const timestamp = date.getTime();
    expect(checkIsWithinInterval(validInterval, date)).toBe(true);
    expect(checkIsWithinInterval(validInterval, timestamp)).toBe(true);
  });
  it('returns `false`, if provided date or timestamp is out of provided Interval', () => {
    const timestamp = date.getTime();
    expect(checkIsWithinInterval(invalidInterval, date)).toBe(false);
    expect(checkIsWithinInterval(invalidInterval, timestamp)).toBe(false);
  });
});

describe.each`
  weekDay      | expected
  ${saturday}  | ${true}
  ${sunday}    | ${true}
  ${monday}    | ${false}
  ${tuesday}   | ${false}
  ${wednesday} | ${false}
  ${thursday}  | ${false}
  ${friday}    | ${false}
`('checkIsWeekend', ({weekDay, expected}) => {
  test(`returns 'true', when provided date or timestamp is Saturday or Sunday`, () => {
    expect(checkIsWeekend(weekDay)).toBe(expected);
    expect(checkIsWeekend(weekDay.getTime())).toBe(expected);
  });
});

describe.each`
  precision  | dates           | expected
  ${'day'}   | ${sameDay}      | ${true}
  ${'day'}   | ${notSameDay}   | ${false}
  ${'month'} | ${sameMonth}    | ${true}
  ${'month'} | ${notSameMonth} | ${false}
  ${'year'}  | ${sameYear}     | ${true}
  ${'year'}  | ${notSameYear}  | ${false}
`('matchDatesWithPrecision', ({precision, dates, expected}) => {
  test(`returns 'true', when provided date or timestamp is Saturday or Sunday`, () => {
    const [dateLeft, dateRight] = dates;
    expect(matchDatesWithPrecision(precision, dateLeft, dateRight)).toBe(
      expected
    );
    expect(
      matchDatesWithPrecision(
        precision,
        dateLeft.getTime(),
        dateRight.getTime()
      )
    ).toBe(expected);
  });
});

describe('ceilMonth', () => {
  it('returns last Date of month provided value belongs', () => {
    const value = new Date('2020-01-12T00:00:00.000'); // 12.01.2020
    const expected = new Date('2020-01-31T23:59:59.999Z'); // 31.01.2020
    expect(ceilMonth(value)).toStrictEqual(expected);
    expect(ceilMonth(value.getTime())).toStrictEqual(expected);
  });
});

describe('floorMonth', () => {
  it('returns first Date of month provided value belongs', () => {
    const value = new Date('2020-01-12T00:00:00.000'); // 12.01.2020
    const expected = new Date('2020-01-01T00:00:00.000Z'); // 1.01.2020
    expect(floorMonth(value)).toStrictEqual(expected);
    expect(floorMonth(value.getTime())).toStrictEqual(expected);
  });
});
