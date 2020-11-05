import React from 'react';
import {renderHook, act} from '@testing-library/react-hooks';
import createStoreProvider from 'lib/store';
import {SET_PRECISION} from 'lib/features/datepicker/actionTypes';
import useIncrementPrecision from './useIncrementPrecision';
import DatePickerContext from './context';

const mockReducer = jest.fn();

const createStoreProviderWithState = state =>
  createStoreProvider({
    initialState: state,
    reducer: mockReducer,
    context: DatePickerContext,
  });

describe('useIncrementPrecision', () => {
  beforeEach(() => {
    mockReducer.mockClear();
  });

  it('renders', () => {
    const Provider = createStoreProviderWithState({});
    const {result} = renderHook(() => useIncrementPrecision('day'), {
      wrapper: ({children}) => <Provider>{children}</Provider>,
    });
    expect(result.current).toBeInstanceOf(Function);
  });

  it.each([['day'], ['month'], ['year']])(
    'does not increment precision if `state.precision === minPrecision`',
    precision => {
      const Provider = createStoreProviderWithState({precision});
      const {result} = renderHook(() => useIncrementPrecision(precision), {
        wrapper: ({children}) => <Provider>{children}</Provider>,
      });
      result.current();
      expect(mockReducer).not.toHaveBeenCalled();
    }
  );

  describe.each`
    minPrecision | statePrecision | nextPrecision
    ${'month'}   | ${'year'}      | ${'month'}
    ${'day'}     | ${'year'}      | ${'month'}
    ${'day'}     | ${'month'}     | ${'day'}
  `('useSetInitialValues', ({minPrecision, statePrecision, nextPrecision}) => {
    it(`sets nextPrecision === ${nextPrecision} when minPrecision === ${minPrecision} and state.precision === ${statePrecision}`, () => {
      const Provider = createStoreProviderWithState({
        precision: statePrecision,
      });

      const {result} = renderHook(() => useIncrementPrecision(minPrecision), {
        wrapper: ({children}) => <Provider>{children}</Provider>,
      });

      act(() => {
        result.current();
      });

      expect(mockReducer.mock.calls[0][1]).toStrictEqual({
        payload: nextPrecision,
        type: SET_PRECISION,
      });
    });
  });
});
