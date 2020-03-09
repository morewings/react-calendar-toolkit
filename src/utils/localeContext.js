import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import defaultLocale from 'date-fns/locale/en-US';
import {formatDistanceStrictWithOptions} from 'date-fns/fp';
import {getWeekDayNames, getYears, getMonths, getDays} from 'utils/enumerators';
import {formatDateWithLocale} from 'utils/dateUtils';

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

export const useMonthStepperLabels = () => {
  const locale = useContext(LocaleContext);
  const incrementMonthLabel = formatDistanceStrictWithOptions(
    {locale, addSuffix: true},
    new Date(2020, 0, 1),
    new Date(2020, 1, 1)
  );
  const decrementMonthLabel = formatDistanceStrictWithOptions(
    {locale, addSuffix: true},
    new Date(2020, 1, 1),
    new Date(2020, 0, 1)
  );
  return {
    incrementMonthLabel,
    decrementMonthLabel,
  };
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
