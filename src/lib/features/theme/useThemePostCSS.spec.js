import React from 'react';
import {render} from '@testing-library/react';
import {renderHook} from '@testing-library/react-hooks';
import defaultTheme from 'lib/utils/defaultTheme';
import useThemePostCSS from './useThemePostCSS';
import {Provider} from './withTheme';

const Component = ({themeOverride}) => {
  const {setRef, style} = useThemePostCSS(themeOverride);
  return (
    <div style={style} data-testid="styleContainer" ref={setRef}>
      Theme PostCSS
    </div>
  );
};

describe('useThemePostCSS', () => {
  it('sets default theme to provided HTMLElement', async () => {
    const {asFragment, getByTestId} = render(<Component />, {
      wrapper: ({children}) => <Provider>{children}</Provider>,
    });

    expect(asFragment()).toMatchSnapshot();

    Object.entries(defaultTheme).forEach(([key, value]) => {
      expect(
        getByTestId('styleContainer').style.getPropertyValue(`--${key}`)
      ).toBe(value);
    });
  });

  it('overrides default with custom theme when provided', async () => {
    const themeOverride = {
      foo: 'bar',
    };

    const {asFragment, getByTestId} = render(
      <Component themeOverride={themeOverride} />,
      {
        wrapper: ({children}) => <Provider>{children}</Provider>,
      }
    );

    expect(asFragment()).toMatchSnapshot();

    Object.entries(defaultTheme).forEach(([key]) => {
      expect(
        getByTestId('styleContainer').style.getPropertyValue(`--${key}`)
      ).toBe('');
    });

    Object.entries(themeOverride).forEach(([key, value]) => {
      expect(
        getByTestId('styleContainer').style.getPropertyValue(`--${key}`)
      ).toBe(value);
    });
  });

  it('overrides default with custom theme when provided', async () => {
    const themeOverride = {
      foo: 'bar',
      fiz: 'buz',
    };

    const propsOverride = {
      foo: 'baz',
    };

    const {asFragment, getByTestId} = render(
      <Component themeOverride={themeOverride} />,
      {
        wrapper: ({children}) => (
          <Provider theme={propsOverride}>{children}</Provider>
        ),
      }
    );

    expect(asFragment()).toMatchSnapshot();

    Object.entries(propsOverride).forEach(([key, value]) => {
      expect(
        getByTestId('styleContainer').style.getPropertyValue(`--${key}`)
      ).toBe(value);
    });
  });

  it('creates valid ref', () => {
    const element = document.createElement('div');
    const {result} = renderHook(() => useThemePostCSS(), {
      wrapper: ({children}) => <Provider>{children}</Provider>,
    });
    const {ref, setRef} = result.current;
    expect(result.current).toMatchSnapshot();
    setRef(element);
    expect(ref.current).toBe(element);
  });
});
