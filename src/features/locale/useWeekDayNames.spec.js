import React from 'react';
import {renderHook} from '@testing-library/react-hooks';
import customLocale from 'date-fns/locale/be';
import useWeekDayNames from './useWeekDayNames';
import {Provider} from './withLocaleContext';

describe('useWeekDayNames', () => {
  it('returns en-US locale formatted weekday names by default', () => {
    const {result} = renderHook(() => useWeekDayNames(), {
      wrapper: ({children}) => <Provider>{children}</Provider>,
    });
    expect(result.current).toMatchSnapshot();
  });

  it('returns custom locale formatted weekday names', () => {
    const {result} = renderHook(() => useWeekDayNames(), {
      wrapper: ({children}) => (
        <Provider value={customLocale}>{children}</Provider>
      ),
    });
    expect(result.current).toMatchSnapshot();
  });
});
