import React, {useContext, useLayoutEffect} from 'react';
import PropTypes from 'prop-types';
import defaults from './defaultTheme';

const ThemeContext = React.createContext({});

export const useThemeContext = () => {
  const {theme} = useContext(ThemeContext);
  return theme;
};

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

/** @function
 * @name removeCSSVariable
 * @description Remove CSS variable
 * @param {HTMLElement} selector - CSS selector to contain variable
 * @param {string} variableName - variable name, should start with `--`
 * @return {void}
 */
export const removeCSSVariable = (selector, variableName) => {
  selector.style.removeProperty(variableName);
};

/** @function
 * @name getCSSVariable
 * @description Get CSS variable value
 * @param {HTMLElement} selector - CSS selector to contain variable
 * @param {string} variableName - variable name, should start with `--`
 * @return {string}
 */
export const getCSSVariable = (selector, variableName) =>
  selector.style.getPropertyValue(variableName);

/** Default value prevents flash of unstyled elements on first render */
export const useThemePostCSS = (selector = document.documentElement) => {
  const {customTheme, defaultTheme} = useContext(ThemeContext);
  useLayoutEffect(() => {
    const mergedTheme = {
      ...defaultTheme,
      ...customTheme,
    };
    Object.entries(mergedTheme).forEach(([variableName, value]) => {
      setCSSVariable(selector, variableName, value);
    });
    return () => {
      Object.entries(mergedTheme).forEach(([variableName]) => {
        removeCSSVariable(selector, variableName);
      });
    };
  }, [selector, customTheme, defaultTheme]);
};

export const withTheme = WrappedComponent => {
  const Component = props => (
    <ThemeContext.Provider
      value={{
        customTheme: props.theme,
        defaultTheme: defaults,
      }}>
      <WrappedComponent {...props} />
    </ThemeContext.Provider>
  );
  Component.propTypes = {
    theme: PropTypes.shape({}),
  };
  Component.defaultProps = {
    theme: {},
  };
  return Component;
};
