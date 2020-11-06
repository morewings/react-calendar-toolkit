import React from 'react';
import {render} from '@testing-library/react';
import {DatepickerMockProvider as Provider} from 'lib/utils/testProvider';
import Selector from './Selector';

const MockComponent = jest.fn(() => <div>MockComponent</div>);

const renderWithProviderProps = (Component, props = {}) =>
  render(<Component />, {
    wrapper: ({children}) => <Provider {...props}>{children}</Provider>,
  });

const date = new Date(2012, 11, 12); // 12.12.2012

describe('Selector', () => {
  beforeEach(() => {
    MockComponent.mockClear();
  });

  it('renders', () => {
    const props = {
      renderAs: MockComponent,
      todayTimestamp: date.getTime(),
      selectedTimestamp: date.getTime(),
      startDate: new Date(2011, 11, 12),
      endDate: new Date(2015, 11, 12),
      visibleTimestamp: date.getTime(),
      precision: 'day',
    };

    const {asFragment} = renderWithProviderProps(() => <Selector {...props} />);
    expect(asFragment()).toMatchSnapshot();
    expect(MockComponent.mock.calls[0][0]).toMatchSnapshot();
  });
});
