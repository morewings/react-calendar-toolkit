import {useTheme} from 'css-vars-hook';
import defaults from 'lib/utils/defaultTheme';
import {useThemeContext} from './withTheme';

/** @function
 * @name useTheme
 * @description React hook. Sets css variables from Context and defaultTheme
 * @param {Object.<string, string>} [defaultTheme=defaults] Default theme to override with context values
 * @return {[Object, Function]}
 */
const useThemeFeature = (defaultTheme = defaults) => {
  const propsTheme = useThemeContext();
  const mergedTheme = {
    ...defaultTheme,
    ...propsTheme,
  };
  const {ref, setRef, style} = useTheme(mergedTheme);
  return {ref, setRef, style};
};

export default useThemeFeature;
