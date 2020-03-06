[![Build Status](https://travis-ci.org/morewings/react-calendar-toolkit.svg?branch=master)](https://travis-ci.org/morewings/react-calendar-toolkit)
[![npm version](https://badge.fury.io/js/react-calendar-toolkit.svg)](https://www.npmjs.com/package/react-calendar-toolkit)
[![types included](https://badgen.net/npm/types/tslib)](https://github.com/morewings/react-calendar-toolkit/blob/master/types/index.d.ts)
[![types included](https://badgen.net/bundlephobia/minzip/react-calendar-toolkit)](https://bundlephobia.com/result?p=react-calendar-toolkit)


# React calendar toolkit

[![Datepicker screenshot](./doc-assets/datepicker-screenshot.png)](#)

## Description
`react-calendar-toolkit` (RCT) is a set of React Components capable of rendering various calendars, datepickers etc. See [full documentation](https://morewings.github.io/react-calendar-toolkit/).

### Motivation
There are many good datepickers on the market. Unfortunately, most of them are _style-opinionated_, so if you like logic of chosen datepicker, you are subscribing to the visual style of it. But your website or application style may be completely different. With RCT you don't have hack third-party CSS, you can write your own styled UI components and RCT will render them.

### Features
- Use your **custom UI components** to change look and feel to match your visual style.
- Has **default theme** in Material Design style.
- Default theme built with accessibility in mind.
- Uses `date-fns` as logic provider.
- Supports **localization** (month and weekday names, start of the week) in `date-fns` compatible format. 63 languages supported. And you can create custom one.
- Lightweight: adds just **~10kb** to your bundle.
- Has **type definitions** and **typescript** compatible.
- Disable any date: 
    ```js
    disableDate: ({isWeekend, precision, date}) => Boolean
    ```
- Highlight any date:
    ```js
    highlightDate: ({isWeekend, precision, date}) => Boolean
    ```  
- Highlight weekends:
    ```js
    highlightWeekends: Boolean
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

See [full documentation](https://morewings.github.io/react-calendar-toolkit/)

## Development

### Available scripts

- `start` - starts application in development mode;
- `start:docs` - starts `Styleguidist`;
- `build:docs` - builds `Styleguidist`;
- `build:rollup` - builds package;
- `lint` - runs linter;
- `fix` - runs linter with fix option enabled;
- `test` - runs tests.


