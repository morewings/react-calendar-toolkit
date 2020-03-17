`ModalWrapper` component renders  wraps `Datepicker` inside modal. You can set change background color using `theme` prop.

```js
import React, {useRef} from 'react';
import {DatePickerInput, useOnClickOutside} from 'react-calendar-toolkit';

const style = {
  position: 'absolute',
  left:' 50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  border: '2px dashed red'
};

const theme = {
  '--modalBgColor': 'rgba(255, 255, 230, .5)',
};

const CustomWrapper = ({children, toggleDatepicker}) => {
    const ref = useRef();

    useOnClickOutside(ref, () => {
      toggleDatepicker(false);
    });

    return (
      <div ref={ref} style={style}>{children}</div>
    );
};

<DatePickerInput
  theme={theme}
  mode="modal"
  wrapModalWith={CustomWrapper}
  onDateSet={date => {console.log('date set', date);}}
/>
```


