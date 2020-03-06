`Default UI` of RCT supports basic theming (colors, width, paddings and fonts). You can provide custom theme object, overriding default theme properties.

## Example

```js
import DatePicker from 'react-calendar-toolkit';

/**
 * Default theme overrides
 * @typedef {Object.<string, string>} theme
 */
const theme = {
  '--bgColor': '#fffff0',
  '--headerBgColor': 'purple',
  '--entrySelectedColor': 'purple',
};

<DatePicker
  theme={theme}
  onDateSet={
    date => {
      console.log('date set', date);
    }}
  title="Demo datepicker" />
```


## Default theme

```js { "file": "./../src/utils/defaultTheme.js" }
```

## CSS variables handling

`RCT` exposes 3 helper functions to handle CSS variables inside your components - `setCSSVariable`, `getCSSVariable` and `removeCSSVariable`. Values will set or changed inside that specific Element context.

```js static
import React, {useRef} from 'react';
import {setCSSVariable, getCSSVariable, removeCSSVariable} from 'react-calendar-toolkit';

const Component = () => {
    const targetElement = useRef();
    /** @function
     * @name setCSSVariable
     * @description Set CSS variable
     * @param {HTMLElement} element - HTML element to contain variable
     * @param {string} variableName - variable name, should start with `--`
     * @param {string} value
     * @return {void}
     */
    setCSSVariable(targetElement.current, '--varName', 'value');

    /** @function
     * @name getCSSVariable
     * @description Get CSS variable value
     * @param {HTMLElement} element - HTML element to contain variable
     * @param {string} variableName - variable name, should start with `--`
     * @return {string}
     */
    getCSSVariable(targetElement.current, '--varName'); // 'value'

    /** @function
     * @name removeCSSVariable
     * @description Remove CSS variable
     * @param {HTMLElement} element - HTML element to contain variable
     * @param {string} variableName - variable name, should start with `--`
     * @return {void}
     */
    removeCSSVariable(targetElement.current, '--varName');
    return (
      <div ref={targetElement}>
        {/*...*/}
      </div>
    ) 
}
```