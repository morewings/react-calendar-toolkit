import React from 'react';
import {renderHook} from '@testing-library/react-hooks';
import createStoreProvider from 'store';
import useHasInitialValues from './useHasInitialValues';
import DatePickerContext from './context';

const mockReducer = jest.fn();
const date = new Date('2020-01-20T00:00:00.000'); // 20.01.2020

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

  it('returns false when no initial values provided', () => {
    const Provider = createStoreProviderWithState({});
    const {result} = renderHook(() => useHasInitialValues(), {
      wrapper: ({children}) => <Provider>{children}</Provider>,
    });
    expect(result.current).toBe(false);
  });

  describe.each`
    selectedTimestamp | todayTimestamp | visibleTimestamp | expected
    ${undefined}      | ${undefined}   | ${undefined}     | ${false}
    ${date}           | ${undefined}   | ${undefined}     | ${false}
    ${undefined}      | ${date}        | ${undefined}     | ${false}
    ${undefined}      | ${undefined}   | ${date}          | ${false}
    ${date}           | ${date}        | ${undefined}     | ${false}
    ${date}           | ${undefined}   | ${date}          | ${false}
    ${undefined}      | ${date}        | ${date}          | ${false}
    ${date}           | ${date}        | ${date}          | ${true}
  `(
    'useHasInitialValues',
    ({selectedTimestamp, todayTimestamp, visibleTimestamp, expected}) => {
      it(`checks if all initial values are provided`, () => {
        const initialState = {
          selectedTimestamp,
          todayTimestamp,
          visibleTimestamp,
        };

        const Provider = createStoreProviderWithState(initialState);

        const {result} = renderHook(() => useHasInitialValues(), {
          wrapper: ({children}) => <Provider>{children}</Provider>,
        });

        expect(result.current).toBe(expected);
      });
    }
  );
});
