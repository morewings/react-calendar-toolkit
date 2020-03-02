import React, {useContext, useLayoutEffect} from 'react';
import PropTypes from 'prop-types';
import defaultTheme from './defaultTheme';

const ThemeContext = React.createContext({});

export const useThemeContext = () => useContext(ThemeContext);

/** @function
 * @name setCSSVariable
 * @description Set CSS variable
 * @param {HTMLElement} selector - CSS selector to contain variable
 * @param {string} variableName - variable name, should start with `--`
 * @param {string} value
 * @return {void}
 */
export const setCSSVariable = (selector, variableName, value) => {
  selector.style.setProperty(variableName, value);
};

export const useThemePostCSS = (selector = document.documentElement) => {
  const theme = useThemeContext();
  useLayoutEffect(() => {
    Object.entries(theme).forEach(([variableName, value]) => {
      setCSSVariable(selector, variableName, value);
    });
  }, [selector, theme]);
};

export const withTheme = WrappedComponent => {
  const Component = props => {
    const theme = {
      ...defaultTheme,
      ...props.theme,
    };
    return (
      <ThemeContext.Provider value={theme}>
        <WrappedComponent {...props} />
      </ThemeContext.Provider>
    );
  };
  Component.propTypes = {
    theme: PropTypes.shape({}),
  };
  Component.defaultProps = {
    theme: {},
  };
  return Component;
};

// export default ThemeContext;
