import React from 'react';
import {render} from '@testing-library/react';
import {DatepickerMockProvider as Provider} from 'lib/utils/testProvider';
import Calendar from 'lib/components/logic/Calendar';
import WeekDays from 'lib/components/logic/Weekdays';
import Selector from 'lib/components/logic/Selector';
import Header from 'lib/components/logic/Header';
import DatePicker from './DatePicker';

jest.mock('lib/components/logic/Calendar', () => ({
  __esModule: true,
  default: jest.fn(() => <div>Calendar</div>),
}));

jest.mock('lib/components/logic/Weekdays', () => ({
  __esModule: true,
  default: jest.fn(() => <div>Weekdays</div>),
}));

jest.mock('lib/components/logic/Selector', () => ({
  __esModule: true,
  default: jest.fn(() => <div>Selector</div>),
}));

jest.mock('lib/components/logic/Header', () => ({
  __esModule: true,
  default: jest.fn(() => <div>Header</div>),
}));

const MockComponent = jest.fn(() => <div>MockComponent</div>);

const MockWrapper = jest.fn(({children}) => (
  <div data-testid="wrapper">{children}</div>
));

const onDateSet = jest.fn();
const date = {
  base: new Date(2020, 0, 12), // 12.01.2020
  plusOneDay: new Date(2020, 0, 13),
  minusOneDay: new Date(2020, 0, 11),
  minusOneMonth: new Date(2019, 11, 12),
  plusOneMonth: new Date(2020, 1, 12),
  plusOneYear: new Date(2021, 1, 12),
  minusOneYear: new Date(2019, 1, 12),
};

const renderWithProps = (props = {}) =>
  render(
    <DatePicker
      {...props}
      today={new Date(2020, 0, 10)}
      onDateSet={onDateSet}
    />,
    {
      wrapper: ({children}) => <Provider>{children}</Provider>,
    }
  );

const scrollIntoView = jest.fn();

describe('DatePicker', () => {
  beforeEach(() => {
    onDateSet.mockClear();
    Header.mockClear();
    Calendar.mockClear();
    Selector.mockClear();
    WeekDays.mockClear();
  });

  beforeAll(() => {
    // eslint-disable-next-line fp/no-mutation
    window.HTMLElement.prototype.scrollIntoView = scrollIntoView;
  });

  afterAll(() => {
    // eslint-disable-next-line fp/no-mutation
    window.HTMLElement.prototype.scrollIntoView = undefined;
  });

  it('renders', () => {
    const {asFragment} = renderWithProps();
    expect(asFragment()).toMatchSnapshot();
    expect(Header.mock.calls[0][0]).toMatchSnapshot();
    expect(Calendar.mock.calls[0][0]).toMatchSnapshot();
    expect(Selector.mock.calls[0][0]).toMatchSnapshot();
  });

  it('renders without header', () => {
    const {asFragment} = renderWithProps({showHeader: false});
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders title', () => {
    renderWithProps({title: 'Title'});
    expect(Header.mock.calls[0][0]).toMatchSnapshot();
  });

  it('disables weekend highlight', () => {
    renderWithProps({highlightWeekends: false});
    expect(Calendar.mock.calls[0][0]).toMatchSnapshot();
  });

  it('passes `disableDate`', () => {
    const disableDate = jest.fn();
    renderWithProps({disableDate});
    expect(Calendar.mock.calls[0][0]).toMatchSnapshot();
  });

  it('passes `highlightDate`', () => {
    const highlightDate = jest.fn();
    renderWithProps({highlightDate});
    expect(Calendar.mock.calls[0][0]).toMatchSnapshot();
  });

  describe.each`
    initialDate  | startDate            | endDate             | today              | minPrecision
    ${date.base} | ${date.minusOneYear} | ${date.plusOneYear} | ${date.plusOneDay} | ${'day'}
    ${date.base} | ${date.minusOneYear} | ${date.plusOneYear} | ${date.plusOneDay} | ${'month'}
    ${date.base} | ${date.minusOneYear} | ${date.plusOneYear} | ${date.plusOneDay} | ${'year'}
  `(
    'renders date related props:',
    ({initialDate, startDate, endDate, today, minPrecision}) => {
      it(`initialDate: ${initialDate}, startDate: ${startDate}, endDate: ${endDate}, today: ${today}, minPrecision: ${minPrecision} `, () => {
        const {asFragment} = renderWithProps({
          initialDate,
          startDate,
          endDate,
          today,
          minPrecision,
        });
        expect(asFragment()).toMatchSnapshot();
        expect(Header.mock.calls[0][0]).toMatchSnapshot();
        expect(Selector.mock.calls[0][0]).toMatchSnapshot();
        expect(Calendar.mock.calls[0][0]).toMatchSnapshot();
        minPrecision === 'day' &&
          expect(WeekDays.mock.calls[0][0]).toMatchSnapshot();
      });
    }
  );

  it('renders Header custom UI', () => {
    const {asFragment} = renderWithProps({renderHeaderAs: MockComponent});
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders Selector custom UI', () => {
    const {asFragment} = renderWithProps({renderSelectorAs: MockComponent});
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders custom Wrapper', () => {
    const {getByTestId} = renderWithProps({wrapWith: MockWrapper});
    expect(getByTestId('wrapper')).toMatchSnapshot();
  });

  it('passes Day(s) Calendar custom UI', () => {
    renderWithProps({
      renderDayAs: 'MockComponent',
      wrapDaysWith: 'MockWrapper',
    });
    expect(Calendar.mock.calls[0][0]).toMatchSnapshot();
  });

  it('passes Month(s) Calendar custom UI', () => {
    renderWithProps({
      renderMonthAs: 'MockComponent',
      wrapMonthWith: 'MockWrapper',
    });
    expect(Calendar.mock.calls[0][0]).toMatchSnapshot();
  });

  it('passes Year(s) Calendar custom UI', () => {
    renderWithProps({
      renderYearAs: 'MockComponent',
      wrapYearWith: 'MockWrapper',
    });
    expect(Calendar.mock.calls[0][0]).toMatchSnapshot();
  });

  it('passes Weekday(s) Row custom UI', () => {
    renderWithProps({
      renderWeekDayAs: 'MockComponent',
      wrapWeekDaysWith: 'MockWrapper',
      minPrecision: 'day',
    });
    expect(WeekDays.mock.calls[0][0]).toMatchSnapshot();
  });
});
