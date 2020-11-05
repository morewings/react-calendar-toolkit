import React, {Fragment} from 'react';
import {render} from '@testing-library/react';
import withModalProvider from './withModalProvider';

const Child = jest.fn(() => <Fragment>Child</Fragment>);

describe('withModalProvider', () => {
  beforeEach(() => {
    Child.mockClear();
  });

  it('creates DatepickerProvider HOC', () => {
    const Component = withModalProvider(Child);
    const {asFragment} = render(<Component />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('forwards props to child', () => {
    const props = {
      foo: 'bar',
    };
    const Component = withModalProvider(Child);
    render(<Component {...props} />);
    expect(Child).toHaveBeenCalledTimes(1);
    expect(Child.mock.calls[0][0]).toStrictEqual(props);
  });
});
