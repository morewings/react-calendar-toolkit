import React from 'react';
import {render} from '@testing-library/react';
import {DatepickerMockProvider as Provider} from 'utils/testProvider';
import customLocale from 'date-fns/locale/ru';
import WeekDays from './Weekdays';

const MockComponent = jest.fn(() => <div>MockComponent</div>);

const MockWrapper = jest.fn(({children}) => <div>{children}</div>);

const renderWithProviderProps = (Component, props = {}) =>
  render(<Component />, {
    wrapper: ({children}) => <Provider {...props}>{children}</Provider>,
  });

describe('WeekDays', () => {
  beforeEach(() => {
    MockComponent.mockClear();
  });

  it('renders with default locale', () => {
    const {asFragment} = renderWithProviderProps(() => (
      <WeekDays renderAs={MockComponent} wrapWith={MockWrapper} />
    ));
    expect(asFragment()).toMatchSnapshot();

    MockComponent.mock.calls.forEach(call => {
      expect(call[0]).toMatchSnapshot();
    });
  });

  it('renders with custom locale', () => {
    renderWithProviderProps(
      () => <WeekDays renderAs={MockComponent} wrapWith={MockWrapper} />,
      {dateFnsLocale: customLocale}
    );

    MockComponent.mock.calls.forEach(call => {
      expect(call[0]).toMatchSnapshot();
    });
  });
});
