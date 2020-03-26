import React from 'react';
import {render} from '@testing-library/react';
import {DatepickerMockProvider as Provider} from 'utils/testProvider';
import customLocale from 'date-fns/locale/ru';
import {
  checkIsSameDay,
  checkIsSameMonth,
  checkIsSameYear,
} from 'utils/dateUtils';
import Calendar from './Calendar';

const today = new Date(2011, 10, 11).getTime(); // 11.11.2011
const yesterday = new Date(2011, 10, 10).getTime(); // 10.11.2011
const matchYesterday = ({date, precision}) =>
  precision === 'day' && checkIsSameDay(date, yesterday);
const tomorrow = new Date(2011, 10, 12).getTime(); // 12.11.2011
const nextMonth = new Date(2011, 11, 11).getTime(); // 11.12.2011
const matchNextMonth = ({date, precision}) =>
  precision === 'month' && checkIsSameMonth(date, nextMonth);
const nextYear = new Date(2012, 10, 11).getTime(); // 11.11.2012
const matchNextYear = ({date, precision}) =>
  precision === 'year' && checkIsSameYear(date, nextYear);
const startDate = new Date(2000, 11, 12); // 12.12.2000
const endDate = new Date(2022, 11, 12); // 12.12.2022

const MockComponent = jest.fn(() => <div>MockComponent</div>);

const MockWrapper = jest.fn(({children}) => (
  <div data-testid="wrapper">{children}</div>
));

const renderWithProviderProps = (Component, props = {}) =>
  render(<Component />, {
    wrapper: ({children}) => <Provider {...props}>{children}</Provider>,
  });

const defaultProps = {
  onDateSet: jest.fn(),
  wrapWith: MockWrapper,
  todayTimestamp: today,
  selectedTimestamp: yesterday,
  visibleTimestamp: tomorrow,
  renderAs: MockComponent,
  precision: 'day',
  startDate: new Date(2000, 11, 12), // stays after refactoring
  endDate: new Date(2022, 11, 12), // stays after refactoring
  disableDate: jest.fn(),
  highlightDate: jest.fn(),
  highlightWeekends: true,
};

describe('Calendar', () => {
  beforeEach(() => {
    MockComponent.mockClear();
    defaultProps.highlightDate.mockReset();
    defaultProps.disableDate.mockReset();
  });

  describe.each`
    locale          | precision  | visibleTimestamp | selectedTimestamp | todayTimestamp | start        | end
    ${undefined}    | ${'day'}   | ${tomorrow}      | ${yesterday}      | ${today}       | ${startDate} | ${endDate}
    ${undefined}    | ${'day'}   | ${nextMonth}     | ${yesterday}      | ${today}       | ${startDate} | ${endDate}
    ${undefined}    | ${'day'}   | ${nextYear}      | ${yesterday}      | ${today}       | ${startDate} | ${endDate}
    ${customLocale} | ${'day'}   | ${tomorrow}      | ${yesterday}      | ${today}       | ${startDate} | ${endDate}
    ${customLocale} | ${'day'}   | ${nextMonth}     | ${yesterday}      | ${today}       | ${startDate} | ${endDate}
    ${customLocale} | ${'day'}   | ${nextYear}      | ${yesterday}      | ${today}       | ${startDate} | ${endDate}
    ${undefined}    | ${'month'} | ${tomorrow}      | ${yesterday}      | ${today}       | ${startDate} | ${endDate}
    ${undefined}    | ${'month'} | ${nextMonth}     | ${yesterday}      | ${today}       | ${startDate} | ${endDate}
    ${undefined}    | ${'month'} | ${nextYear}      | ${yesterday}      | ${today}       | ${startDate} | ${endDate}
    ${customLocale} | ${'month'} | ${tomorrow}      | ${yesterday}      | ${today}       | ${startDate} | ${endDate}
    ${undefined}    | ${'year'}  | ${tomorrow}      | ${yesterday}      | ${today}       | ${startDate} | ${endDate}
    ${undefined}    | ${'year'}  | ${nextMonth}     | ${yesterday}      | ${today}       | ${startDate} | ${endDate}
    ${undefined}    | ${'year'}  | ${nextYear}      | ${yesterday}      | ${today}       | ${startDate} | ${endDate}
    ${customLocale} | ${'year'}  | ${tomorrow}      | ${yesterday}      | ${today}       | ${startDate} | ${endDate}
  `(
    'basic date rendering',
    ({
      precision,
      visibleTimestamp,
      selectedTimestamp,
      todayTimestamp,
      start,
      end,
      locale,
    }) => {
      it(`creates date entries grid`, () => {
        const props = {
          ...defaultProps,
          precision,
          visibleTimestamp,
          selectedTimestamp,
          todayTimestamp,
          startDate: start,
          endDate,
          end,
        };
        const {asFragment} = renderWithProviderProps(
          () => <Calendar {...props} />,
          {dateFnsLocale: locale}
        );
        expect(asFragment()).toMatchSnapshot();

        MockComponent.mock.calls.forEach(call => {
          expect(call[0]).toMatchSnapshot();
        });
      });
    }
  );

  describe.each`
    locale          | precision  | todayTimestamp | highlightDate     | disableDate
    ${undefined}    | ${'day'}   | ${today}       | ${matchYesterday} | ${() => false}
    ${undefined}    | ${'day'}   | ${today}       | ${() => false}    | ${matchYesterday}
    ${customLocale} | ${'day'}   | ${today}       | ${matchYesterday} | ${() => false}
    ${customLocale} | ${'day'}   | ${today}       | ${() => false}    | ${matchYesterday}
    ${undefined}    | ${'month'} | ${today}       | ${matchNextMonth} | ${() => false}
    ${undefined}    | ${'month'} | ${today}       | ${() => false}    | ${matchNextMonth}
    ${undefined}    | ${'year'}  | ${today}       | ${matchNextYear}  | ${() => false}
  `(
    'highlight and disable dates rendering',
    ({precision, todayTimestamp, highlightDate, disableDate, locale}) => {
      it(`creates date entries grid`, () => {
        const props = {
          ...defaultProps,
          precision,
          todayTimestamp,
          highlightDate,
          disableDate,
          locale,
        };
        const {asFragment} = renderWithProviderProps(
          () => <Calendar {...props} />,
          {dateFnsLocale: locale}
        );
        expect(asFragment()).toMatchSnapshot();

        MockComponent.mock.calls.forEach(call => {
          expect(call[0]).toMatchSnapshot();
        });
      });
    }
  );
});
