## `useFormatDate`
React hook. Returns function, which formats date using provided locale. Use [date-fns format strings](https://date-fns.org/docs/format).

```js static
import {useFormatDate} from 'react-calendar-toolkit';
const Component = () => {
/**
   * Returns formatted date
   * @param {string} pattern - Formatting pattern
   * @param {Date} date - Date object to apply format
   * @return {string} Formatted date
   */
  const formatDate = useFormatDate();
  const date = formatDate('MMM do', new Date(2020, 0, 6)) // Jan 6th
  // ...  
}
```

## `useThemeContext`

React hook, returns theme object from component props.

```js static
import DatePicker, {useThemeContext} from 'react-calendar-toolkit';

<DatePicker theme={{foo: 'bar'}} />  

// later

const Component = () => {
/**
   * Returns theme object
   * @return {Object} Formatted date
   */
  const theme = useThemeContext(); // {foo: 'bar'}
}
```