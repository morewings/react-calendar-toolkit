import React from 'react';
import {renderHook, act} from '@testing-library/react-hooks';
import {Provider as ProviderLocale} from 'features/locale/withLocaleContext';
import createStoreProvider from 'store';
import DatepickerContext from 'features/datepicker/context';
import {initialState} from 'features/modal';
import ModalContext from 'features/modal/context';
import useLogic from './useLogic';

const mockReducer = jest.fn();
const onDateSet = jest.fn();

const date = new Date(2012, 11, 12);
const selectedTimestamp = date.getTime();

export const ProviderDatepicker = createStoreProvider({
  initialState: {
    selectedTimestamp,
  },
  reducer: jest.fn(),
  context: DatepickerContext,
});

export const ProviderModal = createStoreProvider({
  initialState,
  reducer: mockReducer,
  context: ModalContext,
});

const Provider = ({children, ...restProps}) => (
  <ProviderLocale {...restProps}>
    <ProviderModal {...restProps}>
      <ProviderDatepicker {...restProps}>{children}</ProviderDatepicker>
    </ProviderModal>
  </ProviderLocale>
);

describe('DatePicker > useLogic > handleDateSet', () => {
  beforeEach(() => {
    mockReducer.mockClear();
    onDateSet.mockClear();
  });

  it('returns functions', () => {
    const {result} = renderHook(() => useLogic({}), {
      wrapper: ({children}) => <Provider>{children}</Provider>,
    });
    expect(result.current).toMatchSnapshot();
  });

  describe('formatValue', () => {
    it('formats selectedTimestamp with provided pattern', () => {
      const {result} = renderHook(() => useLogic({}), {
        wrapper: ({children}) => <Provider>{children}</Provider>,
      });
      expect(result.current.formatValue('MMM do')).toBe('Dec 12th');
    });
  });

  describe('handleDateSet', () => {
    it('it invokes callback with provided date', () => {
      const {result} = renderHook(() => useLogic({onDateSet}), {
        wrapper: ({children}) => <Provider>{children}</Provider>,
      });
      result.current.handleDateSet(date);
      expect(onDateSet.mock.calls[0][0]).toBe(date);
    });

    it('toggles visibility, if hideOnSelect === true', () => {
      const {result} = renderHook(
        () => useLogic({onDateSet, hideOnSelect: true}),
        {
          wrapper: ({children}) => <Provider>{children}</Provider>,
        }
      );
      act(() => result.current.handleDateSet(date));
      expect(mockReducer.mock.calls[0][1]).toMatchSnapshot();
    });

    it('does not toggle visibility, if hideOnSelect === false', () => {
      const {result} = renderHook(
        () => useLogic({onDateSet, hideOnSelect: false}),
        {
          wrapper: ({children}) => <Provider>{children}</Provider>,
        }
      );
      act(() => result.current.handleDateSet(date));
      expect(mockReducer).not.toHaveBeenCalled();
    });
  });
});
