import React from 'react';
import {renderHook} from '@testing-library/react-hooks';
import customLocale from 'date-fns/locale/be';
import useMonthStepperLabels from './useMonthStepperLabels';
import {Provider} from './withLocaleContext';

describe('useMonthStepperLabels', () => {
  it('returns en-US locale formatted weekday names by default', () => {
    const {result} = renderHook(() => useMonthStepperLabels(), {
      wrapper: ({children}) => <Provider>{children}</Provider>,
    });
    expect(result.current).toMatchSnapshot();
  });

  it('returns custom locale formatted weekday names', () => {
    const {result} = renderHook(() => useMonthStepperLabels(), {
      wrapper: ({children}) => (
        <Provider value={customLocale}>{children}</Provider>
      ),
    });
    expect(result.current).toMatchSnapshot();
  });
});
