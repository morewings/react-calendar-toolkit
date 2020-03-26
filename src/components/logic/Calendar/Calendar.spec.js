import React from 'react';
import {render} from '@testing-library/react';
import {DatepickerMockProvider as Provider} from 'utils/testProvider';
import customLocale from 'date-fns/locale/ru';
import {
  SET_DATE,
  SET_PRECISION,
  SET_TODAY,
  SET_VISIBILITY,
} from 'features/datepicker/actionTypes';
import {act, renderHook} from '@testing-library/react-hooks';
import useDatePickerActions from 'features/datepicker/actionCreators';
import Calendar from './Calendar';

const today = new Date(2011, 10, 11).getTime(); // 11.11.2011
const yesterday = new Date(2011, 10, 10).getTime(); // 10.11.2011
const tomorrow = new Date(2011, 10, 12).getTime(); // 12.11.2011
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
  });

  it.each([['day'], ['month'], ['year']])(
    'renders with en-US locale (1st day Sunday)',
    precision => {
      const props = {
        ...defaultProps,
        precision,
      };
      const {asFragment, getByTestId} = renderWithProviderProps(() => (
        <Calendar {...props} />
      ));
      expect(asFragment()).toMatchSnapshot();
      expect(getByTestId('wrapper')).toMatchSnapshot();

      MockComponent.mock.calls.forEach(call => {
        expect(call[0]).toMatchSnapshot();
      });
    }
  );

  describe.each`
    locale          | precision  | visibleTimestamp | selectedTimestamp | todayTimestamp | start        | end
    ${undefined}    | ${'day'}   | ${tomorrow}      | ${yesterday}      | ${today}       | ${startDate} | ${endDate}
    ${customLocale} | ${'day'}   | ${tomorrow}      | ${yesterday}      | ${today}       | ${startDate} | ${endDate}
    ${undefined}    | ${'month'} | ${tomorrow}      | ${yesterday}      | ${today}       | ${startDate} | ${endDate}
    ${customLocale} | ${'month'} | ${tomorrow}      | ${yesterday}      | ${today}       | ${startDate} | ${endDate}
    ${undefined}    | ${'year'}  | ${tomorrow}      | ${yesterday}      | ${today}       | ${startDate} | ${endDate}
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
        const {asFragment, getByTestId} = renderWithProviderProps(
          () => <Calendar {...props} />,
          {dateFnsLocale: locale}
        );
        expect(asFragment()).toMatchSnapshot();
        // expect(getByTestId('wrapper')).toMatchSnapshot();

        MockComponent.mock.calls.forEach(call => {
          expect(call[0]).toMatchSnapshot();
        });

        // const {result} = renderHook(() => useDatePickerActions(), {
        //   wrapper: ({children}) => <Provider>{children}</Provider>,
        // });
        //
        // act(() => {
        //   result.current[action](value);
        // });
        //
        // expect(mockReducer).toHaveBeenCalledTimes(1);
        //
        // expect(mockReducer.mock.calls[0][1]).toStrictEqual({
        //   payload: expectedPayload,
        //   type,
        // });
      });
    }
  );
});
