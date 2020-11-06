import React from 'react';
import createStoreProvider from 'lib/store';
import DatepickerContext from './context';
import DatepickerReducer, {initialState} from './DatepickerReducer';

export const Provider = createStoreProvider({
  initialState,
  reducer: DatepickerReducer,
  context: DatepickerContext,
});

const withDatepickerProvider = WrappedComponent => props => (
  <Provider>
    <WrappedComponent {...props} />
  </Provider>
);

export default withDatepickerProvider;
