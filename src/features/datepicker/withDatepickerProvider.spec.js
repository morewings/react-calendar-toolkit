import React, {Fragment} from 'react';
import {render} from '@testing-library/react';
import withDatepickerProvider from './withDatepickerProvider';

const Child = jest.fn(() => <Fragment>Child</Fragment>);

describe('withDatepickerProvider', () => {
  beforeEach(() => {
    Child.mockClear();
  });

  it('creates DatepickerProvider HOC', () => {
    const Component = withDatepickerProvider(Child);
    const {asFragment} = render(<Component />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('forwards props to child', () => {
    const props = {
      foo: 'bar',
    };
    const Component = withDatepickerProvider(Child);
    render(<Component {...props} />);
    expect(Child).toHaveBeenCalledTimes(1);
    expect(Child.mock.calls[0][0]).toStrictEqual(props);
  });
});
