import locale from 'date-fns/esm/locale/ru';

export const getWeekDays = () =>
  [...Array(7).keys()].map(i => locale.localize.day(i, {width: 'short'}));
