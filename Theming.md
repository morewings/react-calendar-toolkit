`Default UI` of RCT supports basic theming (colors, width, paddings and fonts). You can provide custom theme object, overriding default theme properties.

## `useThemePostCSS`
React hook to inject your theme object as [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/var) into containing element.

```js static
import DatePicker, {useThemePostCSS} from 'react-calendar-toolkit';

<DatePicker theme={{'--varName': 'value'}} />  

// later

const Component = () => {
    /** @function
     * @name useThemePostCSS
     * @description - React hook. Sets css variables from Context and defaultTheme
     * @param {HTMLElement} element - HTML element to contain set variables
     * @param {Object} [defaultTheme=defaults] - Default theme to override with context values
     * @return {Function} - Clean up
     */
    useThemePostCSS()
}
```

## CSS variables handling

### `setCSSVariable`
### `getCSSVariable`
### `removeCSSVariable`