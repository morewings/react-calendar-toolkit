import React from 'react';
import {renderHook, act} from '@testing-library/react-hooks';
import createStoreProvider from 'lib/store';
import DatepickerContext from 'lib/features/datepicker/context';
import DatepickerReducer from 'lib/features/datepicker/DatepickerReducer';
import useLogic from './useLogic';

const mockReducer = jest.fn((...args) => {
  DatepickerReducer(...args);
});

const visibleTimestamp = new Date(2020, 0, 12).getTime(); // // 12.01.2020
const startDate = new Date(2019, 0, 12); // // 12.01.2020
const endDate = new Date(2021, 0, 12); // // 12.01.2020

const createStoreProviderWithState = state =>
  createStoreProvider({
    initialState: state,
    reducer: mockReducer,
    context: DatepickerContext,
  });

describe('Selector > useLogic ', () => {
  beforeEach(() => {
    mockReducer.mockClear();
  });

  it('returns functions', () => {
    const Provider = createStoreProviderWithState({});
    const {result} = renderHook(
      () => useLogic({visibleTimestamp, endDate, startDate}),
      {
        wrapper: ({children}) => <Provider>{children}</Provider>,
      }
    );
    expect(result.current).toMatchSnapshot();
  });

  describe('onSetPrecision', () => {
    it('sets precision', () => {
      const Provider = createStoreProviderWithState({
        precision: 'day',
      });
      const {result} = renderHook(
        () => useLogic({visibleTimestamp, endDate, startDate}),
        {
          wrapper: ({children}) => <Provider>{children}</Provider>,
        }
      );
      act(() => {
        result.current.onSetPrecision('month');
      });
      expect(mockReducer).toHaveBeenCalledTimes(1);
      expect(mockReducer.mock.calls[0][1]).toMatchSnapshot(); // SET_PRECISION
    });
  });

  describe('onIncrementMonth', () => {
    it('sets next visible date by adding 1 to current, if next date is within provided range', () => {
      const Provider = createStoreProviderWithState({});
      const {result} = renderHook(
        () => useLogic({visibleTimestamp, endDate, startDate}),
        {
          wrapper: ({children}) => <Provider>{children}</Provider>,
        }
      );
      act(() => {
        result.current.onIncrementMonth();
      });
      expect(mockReducer).toHaveBeenCalledTimes(1);
      expect(mockReducer.mock.calls[0][1]).toMatchSnapshot(); // SET_VISIBILITY
    });

    it('does not set next visible date, if next date is out of provided range', () => {
      const Provider = createStoreProviderWithState({});
      const {result} = renderHook(
        () =>
          useLogic({visibleTimestamp, endDate: visibleTimestamp, startDate}),
        {
          wrapper: ({children}) => <Provider>{children}</Provider>,
        }
      );
      act(() => {
        result.current.onIncrementMonth();
      });
      expect(mockReducer).not.toHaveBeenCalled();
    });
  });

  describe('onDecrementMonth', () => {
    it('sets next visible date by subtracting 1 from current, if next date is within provided range', () => {
      const Provider = createStoreProviderWithState({});
      const {result} = renderHook(
        () => useLogic({visibleTimestamp, endDate, startDate}),
        {
          wrapper: ({children}) => <Provider>{children}</Provider>,
        }
      );
      act(() => {
        result.current.onDecrementMonth();
      });
      expect(mockReducer).toHaveBeenCalledTimes(1);
      expect(mockReducer.mock.calls[0][1]).toMatchSnapshot(); // SET_VISIBILITY
    });

    it('does not set next visible date, if next date is out of provided range', () => {
      const Provider = createStoreProviderWithState({});
      const {result} = renderHook(
        () =>
          useLogic({visibleTimestamp, endDate, startDate: visibleTimestamp}),
        {
          wrapper: ({children}) => <Provider>{children}</Provider>,
        }
      );
      act(() => {
        result.current.onDecrementMonth();
      });
      expect(mockReducer).not.toHaveBeenCalled();
    });
  });
});
