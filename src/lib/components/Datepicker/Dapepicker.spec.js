import React from 'react';
import {render} from '@testing-library/react';
import {DatepickerMockProvider as Provider} from 'lib/utils/testProvider';
import Datepicker from './Datepicker';

const MockComponent = () => <div>MockComponent</div>;

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
    <Datepicker
      {...props}
      today={new Date(2020, 0, 10)}
      onDateSet={onDateSet}
    />,
    {
      wrapper: ({children}) => <Provider>{children}</Provider>,
    }
  );

const scrollIntoView = jest.fn();

describe('Datepicker', () => {
  beforeEach(() => {
    onDateSet.mockClear();
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
  });

  it('renders without header', () => {
    const {asFragment} = renderWithProps({showHeader: false});
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders title', () => {
    renderWithProps({title: 'Title'});
  });

  it('disables weekend highlight', () => {
    renderWithProps({highlightWeekends: false});
  });

  it('passes `disableDate`', () => {
    const disableDate = jest.fn();
    renderWithProps({disableDate});
  });

  it('passes `highlightDate`', () => {
    const highlightDate = jest.fn();
    renderWithProps({highlightDate});
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
    const {asFragment} = renderWithProps({wrapperClassName: 'foo'});
    expect(asFragment()).toMatchSnapshot();
  });
});
