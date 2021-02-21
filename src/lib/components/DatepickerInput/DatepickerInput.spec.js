import React from 'react';
import {render} from '@testing-library/react';
import {InputMockProvider as Provider} from 'lib/utils/testProvider';
import {assertChildProps} from 'lib/utils/assertChildProps';
import DatepickerInput from './DatepickerInput';

const [Datepicker, DatepickerProps] = assertChildProps();
const [Input, InputProps] = assertChildProps();
const [PopoverProvider, PopoverProviderProps] = assertChildProps();
const [PopoverWrapper, PopoverWrapperProps] = assertChildProps();
const [ModalProvider, ModalProviderProps] = assertChildProps();
const [ModalWrapper, ModalWrapperProps] = assertChildProps();

const onDateSet = jest.fn();

const renderWithProps = (props = {}) =>
  render(
    <DatepickerInput
      renderDatepickerAs={Datepicker}
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

describe('Datepicker', () => {
  beforeEach(() => {
    onDateSet.mockClear();
    DatepickerProps.mockClear();
    InputProps.mockClear();
    PopoverProviderProps.mockClear();
    PopoverWrapperProps.mockClear();
    ModalProviderProps.mockClear();
    ModalWrapperProps.mockClear();
  });

  it('renders with Popover by default', () => {
    const {asFragment} = renderWithProps();
    expect(asFragment()).toMatchSnapshot();
    expect(PopoverProviderProps.mock.calls[0][0]).toMatchSnapshot();
  });

  it('renders with Modal if mode === `modal`', () => {
    const {asFragment} = renderWithProps({mode: 'modal'});
    expect(asFragment()).toMatchSnapshot();
    expect(ModalProviderProps.mock.calls[0][0]).toMatchSnapshot();
  });
});
