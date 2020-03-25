import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {DatepickerMockProvider as Provider} from 'utils/testProvider';
import DatePicker from './DatePicker';

const onDateSet = jest.fn();

describe('DatePicker', () => {
  beforeEach(() => {
    onDateSet.mockClear();
  });

  it('renders', () => {
    const {asFragment} = render(<DatePicker onDateSet={onDateSet} />, {
      wrapper: ({children}) => <Provider>{children}</Provider>,
    });
    expect(asFragment()).toMatchSnapshot();
  });
});
