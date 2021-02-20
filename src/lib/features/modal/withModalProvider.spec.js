import React from 'react';
import {render} from '@testing-library/react';
import {assertChildProps} from 'lib/utils/assertChildProps';
import withModalProvider from './withModalProvider';

const [DummyComponent, trackProps] = assertChildProps();

describe('withModalProvider', () => {
  afterEach(() => {
    trackProps.mockClear();
  });

  it('creates DatepickerProvider HOC', () => {
    const Component = withModalProvider(DummyComponent);
    const {asFragment} = render(<Component />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('forwards props to child', () => {
    const props = {
      foo: 'bar',
    };
    const Component = withModalProvider(DummyComponent);
    render(<Component {...props} />);
    expect(trackProps).toHaveBeenCalledTimes(1);
    expect(trackProps.mock.calls[0][0]).toStrictEqual(props);
  });
});
