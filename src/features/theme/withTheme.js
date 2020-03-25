import React, {useContext} from 'react';
import PropTypes from 'prop-types';

const ThemeContext = React.createContext({});

export const useThemeContext = () => useContext(ThemeContext);

export const Provider = ({children, value}) => (
  <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
);

Provider.propTypes = {
  value: PropTypes.shape({}),
  children: PropTypes.element.isRequired,
};
Provider.defaultProps = {
  value: {},
};

export default WrappedComponent => ({theme, ...restProps}) => (
  <Provider value={theme}>
    <WrappedComponent {...restProps} />
  </Provider>
);
