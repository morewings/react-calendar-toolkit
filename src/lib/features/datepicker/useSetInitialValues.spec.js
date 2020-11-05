import React from 'react';
import {renderHook} from '@testing-library/react-hooks';
import createStoreProvider from 'lib/store';
import {useSetInitialValues} from './useSetInitialValues';
import DatePickerContext from './context';
import {
  SET_DATE,
  SET_PRECISION,
  SET_TODAY,
  SET_VISIBILITY,
} from './actionTypes';

const mockReducer = jest.fn();
const date = new Date('2020-01-20T00:00:00.000'); // 20.01.2020
const timestamp = 1579478400000;

const initialValues = {
  initialDate: new Date('2020-01-20T00:00:00.000'),
  today: new Date('2020-01-20T00:00:00.000'),
  minPrecision: 'day',
};

const createStoreProviderWithState = state =>
  createStoreProvider({
    initialState: state,
    reducer: mockReducer,
    context: DatePickerContext,
  });

describe('useHasInitialValues', () => {
  beforeEach(() => {
    mockReducer.mockClear();
  });

  it('renders', () => {
    const Provider = createStoreProviderWithState({});
    expect(() => {
      renderHook(() => useSetInitialValues(initialValues), {
        wrapper: ({children}) => <Provider>{children}</Provider>,
      });
    }).not.toThrow();
  });

  it('does not do anything when initial values are set', () => {
    const Provider = createStoreProviderWithState({
      selectedTimestamp: date,
      todayTimestamp: date,
      visibleTimestamp: date,
    });
    renderHook(() => useSetInitialValues(initialValues), {
      wrapper: ({children}) => <Provider>{children}</Provider>,
    });

    expect(mockReducer).not.toHaveBeenCalled();
  });

  describe.each`
    selectedTimestamp | todayTimestamp | visibleTimestamp
    ${undefined}      | ${undefined}   | ${undefined}
    ${date}           | ${undefined}   | ${undefined}
    ${undefined}      | ${date}        | ${undefined}
    ${undefined}      | ${undefined}   | ${date}
    ${date}           | ${date}        | ${undefined}
    ${date}           | ${undefined}   | ${date}
    ${undefined}      | ${date}        | ${date}
  `(
    'useSetInitialValues',
    ({selectedTimestamp, todayTimestamp, visibleTimestamp}) => {
      it(`sets initial values, if they are not set`, () => {
        const Provider = createStoreProviderWithState({
          selectedTimestamp,
          todayTimestamp,
          visibleTimestamp,
        });
        renderHook(() => useSetInitialValues(initialValues), {
          wrapper: ({children}) => <Provider>{children}</Provider>,
        });
        expect(mockReducer).toHaveBeenCalledTimes(4);
        expect(mockReducer.mock.calls[0][1]).toStrictEqual({
          payload: {
            selectedTimestamp: timestamp,
          },
          type: SET_DATE,
        });
        expect(mockReducer.mock.calls[1][1]).toStrictEqual({
          payload: {
            visibleTimestamp: timestamp,
          },
          type: SET_VISIBILITY,
        });
        expect(mockReducer.mock.calls[2][1]).toStrictEqual({
          payload: {
            todayTimestamp: timestamp,
          },
          type: SET_TODAY,
        });
        expect(mockReducer.mock.calls[3][1]).toStrictEqual({
          payload: initialValues.minPrecision,
          type: SET_PRECISION,
        });
      });
    }
  );
});
