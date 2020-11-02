import React, {useReducer} from 'react';

const createStoreProvider = ({initialState, reducer, context}) => ({
  // eslint-disable-next-line react/prop-types
  children,
}) => {
  const {Provider} = context;
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Provider value={{state, dispatch}}>{children}</Provider>;
};

export default createStoreProvider;
