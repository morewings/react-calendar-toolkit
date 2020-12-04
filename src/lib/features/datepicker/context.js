import {createContext, useContext} from 'react';

const DatepickerContext = createContext({});

export const useDatepickerContext = () => useContext(DatepickerContext);

export default DatepickerContext;
