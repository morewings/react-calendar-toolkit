import React, {useContext, useLayoutEffect} from 'react';
import PropTypes from 'prop-types';
import defaults from './defaultTheme';

const ThemeContext = React.createContext({});

export const useThemeContext = () => {
  const theme = useContext(ThemeContext);
  return theme;
};

/** @function
 * @name setCSSVariable
 * @description Set CSS variable
 * @param {HTMLElement} element - HTML element to contain variable
 * @param {string} variableName - variable name, should start with `--`
 * @param {string} value
 * @return {void}
 */
export const setCSSVariable = (element, variableName, value) => {
  element.style.setProperty(variableName, value);
};

/** @function
 * @name removeCSSVariable
 * @description Remove CSS variable
 * @param {HTMLElement} element - HTML element to contain variable
 * @param {string} variableName - variable name, should start with `--`
 * @return {void}
 */
export const removeCSSVariable = (element, variableName) => {
  element.style.removeProperty(variableName);
};

/** @function
 * @name getCSSVariable
 * @description Get CSS variable value
 * @param {HTMLElement} element - HTML element to contain variable
 * @param {string} variableName - variable name, should start with `--`
 * @return {string}
 */
export const getCSSVariable = (element, variableName) =>
  element.style.getPropertyValue(variableName);

/** @function
 * @name useThemePostCSS
 * @description React hook. Sets css variables from Context and defaultTheme
 * @param {HTMLElement} element - HTML element to contain set variables
 * @param {Object} [defaultTheme=defaults] Default theme to override with context values
 * @return {Function}
 */
export const useThemePostCSS = (element, defaultTheme = defaults) => {
  const theme = useContext(ThemeContext);
  useLayoutEffect(() => {
    const mergedTheme = {
      ...defaultTheme,
      ...theme,
    };
    element &&
      Object.entries(mergedTheme).forEach(([variableName, value]) => {
        setCSSVariable(element, variableName, value);
      });
    return () => {
      element &&
        Object.entries(mergedTheme).forEach(([variableName]) => {
          removeCSSVariable(element, variableName);
        });
    };
  }, [element, defaultTheme, theme]);
};

export const withTheme = WrappedComponent => {
  const Component = props => (
    <ThemeContext.Provider value={props.theme}>
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
