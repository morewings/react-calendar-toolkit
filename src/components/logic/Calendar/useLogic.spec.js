import {renderHook, act} from '@testing-library/react-hooks';
import {checkIsSameDay} from 'utils/dateUtils';
import useLogic from './useLogic';

const today = new Date(2011, 10, 11).getTime(); // 11.11.2011
const yesterday = new Date(2011, 10, 10).getTime(); // 10.11.2011
const matchYesterday = jest.fn(
  ({date, precision}) => precision === 'day' && checkIsSameDay(date, yesterday)
);
const tomorrow = new Date(2011, 10, 12).getTime(); // 12.11.2011
const nextMonth = new Date(2011, 11, 11).getTime(); // 11.12.2011
const prevMonth = new Date(2011, 9, 11).getTime(); // 11.10.2011
const nextYear = new Date(2012, 10, 11).getTime(); // 11.11.2012
const prevYear = new Date(2010, 10, 11).getTime(); // 11.11.2010
const startYear = new Date(2011, 0, 1); // 01.01.2011
const startMonth = new Date(2011, 10, 1); // 01.11.2011
const endYear = new Date(2011, 11, 31); // 31.12.2011
const endMonth = new Date(2011, 10, 30); // 30.11.2011

const weekend = tomorrow;
const notWeekend = today;

const selectedDay = yesterday;
const notSelectedDay = tomorrow;
const selectedMonth = startMonth;
const notSelectedMonth = nextMonth;
const selectedYear = startYear;
const notSelectedYear = prevYear;

const matchTrue = jest.fn(() => true);

const defaultProps = {
  onDateSet: jest.fn(),
  todayTimestamp: today,
  selectedTimestamp: yesterday,
  visibleTimestamp: tomorrow,
  precision: 'day',
  startDate: startYear,
  endDate: endYear,
  disableDate: jest.fn(),
  highlightDate: jest.fn(),
  highlightWeekends: true,
};

