import React from 'react';
import {render} from '@testing-library/react';
import {assertChildProps} from 'lib/utils/assertChildProps';
import createStoreProvider from 'lib/store/createStoreProvider';

const [DummyComponent, trackProps] = assertChildProps();

const reducer = () => {};

const Context = {
  Provider: DummyComponent,
};

describe('createStoreProvider', () => {
  beforeEach(() => {
    trackProps.mockClear();
  });

  it('creates Store Provider HOC', () => {
    const Provider = createStoreProvider({
      initialState: {},
      reducer,
      context: Context,
    });

    const {asFragment} = render(
      <Provider>
        <DummyComponent />
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
        <DummyComponent />
      </Provider>
    );

    expect(trackProps).toHaveBeenCalledTimes(1);
    expect(trackProps.mock.calls[0][0].value).toMatchSnapshot();
  });
});
