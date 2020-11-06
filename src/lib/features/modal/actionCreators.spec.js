import React from 'react';
import {renderHook, act} from '@testing-library/react-hooks';
import createStoreProvider from 'lib/store';
import {TOGGLE_DATEPICKER} from './actionTypes';
import useModalActions from './actionCreators';
import {initialState} from './ModalReducer';
import ModalContext from './context';

const mockReducer = jest.fn();

const Provider = createStoreProvider({
  initialState,
  reducer: mockReducer,
  context: ModalContext,
});

describe('useModalActions', () => {
  beforeEach(() => {
    mockReducer.mockClear();
  });

  it('returns action creators', () => {
    const {result} = renderHook(() => useModalActions(), {
      wrapper: ({children}) => <Provider>{children}</Provider>,
    });
    expect(result.current.toggleDatePicker).toBeInstanceOf(Function);
  });

  it('`toggleDatePicker` actionCreator dispatches to reducer', () => {
    const payload = 'payload';
    const {result} = renderHook(() => useModalActions(), {
      wrapper: ({children}) => <Provider>{children}</Provider>,
    });

    act(() => {
      result.current.toggleDatePicker(payload);
    });

    expect(mockReducer).toHaveBeenCalledTimes(1);

    expect(mockReducer.mock.calls[0][1]).toStrictEqual({
      payload,
      type: TOGGLE_DATEPICKER,
    });
  });
});
