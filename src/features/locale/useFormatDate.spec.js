import React from 'react';
import {renderHook} from '@testing-library/react-hooks';
import customLocale from 'date-fns/locale/uk';
import useFormatDate from './useFormatDate';
import {Provider} from './withLocaleContext';

const dateValue = new Date('1999-01-19T00:00:00.000'); // 19.01.1999

describe.each`
  locale          | pattern         | date         | expected
  ${undefined}    | ${'MM/dd/yyyy'} | ${dateValue} | ${'01/19/1999'}
  ${undefined}    | ${'do MMMM'}    | ${dateValue} | ${'19th January'}
  ${undefined}    | ${'PPPPpppp'}   | ${dateValue} | ${'Tuesday, January 19th, 1999 at 12:00:00 AM GMT+00:00'}
  ${customLocale} | ${'MM/dd/yyyy'} | ${dateValue} | ${'01/19/1999'}
  ${customLocale} | ${'do MMMM'}    | ${dateValue} | ${'19-е січня'}
  ${customLocale} | ${'PPPPpppp'}   | ${dateValue} | ${'вівторок, 19-е січня 1999 р. о 0:00:00 GMT+00:00'}
`('useFormatDate', ({locale, pattern, date, expected}) => {
  test(`returns formatted (${pattern}) ${date} with locale set`, () => {
    const {result} = renderHook(() => useFormatDate(), {
      wrapper: ({children}) => <Provider value={locale}>{children}</Provider>,
    });
    expect(result.current(pattern, date)).toBe(expected);
  });
});
