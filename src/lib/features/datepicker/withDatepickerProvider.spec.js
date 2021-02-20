import React from 'react';
import {render} from '@testing-library/react';
import {assertChildProps} from 'lib/utils/assertChildProps';
import withDatepickerProvider from './withDatepickerProvider';

const [DummyComponent, trackProps] = assertChildProps();

describe('withDatepickerProvider', () => {
  beforeEach(() => {
    trackProps.mockClear();
  });

  it('creates DatepickerProvider HOC', () => {
    const Component = withDatepickerProvider(DummyComponent);
    const {asFragment} = render(<Component />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('forwards props to child', () => {
    const props = {
      foo: 'bar',
    };
    const Component = withDatepickerProvider(DummyComponent);
    render(<Component {...props} />);
    expect(trackProps).toHaveBeenCalledTimes(1);
    expect(trackProps.mock.calls[0][0]).toStrictEqual(props);
  });
});