describe('Calendar > useLogic ', () => {
  beforeEach(() => {
    defaultProps.onDateSet.mockClear();
    matchYesterday.mockClear();
    matchTrue.mockClear();
  });

  it('returns functions', () => {
    const {result} = renderHook(() => useLogic(defaultProps));
    expect(result.current).toMatchSnapshot();
  });

  describe('getIsDisabled', () => {
    it('returns false, if precision === `year`', () => {
      const props = {
        ...defaultProps,
        precision: 'year',
      };
      const {result} = renderHook(() => useLogic(props));
      expect(result.current.getIsDisabled(today)).toBe(false);
    });

    describe.each`
      precision  | date         | start         | end         | matcher           | expected
      ${'month'} | ${today}     | ${startYear}  | ${endYear}  | ${undefined}      | ${false}
      ${'month'} | ${nextYear}  | ${startYear}  | ${endYear}  | ${undefined}      | ${true}
      ${'month'} | ${prevYear}  | ${startYear}  | ${endYear}  | ${undefined}      | ${true}
      ${'day'}   | ${today}     | ${startMonth} | ${endMonth} | ${undefined}      | ${false}
      ${'day'}   | ${yesterday} | ${startMonth} | ${endMonth} | ${matchYesterday} | ${true}
      ${'day'}   | ${nextMonth} | ${startMonth} | ${endMonth} | ${matchYesterday} | ${true}
      ${'day'}   | ${prevMonth} | ${startMonth} | ${endMonth} | ${matchYesterday} | ${true}
    `(
      `checks if date is within provided range,`,
      ({precision, date, start, end, expected, matcher}) => {
        it(` if precision === ${precision}`, () => {
          const initialProps = {
            ...defaultProps,
            precision,
            startDate: start,
            endDate: end,
            expected,
            disableDate: matcher || defaultProps.disableDate,
          };
          const {result} = renderHook(props => useLogic(props), {
            initialProps,
          });
          expect(result.current.getIsDisabled(date)).toBe(expected);
          if (matcher) {
            expect(matcher).toHaveBeenCalledTimes(1);
            expect(matcher.mock.calls[0]).toMatchSnapshot();
          }
        });
      }
    );
  });

  describe.each`
    precision  | date        | matcher
    ${'year'}  | ${today}    | ${matchTrue}
    ${'month'} | ${today}    | ${matchTrue}
    ${'day'}   | ${today}    | ${matchTrue}
    ${'day'}   | ${tomorrow} | ${matchTrue}
  `('getIsHighlighted', ({precision, date, matcher}) => {
    it(`invokes matcher with arguments`, () => {
      const initialProps = {
        ...defaultProps,
        precision,
        highlightDate: matcher,
      };
      const {result} = renderHook(props => useLogic(props), {
        initialProps,
      });
      expect(result.current.getIsHighlighted(date)).toBe(true);
      expect(matcher).toHaveBeenCalledTimes(1);
      expect(matcher.mock.calls[0]).toMatchSnapshot();
    });
  });

  describe('handleDateSet', () => {
    it('calls `onDateSet` callback with date, if it is not disabled', () => {
      const {result} = renderHook(props => useLogic(props), {
        initialProps: defaultProps,
      });
      act(() => {
        result.current.handleDateSet(today);
      });
      expect(defaultProps.onDateSet).toHaveBeenCalledTimes(1);
      expect(defaultProps.onDateSet).toHaveBeenCalledWith(today);
    });

    it('does not call `onDateSet` callback with date, if it is disabled', () => {
      const {result} = renderHook(props => useLogic(props), {
        initialProps: {
          ...defaultProps,
          disableDate: ({date}) => date === today,
        },
      });
      act(() => {
        result.current.handleDateSet(today);
      });
      expect(defaultProps.onDateSet).not.toHaveBeenCalled();
    });

    describe.each`
      precision  | date          | highlightWeekends | expected
      ${'day'}   | ${notWeekend} | ${true}           | ${false}
      ${'day'}   | ${weekend}    | ${true}           | ${true}
      ${'day'}   | ${weekend}    | ${false}          | ${false}
      ${'month'} | ${weekend}    | ${true}           | ${false}
      ${'year'}  | ${weekend}    | ${true}           | ${false}
    `('getIsWeekend', ({precision, date, highlightWeekends, expected}) => {
      it('checks if date is weekend', () => {
        const {result} = renderHook(props => useLogic(props), {
          initialProps: {
            ...defaultProps,
            precision,
            highlightWeekends,
          },
        });
        expect(result.current.getIsWeekend(date)).toBe(expected);
      });
    });
  });

  describe.each`
    precision  | date         | expected
    ${'day'}   | ${yesterday} | ${true}
    ${'day'}   | ${nextMonth} | ${false}
    ${'month'} | ${yesterday} | ${false}
    ${'year'}  | ${yesterday} | ${false}
  `('getBelongsToSameMonth', ({precision, date, expected}) => {
    it('checks if day entry belongs to this calendar view', () => {
      const {result} = renderHook(props => useLogic(props), {
        initialProps: {
          ...defaultProps,
          precision,
        },
      });
      expect(result.current.getBelongsToSameMonth(date)).toBe(expected);
    });
  });

  describe.each`
    precision  | date                | expected
    ${'day'}   | ${selectedDay}      | ${true}
    ${'day'}   | ${notSelectedDay}   | ${false}
    ${'month'} | ${selectedDay}      | ${true}
    ${'month'} | ${notSelectedDay}   | ${true}
    ${'month'} | ${selectedMonth}    | ${true}
    ${'month'} | ${notSelectedMonth} | ${false}
    ${'year'}  | ${selectedDay}      | ${true}
    ${'year'}  | ${notSelectedDay}   | ${true}
    ${'year'}  | ${selectedMonth}    | ${true}
    ${'year'}  | ${notSelectedMonth} | ${true}
    ${'year'}  | ${selectedYear}     | ${true}
    ${'year'}  | ${notSelectedYear}  | ${false}
  `('getIsSelected', ({precision, date, expected}) => {
    it('checks if this date is selected using precision', () => {
      const {result} = renderHook(props => useLogic(props), {
        initialProps: {
          ...defaultProps,
          precision,
        },
      });
      expect(result.current.getIsSelected(date)).toBe(expected);
    });
  });

  describe.each`
    precision  | date                | expected
    ${'day'}   | ${today}            | ${true}
    ${'day'}   | ${yesterday}        | ${false}
    ${'month'} | ${today}            | ${true}
    ${'month'} | ${yesterday}        | ${true}
    ${'month'} | ${selectedMonth}    | ${true}
    ${'month'} | ${notSelectedMonth} | ${false}
    ${'year'}  | ${today}            | ${true}
    ${'year'}  | ${yesterday}        | ${true}
    ${'year'}  | ${selectedMonth}    | ${true}
    ${'year'}  | ${notSelectedMonth} | ${true}
    ${'year'}  | ${selectedYear}     | ${true}
    ${'year'}  | ${notSelectedYear}  | ${false}
  `('getIsCurrent', ({precision, date, expected}) => {
    it('checks if this date is current using precision', () => {
      const {result} = renderHook(props => useLogic(props), {
        initialProps: {
          ...defaultProps,
          precision,
        },
      });
      expect(result.current.getIsCurrent(date)).toBe(expected);
    });
  });
});
