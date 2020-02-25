# React calendar toolkit

![Datepicker screenshot](./doc-assets/datepicker-screenshot.png)

## Description
`react-calendar-toolkit` (RCT) is a set of React Components capable of rendering various calendars, datepickers etc. 

### Motivation
There are many good datepickers on the market. Unfortunately, most of them are _style-opinionated_, so if you like logic of chosen datepicker, you are subscribing to the visual style of it. But your website or application style may be completely different. With RCT you don't have hack third-party CSS, you can write your own styled UI components and RCT will render them.

### Features
- Use your **custom UI components** to change look and feel to match your visual style.
- Has **default theme** in Material Design style.
- Supports **localization** (month and weekday names, start of the week) in `date-fns` compatible format. 63 languages supported. And you can create custom one.
- Uses `date-fns` as logic provider.
- Lightweight: adds just **~7kb** to your bundle.
- Has type definitions.
- Disable date: 
    ```js
    disableDate: ({isWeekend, precision, date}) => { // your logic }
    ```
- Highlight date:
    ```js
    highlightDate: ({isWeekend, precision, date}) => { // your logic }
    ```  
- Highlight weekends:
    ```js
    highlightWeekends: true|false
    ```

## Quickstart

 ```shell script
yarn add react-calendar-toolkit date-fns@2
```

Then use it like this:

```js
import React from 'react';
import DatePicker from 'react-calendar-toolkit'; // datepicker component
import 'react-calendar-toolkit/lib/default.css'; // styles

const Component = () => (
  <div>
    <DatePicker onDateSet={date => {console.log('date set', date)}} />
  </div>
);

export default Component;
``` 

## Development

### Available scripts

- `start` - starts application in development mode;
- `start-style` - starts `Styleguidist`;
- `build-rollup` - builds package;
- `test` - runs tests.


