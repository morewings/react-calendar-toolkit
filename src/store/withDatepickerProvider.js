import React from 'react';
import {DatepickerReducer, DatepickerContext} from 'features/datepicker';
import {createStoreProvider} from './createStoreProvider';

const Provider = createStoreProvider({
  initialState: {},
  reducer: DatepickerReducer,
  context: DatepickerContext,
});

const withDatepickerProvider = WrappedComponent => props => (
  <Provider>
    <WrappedComponent {...props} />
  </Provider>
);

export default withDatepickerProvider;
