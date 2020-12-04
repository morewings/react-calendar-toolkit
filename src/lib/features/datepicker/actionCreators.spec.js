import React from 'react';
import {renderHook, act} from '@testing-library/react-hooks';
import createStoreProvider from 'lib/store';
import {
  SET_DATE,
  SET_PRECISION,
  SET_TODAY,
  SET_VISIBILITY,
} from './actionTypes';
import useDatepickerActions from './actionCreators';
import {initialState} from './DatepickerReducer';
import DatepickerContext from './context';

const mockReducer = jest.fn();

const Provider = createStoreProvider({
  initialState,
  reducer: mockReducer,
  context: DatepickerContext,
});

const date = new Date('2020-01-20T00:00:00.000'); // 20.01.2020

const setDatePayload = {
  selectedTimestamp: 1579478400000,
};

const setTodayPayload = {
  todayTimestamp: 1579478400000,
};

const setVisibilityPayload = {
  visibleTimestamp: 1579478400000,
};

const precisionPayload = 'precision';

describe('useModalActions', () => {
  beforeEach(() => {
    mockReducer.mockClear();
  });

  it('returns action creators', () => {
    const {result} = renderHook(() => useDatepickerActions(), {
      wrapper: ({children}) => <Provider>{children}</Provider>,
    });
    expect(result.current).toMatchSnapshot();
  });

  describe.each`
    action             | type              | value               | expectedPayload
    ${'setDate'}       | ${SET_DATE}       | ${date}             | ${setDatePayload}
    ${'setToday'}      | ${SET_TODAY}      | ${date}             | ${setTodayPayload}
    ${'setVisibility'} | ${SET_VISIBILITY} | ${date}             | ${setVisibilityPayload}
    ${'setPrecision'}  | ${SET_PRECISION}  | ${precisionPayload} | ${precisionPayload}
  `('actions', ({action, type, value, expectedPayload}) => {
    it(`${action} creator dispatches to reducer`, () => {
      const {result} = renderHook(() => useDatepickerActions(), {
        wrapper: ({children}) => <Provider>{children}</Provider>,
      });

      act(() => {
        result.current[action](value);
      });

      expect(mockReducer).toHaveBeenCalledTimes(1);

      expect(mockReducer.mock.calls[0][1]).toStrictEqual({
        payload: expectedPayload,
        type,
      });
    });
  });
});
