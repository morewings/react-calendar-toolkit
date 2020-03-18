import {createContext, useContext} from 'react';

const DatePickerContext = createContext({});

export const useDatePickerContext = () => useContext(DatePickerContext);

export default DatePickerContext;
