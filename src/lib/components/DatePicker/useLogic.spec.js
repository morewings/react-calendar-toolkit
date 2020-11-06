import React from 'react';
import {renderHook, act} from '@testing-library/react-hooks';
import createStoreProvider from 'lib/store';
import DatePickerContext from 'lib/features/datepicker/context';
import DatepickerReducer from 'lib/features/datepicker/DatepickerReducer';
import useLogic from './useLogic';

const mockReducer = jest.fn((...args) => {
  DatepickerReducer(...args);
});

const onDateSet = jest.fn();

const date = new Date(2020, 0, 12); // 12.01.2020

const createStoreProviderWithState = state =>
  createStoreProvider({
    initialState: state,
    reducer: mockReducer,
    context: DatePickerContext,
  });

describe('DatePicker > useLogic > handleDateSet', () => {
  beforeEach(() => {
    onDateSet.mockClear();
    mockReducer.mockClear();
  });

  it('returns function', () => {
    const Provider = createStoreProviderWithState({});
    const {result} = renderHook(() => useLogic(onDateSet, 'day'), {
      wrapper: ({children}) => <Provider>{children}</Provider>,
    });
    expect(result.current.handleDateSet).toBeInstanceOf(Function);
  });

  it('sets date and calls callback when `precision === minPrecision`', () => {
    const precision = 'day';
    const Provider = createStoreProviderWithState({precision});
    const {result} = renderHook(() => useLogic(onDateSet, precision), {
      wrapper: ({children}) => <Provider>{children}</Provider>,
    });
    act(() => {
      result.current.handleDateSet(date);
    });
    expect(onDateSet).toHaveBeenCalledTimes(1);
    expect(onDateSet).toHaveBeenCalledWith(date);
    expect(mockReducer).toHaveBeenCalledTimes(1);
    expect(mockReducer.mock.calls[0][1]).toMatchSnapshot(); // SET_DATE
  });

  it('increments precision and sets visibility when `precision !== minPrecision`', () => {
    const minPrecision = 'day';
    const precision = 'month';
    const Provider = createStoreProviderWithState({precision});
    const {result} = renderHook(() => useLogic(onDateSet, minPrecision), {
      wrapper: ({children}) => <Provider>{children}</Provider>,
    });
    act(() => {
      result.current.handleDateSet(date);
    });
    expect(onDateSet).not.toHaveBeenCalled();
    expect(mockReducer).toHaveBeenCalledTimes(2);
    expect(mockReducer.mock.calls[0][1]).toMatchSnapshot(); // SET_VISIBILITY
    expect(mockReducer.mock.calls[1][1]).toMatchSnapshot(); // SET_PRECISION
  });
});
