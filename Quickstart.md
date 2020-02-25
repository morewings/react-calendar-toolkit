## Install
1. Install `react-calendar-toolkit` and peer-dependency `date-fns`.

    ```shell script
    yarn add react-calendar-toolkit date-fns@2
    ```
    ```shell script
    npm install --save react-calendar-toolkit date-fns@2
    ```
   
2. Use `Datepicker` or any other export inside your component. Don't forget to import default styles `react-calendar-toolkit/lib/default.css`. IE 11 compatible style is available at `react-calendar-toolkit/lib/ie.css`.

    ```js static
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
3. You can use `react-calendar-toolkit` with default theme or create custom one.