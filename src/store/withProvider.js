import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {rootReducer} from './store';

const withProvider = WrappedComponent => props => {
  const store = createStore(rootReducer);
  return (
    <Provider store={store}>
      <WrappedComponent {...props} />
    </Provider>
  );
};

export default withProvider;
