import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import defaultLocale from 'date-fns/locale/en-US';

const LocaleContext = React.createContext({});

export const useLocaleContext = () => useContext(LocaleContext);

export const Provider = ({children, dateFnsLocale}) => (
  <LocaleContext.Provider value={dateFnsLocale}>
    {children}
  </LocaleContext.Provider>
);

Provider.propTypes = {
  dateFnsLocale: PropTypes.shape({}),
  children: PropTypes.element.isRequired,
};
Provider.defaultProps = {
  dateFnsLocale: defaultLocale,
};

export default WrappedComponent => ({dateFnsLocale, ...restProps}) => (
  <Provider dateFnsLocale={dateFnsLocale}>
    <WrappedComponent {...restProps} />
  </Provider>
);
