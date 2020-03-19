## Install
1. Install `react-calendar-toolkit` and peer-dependency `date-fns`.

    ```shell script
    yarn add react-calendar-toolkit date-fns@2
    ```
    ```shell script
    npm install --save react-calendar-toolkit date-fns@2
    ```
   
2. Use `Datepicker` or any other export inside your component. Don't forget to import default styles `react-calendar-toolkit/lib/default.css`.

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
3. You can use `react-calendar-toolkit` with default theme or use **custom UI components** to change look and feel to match your visual style.

## IE 11 support

To make `RCT` work in IE11 you need to 

1. Install polyfills:

    ```shell script
      yarn add react-app-polyfill element-closest
    ```
    ```shell script
      npm install --save react-app-polyfill element-closest
    ```

2. Add following to the top of the entry point file:

    ```js static
    import 'react-app-polyfill/ie11';
    import 'react-app-polyfill/stable';
    import elementClosest from 'element-closest'
    
    elementClosest(window);
    ```

3. Import IE compatible styles from package:

    ```js static
    import 'react-calendar-toolkit/lib/ie.css';
    ```
   Note: IE11 doesn't support css variables, so default UI theming will not work, use Custom UI instead. 
4. Assuming you are using `create-react-app` or anything with `babel-present-env`, you will need to add `"IE 11"` to `browerslist` config.