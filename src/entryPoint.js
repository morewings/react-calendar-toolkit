import React from 'react';
import {Provider} from 'react-redux';
import DatePicker from 'components/DatePicker';
import store from './store';

const Wrapped = props => (
  <Provider store={store}>
    <DatePicker {...props} />
  </Provider>
);

export default Wrapped;
