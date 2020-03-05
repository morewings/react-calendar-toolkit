`Default UI` of RCT supports basic theming (colors, width, paddings and fonts). You can provide custom theme object, overriding default theme properties.

## `useThemePostCSS`
React hook available to inject your theme object variables into containing element.

```js static
import DatePicker, {useThemeContext} from 'react-calendar-toolkit';

<DatePicker theme={{foo: 'bar'}} />  

// later

const Component = () => {
/**
   * Returns formatted date
   * @param {string} pattern - Formatting pattern
   * @param {Date} date - Date object to apply format
   * @return {string} Formatted date
   */
  const theme = useThemeContext(); // {foo: 'bar'}
}
```

## CSS variables handling

### `setCSSVariable`
### `getCSSVariable`
### `removeCSSVariable`