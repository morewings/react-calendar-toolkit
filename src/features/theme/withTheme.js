import React, {useContext} from 'react';
import PropTypes from 'prop-types';

const ThemeContext = React.createContext({});

export const useThemeContext = () => useContext(ThemeContext);

export const Provider = ({children, theme}) => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
);

Provider.propTypes = {
  theme: PropTypes.shape({}),
  children: PropTypes.element.isRequired,
};
Provider.defaultProps = {
  theme: {},
};

// eslint-disable-next-line react/prop-types
const withTheme = WrappedComponent => ({theme, ...restProps}) => (
  <Provider theme={theme}>
    <WrappedComponent {...restProps} />
  </Provider>
);

export default withTheme;
