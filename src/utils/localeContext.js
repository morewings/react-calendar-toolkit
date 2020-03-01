import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import defaultLocale from 'date-fns/esm/locale/en-US';
import {getWeekDayNames, getYears, getMonths, getDays} from 'utils/enumerators';
import {
  formatDateWithLocale,
  checkIsSameDay,
  checkIsSameMonth,
  checkIsSameYear,
} from 'utils/dateUtils';

const LocaleContext = React.createContext({});

export const useLocaleContext = () => useContext(LocaleContext);

export const useLocaleEnumerators = precision => {
  const locale = useContext(LocaleContext);
  return {
    day: getDays(locale),
    month: getMonths(locale),
    year: getYears,
  }[precision];
};

export const useWeekDayNames = () => {
  const locale = useContext(LocaleContext);
  return getWeekDayNames(locale);
};

export const useFormatDate = () => {
  const locale = useContext(LocaleContext);
  return formatDateWithLocale({locale});
};

export const withLocaleContext = WrappedComponent => {
  const Component = props => (
    <LocaleContext.Provider value={props.dateFnsLocale}>
      <WrappedComponent {...props} />
    </LocaleContext.Provider>
  );
  Component.propTypes = {
    dateFnsLocale: PropTypes.shape({}),
  };
  Component.defaultProps = {
    dateFnsLocale: defaultLocale,
  };
  return Component;
};

export default LocaleContext;
