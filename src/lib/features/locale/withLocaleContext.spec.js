import React from 'react';
import {render} from '@testing-library/react';
import {renderHook} from '@testing-library/react-hooks';
import defaultLocale from 'date-fns/locale/en-US';
import {assertChildProps} from 'lib/utils/assertChildProps';
import withLocaleContext, {
  useLocaleContext,
  Provider,
} from './withLocaleContext';

const [DummyComponent, trackProps] = assertChildProps();

describe('withLocaleContext', () => {
  beforeEach(() => {
    trackProps.mockClear();
  });

  it('returns valid React Component', () => {
    const Wrapped = withLocaleContext(DummyComponent);
    expect(Wrapped).toBeInstanceOf(Function);
    const {container} = render(<Wrapped />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('passes props to provided Component', () => {
    const Wrapped = withLocaleContext(DummyComponent);
    const props = {
      hello: 'world',
    };
    const customLocale = {
      foo: 'bar',
    };
    render(<Wrapped {...props} dateFnsLocale={customLocale} />);
    expect(trackProps.mock.calls[0][0]).toEqual(props);
  });
});

describe('useLocaleContext', () => {
  it('returns en-US locale by default', () => {
    const {result} = renderHook(() => useLocaleContext(), {
      wrapper: ({children}) => <Provider>{children}</Provider>,
    });

    expect(result.current).toBe(defaultLocale);
  });

  it('returns custom locale when set', () => {
    const customLocale = {
      foo: 'bar',
    };

    const {result} = renderHook(() => useLocaleContext(), {
      wrapper: ({children}) => (
        <Provider dateFnsLocale={customLocale}>{children}</Provider>
      ),
    });

    expect(result.current).toBe(customLocale);
  });
});
