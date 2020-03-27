import React from 'react';
import {DatepickerMockProvider as Provider} from 'utils/testProvider';
import {render, fireEvent} from '@testing-library/react';
import Selector from './Selector';

const defaultProps = {
  selectedDate: new Date(2012, 11, 12),
  todayDate: new Date(2012, 11, 11),
  setPrecision: jest.fn(),
  decrementMonth: jest.fn(),
  incrementMonth: jest.fn(),
  precision: 'day',
  monthStepperLabels: {
    incrementMonthLabel: 'incrementMonthLabel',
    decrementMonthLabel: 'decrementMonthLabel',
  },
  visibleDate: new Date(2012, 11, 10),
};

describe('Selector', () => {
  beforeEach(() => {
    defaultProps.setPrecision.mockClear();
    defaultProps.decrementMonth.mockClear();
    defaultProps.incrementMonth.mockClear();
  });

  it.each([['day'], ['month'], ['year']])('renders', precision => {
    const props = {
      ...defaultProps,
      precision,
    };
    const {asFragment} = render(<Selector {...props} />, {
      wrapper: ({children}) => <Provider>{children}</Provider>,
    });
    expect(asFragment()).toMatchSnapshot();
  });

  it('sets year precision', () => {
    const {getByText} = render(<Selector {...defaultProps} />, {
      wrapper: ({children}) => <Provider>{children}</Provider>,
    });
    fireEvent.click(getByText(/2012/i));
    expect(defaultProps.setPrecision).toHaveBeenCalledTimes(1);
    expect(defaultProps.setPrecision).toHaveBeenCalledWith('year');
  });

  it.each([['day'], ['month']])('sets month precision', precision => {
    const props = {
      ...defaultProps,
      precision,
    };
    const {getByText} = render(<Selector {...props} />, {
      wrapper: ({children}) => <Provider>{children}</Provider>,
    });
    fireEvent.click(getByText(/December/i));
    expect(defaultProps.setPrecision).toHaveBeenCalledTimes(1);
    expect(defaultProps.setPrecision).toHaveBeenCalledWith('month');
  });

  it('increments and decrements month', () => {
    const {getByText} = render(<Selector {...defaultProps} />, {
      wrapper: ({children}) => <Provider>{children}</Provider>,
    });
    fireEvent.click(getByText(/⟨/i));
    expect(defaultProps.decrementMonth).toHaveBeenCalledTimes(1);
    fireEvent.click(getByText(/⟩/i));
    expect(defaultProps.incrementMonth).toHaveBeenCalledTimes(1);
  });
});
