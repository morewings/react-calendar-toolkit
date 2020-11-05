import React from 'react';
import {render} from '@testing-library/react';
import {renderHook} from '@testing-library/react-hooks';
import withTheme, {useThemeContext, Provider} from './withTheme';

const Mock = jest.fn(() => 'Mock');

describe('withTheme', () => {
  beforeEach(() => {
    Mock.mockClear();
  });

  it('returns valid React Component', () => {
    const Wrapped = withTheme(Mock);
    expect(Wrapped).toBeInstanceOf(Function);
    const {container} = render(<Wrapped />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('passes props to provided Component', () => {
    const Wrapped = withTheme(Mock);
    const props = {
      hello: 'world',
    };
    const theme = {
      foo: 'bar',
    };
    render(<Wrapped {...props} theme={theme} />);
    expect(Mock.mock.calls[0][0]).toEqual(props);
  });
});

describe('useLocaleContext', () => {
  it('returns empty object by default', () => {
    const {result} = renderHook(() => useThemeContext(), {
      wrapper: ({children}) => <Provider>{children}</Provider>,
    });

    expect(result.current).toStrictEqual({});
  });

  it('returns custom theme when set', () => {
    const customTheme = {
      foo: 'bar',
    };

    const {result} = renderHook(() => useThemeContext(), {
      wrapper: ({children}) => (
        <Provider theme={customTheme}>{children}</Provider>
      ),
    });

    expect(result.current).toBe(customTheme);
  });
});
