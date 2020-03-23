import {useRef, useCallback} from 'react';
import defaults from 'utils/defaultTheme';
import {useThemeContext} from './withTheme';
import {removeCSSVariable, setCSSVariable} from './cssVariables';

/** @function
 * @name useThemePostCSS
 * @description React hook. Sets css variables from Context and defaultTheme
 * @param {Object.<string, string>} [defaultTheme=defaults] Default theme to override with context values
 * @return {[Object, Function]}
 */
const useThemePostCSS = (defaultTheme = defaults) => {
  const ref = useRef(null);
  const propsTheme = useThemeContext();
  const mergedTheme = {
    ...defaultTheme,
    ...propsTheme,
  };
  const setRef = useCallback(
    element => {
      if (ref.current) {
        element &&
          Object.entries(mergedTheme).forEach(([variableName]) => {
            removeCSSVariable(element, variableName);
          });
      }
      if (element) {
        Object.entries(mergedTheme).forEach(([variableName, value]) => {
          setCSSVariable(element, variableName, value);
        });
      }
      ref.current = element;
    },
    [mergedTheme]
  );

  return [ref, setRef];
};

export default useThemePostCSS;
