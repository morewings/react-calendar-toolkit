import React, {useReducer} from 'react';

export const createStoreProvider = ({initialState, reducer, context}) => ({
  children,
}) => {
  const {Provider} = context;
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Provider value={{state, dispatch}}>{children}</Provider>;
};
