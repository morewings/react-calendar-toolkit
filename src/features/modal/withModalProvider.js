import React from 'react';
import createStoreProvider from 'store';
import ModalContext from './context';
import ModalReducer, {initialState} from './ModalReducer';

export const Provider = createStoreProvider({
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
