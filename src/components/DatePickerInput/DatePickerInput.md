`DatepickerInput` renders provided `Input` with `Datepicker` attached.

```js
import {DatePickerInput} from 'react-calendar-toolkit';

<div>
    <div>Click inside input</div>
    <DatePickerInput onDateSet={date => {console.log('date set', date);}}/>
</div>
```

### `Datepicker` display mode

#### `popover`

Default mode. Position of popover is calculated dynamically to fit in the viewport.

```js
import {DatePickerInput} from 'react-calendar-toolkit';

<div>
    <div>Click inside input</div>
    <DatePickerInput
      mode="popover"
      onDateSet={date => {console.log('date set', date);}}
    />
</div>
```

#### `modal`

Renders `Datepicker` as modal window. More convenient for a small screen devices. 

```js
import {DatePickerInput} from 'react-calendar-toolkit';

<div>
    <div>Click inside input</div>
    <DatePickerInput
      mode="modal"
      onDateSet={date => {console.log('date set', date);}}
    />
</div>
```

### Set `Datepicker` props

Set attached `Datepicker` props via `datePickerProps` property. Same validation rules apply as for `Datepicker` itself, except `onDateSet` callback, `theme` and `dateFnsLocale`, which should be defined in the upper scope.

```js
import locale from 'date-fns/esm/locale/ru';
import {DatePickerInput} from 'react-calendar-toolkit';

const theme = {
  '--bgColor': '#fffff0',
  '--headerBgColor': 'purple',
  '--entrySelectedColor': 'purple',
};

<div>
    <div>Click inside input</div>
    <DatePickerInput
      datePickerProps={{'minPrecision': 'month'}}
      dateFnsLocale={locale}
      theme={theme}
      onDateSet={date => {console.log('date set', date);}}
    />
</div>
```

### `hideOnSelect`

```js
import {DatePickerInput} from 'react-calendar-toolkit';

<div>
    <div>Click inside input</div>
    <DatePickerInput
      hideOnSelect={false}
      onDateSet={date => {console.log('date set', date);}}
    />
</div>
```

### `formatPattern`

Use `date-fns` [format strings](https://date-fns.org/docs/format) to define, what is displayed inside `Input`.

```js
import {DatePickerInput} from 'react-calendar-toolkit';

const theme = {
  '--inputWidth': '160px'
};

<div>
    <div>Click inside input</div>
    <DatePickerInput
      theme={theme}
      formatPattern='GGGG yo Do'
      onDateSet={date => {console.log('date set', date);}}
    />
</div>
```

See [Input custom UI](/#!/Input%20custom%20UI/Input%20custom%20UI) section for more info.