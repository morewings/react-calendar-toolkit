import React from 'react';
import {ModalReducer, ModalContext, initialState} from 'features/modal';
import createStoreProvider from './createStoreProvider';

const Provider = createStoreProvider({
  initialState,
  reducer: ModalReducer,
  context: ModalContext,
});

const withModalProvider = WrappedComponent => props => (
  <Provider>
    <WrappedComponent {...props} />
  </Provider>
);

export default withModalProvider;
