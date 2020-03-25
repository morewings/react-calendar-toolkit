import React from 'react';
import {renderHook} from '@testing-library/react-hooks';
import customLocale from 'date-fns/locale/be';
import useLocaleEnumerators from './useLocaleEnumerators';
import {Provider} from './withLocaleContext';

const startDate = new Date('1999-01-20T00:00:00.000+01:00'); // 20.01.1999
const endDate = new Date('2020-01-20T00:00:00.000+01:00'); // 20.01.2020

describe.each`
  locale          | precision  | parameter
  ${undefined}    | ${'day'}   | ${startDate}
  ${undefined}    | ${'month'} | ${startDate}
  ${undefined}    | ${'year'}  | ${[startDate, endDate]}
  ${customLocale} | ${'day'}   | ${startDate}
  ${customLocale} | ${'month'} | ${startDate}
  ${customLocale} | ${'year'}  | ${[startDate, endDate]}
`('useLocaleEnumerators', ({locale, precision, parameter}) => {
  test(`returns ${precision} enumerator with locale set`, () => {
    const {result} = renderHook(() => useLocaleEnumerators(precision), {
      wrapper: ({children}) => <Provider value={locale}>{children}</Provider>,
    });
    expect(result.current(parameter)).toMatchSnapshot();
  });
});
