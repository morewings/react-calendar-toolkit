import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import defaultLocale from 'date-fns/esm/locale/ru';
import {
  getWeekDayNames,
  getYears,
  getMonths,
  getDays,
  formatDateWithLocale,
} from 'utils/dateUtils';

const LocaleContext = React.createContext({});

export const useLocaleContext = () => useContext(LocaleContext);

export const useLocaleEnumerators = () => {
  const locale = useContext(LocaleContext);
  return {
    getWeekDayNames: getWeekDayNames(locale),
    getYears,
    getMonths: getMonths(locale),
    getDays: getDays(locale),
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
