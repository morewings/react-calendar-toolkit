import React from 'react';
import {DatepickerMockProvider as Provider} from 'utils/testProvider';
import {fireEvent, render} from '@testing-library/react';
import Input from './Input';

const props = {
  toggleDatepicker: jest.fn(),
  value: 'value',
  date: new Date(2020, 0, 10),
  onChange: jest.fn(),
};

describe('Header', () => {
  beforeEach(() => {
    props.toggleDatepicker.mockClear();
  });

  it('renders', () => {
    const {asFragment} = render(<Input {...props} />, {
      wrapper: ({children}) => <Provider>{children}</Provider>,
    });
    expect(asFragment()).toMatchSnapshot();
  });

  it('handles click event', () => {
    const {getByDisplayValue} = render(<Input {...props} />, {
      wrapper: ({children}) => <Provider>{children}</Provider>,
    });
    fireEvent.click(getByDisplayValue(props.value));
    expect(props.toggleDatepicker).toHaveBeenCalledTimes(1);
    expect(props.toggleDatepicker).toHaveBeenCalledWith(true);
  });
});
