import React from 'react';
import {render} from '@testing-library/react';
import {InputMockProvider as Provider} from 'utils/testProvider';
import DatePickerInput from './DatePickerInput';

const Datepicker = jest.fn(() => <div>DatePicker</div>);
const Input = jest.fn(() => <div>Input</div>);
const PopoverProvider = jest.fn(({children}) => (
  <div data-testid="Popover">{children}</div>
));
const PopoverWrapper = jest.fn(({children}) => (
  <div data-testid="PopoverWrapper">{children}</div>
));
const ModalProvider = jest.fn(({children}) => (
  <div data-testid="Modal">{children}</div>
));
const ModalWrapper = jest.fn(({children}) => (
  <div data-testid="ModalWrapper">{children}</div>
));

const onDateSet = jest.fn();

const renderWithProps = (props = {}) =>
  render(
    <DatePickerInput
      renderDatePickerAs={Datepicker}
      renderInputAs={Input}
      popoverProvider={PopoverProvider}
      wrapPopoverWith={PopoverWrapper}
      modalProvider={ModalProvider}
      wrapmodalWith={ModalWrapper}
      {...props}
      today={new Date(2020, 0, 10)}
      onDateSet={onDateSet}
    />,
    {
      wrapper: ({children}) => <Provider>{children}</Provider>,
    }
  );

describe('DatePicker', () => {
  beforeEach(() => {
    onDateSet.mockClear();
    Datepicker.mockClear();
    Input.mockClear();
    PopoverProvider.mockClear();
    PopoverWrapper.mockClear();
    ModalProvider.mockClear();
    ModalWrapper.mockClear();
  });

  it('renders with Popover by default', () => {
    const {asFragment} = renderWithProps();
    expect(asFragment()).toMatchSnapshot();
    expect(PopoverProvider.mock.calls[0][0]).toMatchSnapshot();
    expect(Input.mock.calls[0][0]).toMatchSnapshot();
  });

  it('renders with Modal if mode === `modal`', () => {
    const {asFragment} = renderWithProps({mode: 'modal'});
    expect(asFragment()).toMatchSnapshot();
    expect(ModalProvider.mock.calls[0][0]).toMatchSnapshot();
    expect(Input.mock.calls[0][0]).toMatchSnapshot();
  });
});
