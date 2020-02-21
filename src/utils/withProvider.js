import React from 'react';
import {Provider} from 'react-redux';
import store from '../store';

const withTheme = WrappedComponent => props => (
  <Provider store={store}>
    <WrappedComponent {...props} />
  </Provider>
);

export default withTheme;
