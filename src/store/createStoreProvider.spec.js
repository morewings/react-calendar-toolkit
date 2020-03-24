import React, {Fragment} from 'react';
import {render} from '@testing-library/react';
import createStoreProvider from './createStoreProvider';

const Child = jest.fn(() => <Fragment>Child</Fragment>);

const reducer = () => {};

const Context = {
  Provider: jest.fn(({children}) => <Fragment>{children}</Fragment>),
};

describe('createStoreProvider', () => {
  beforeEach(() => {
    Context.Provider.mockClear();
  });

  it('creates Store Provider HOC', () => {
    const Provider = createStoreProvider({
      initialState: {},
      reducer,
      context: Context,
    });

    const {asFragment} = render(
      <Provider>
        <Child />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('attaches `state` and `dispatch` to Provider `value` prop', () => {
    const Provider = createStoreProvider({
      initialState: {},
      reducer,
      context: Context,
    });

    render(
      <Provider>
        <Child />
      </Provider>
    );

    expect(Context.Provider).toHaveBeenCalledTimes(1);
    expect(Context.Provider.mock.calls[0][0].value).toMatchSnapshot();
  });
});
