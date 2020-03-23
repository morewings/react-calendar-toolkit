import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import defaultLocale from 'date-fns/locale/en-US';

const LocaleContext = React.createContext({});

export const useLocaleContext = () => useContext(LocaleContext);

export const Provider = ({children, value}) => (
  <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
);

Provider.propTypes = {
  value: PropTypes.shape({}),
  children: PropTypes.element.isRequired,
};
Provider.defaultProps = {
  value: defaultLocale,
};

export default WrappedComponent => ({dateFnsLocale, ...restProps}) => (
  <Provider value={dateFnsLocale}>
    <WrappedComponent {...restProps} />
  </Provider>
);
