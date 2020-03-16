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

## `useThemePostCSS`
React hook, based on [callback ref](https://medium.com/@teh_builder/ref-objects-inside-useeffect-hooks-eb7c15198780), to inject your theme object as [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/var) into HTML element it makes reference to. `theme` prop should be Record-like plain object structure `Object.<string, string>`.

```js static
import React, {useRef, useEffect} from 'react';
import DatePicker, {useThemePostCSS} from 'react-calendar-toolkit';

<DatePicker theme={{'--varName': 'value'}} />  

// later

const Component = () => {
    const [targetElementRef, setRef] = useThemePostCSS();
    /* Do something with ref */
    useEffect(() => {
      /* Note: we are using first member of returned tuple */
      targetElementRef.current.focus()
    });
    return (
      /* Note: we are using second member of tuple*/
      <div ref={setRef}>
        {/*...*/}
      </div>
    ) 
}
```

By default `useThemePostCSS` applies theme object from props on the top of defaultTheme, if you don't need default theme, call it with theme object parameter.

```js static
useThemePostCSS(targetElement.current, {})
```

## `useScrollIntoView`

React hook to scroll `ref` target into view if parent container is visible.

```js static
import React, {useRef} from 'react';
import {useScrollIntoView} from 'react-calendar-toolkit';
import classes from './Year.module.css';

const Component = () => {
    const targetElement = useRef();
    /**
     * @function
     * @name useScrollIntoView
     * @description React hook. Scrolls element into viewport if parent container is visible.
     * @param {Object} ref - React ref
     * @param {Boolean} condition - Condition flag
     * @return {void}
     */
    useScrollIntoView(targetElement, `.${classes.scrollContainer}`, true)
    return (
      <div ref={targetElement}>
        {/*...*/}
      </div>
    ) 
}
```

