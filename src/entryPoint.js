import React from 'react';
import {Provider} from 'react-redux';
import DatePicker from 'components/DatePicker';
import store from './store';

const Wrapped = () => (
  <Provider store={store}>
    <DatePicker />
  </Provider>
);

export default Wrapped;
