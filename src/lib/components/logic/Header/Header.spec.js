import React from 'react';
import {render} from '@testing-library/react';
import createStoreProvider from 'lib/store';
import DatepickerContext from 'lib/features/datepicker/context';
import Header from './Header';

const mockReducer = jest.fn();

const selectedTimestamp = new Date(2020, 0, 12).getTime();
const todayTimestamp = new Date(2020, 0, 11).getTime();

const createStoreProviderWithState = state =>
  createStoreProvider({
    initialState: state,
    reducer: mockReducer,
    context: DatepickerContext,
  });

const MockComponent = jest.fn(() => <div>MockComponent</div>);

const Provider = createStoreProviderWithState({
  selectedTimestamp,
  todayTimestamp,
});

describe('Header', () => {
  beforeEach(() => {
    MockComponent.mockClear();
  });

  it('renders', () => {
    const {asFragment} = render(
      <Header title="Title" renderAs={MockComponent} />,
      {
        wrapper: ({children}) => <Provider>{children}</Provider>,
      }
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('transforms props', () => {
    render(<Header title="Title" renderAs={MockComponent} />, {
      wrapper: ({children}) => <Provider>{children}</Provider>,
    });
    expect(MockComponent.mock.calls[0][0]).toMatchSnapshot();
  });
});
