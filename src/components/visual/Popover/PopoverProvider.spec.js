import React from 'react';
import {InputMockProvider as Provider} from 'utils/testProvider';
import {render} from '@testing-library/react';
import PopoverProvider from './PopoverProvider';

const Datepicker = () => <div data-testid="datepicker">Datepicker</div>;
const Input = () => <div data-testid="input">Input</div>;
const Wrapper = ({children}) => <div data-testid="wrapper">{children}</div>;

const toggleDatepicker = jest.fn();

const defaultProps = {
  toggleDatepicker,
  isVisible: false,
  renderDatePickerAs: Datepicker,
  wrapPopoverWith: Wrapper,
};

describe('PopoverProvider', () => {
  it('renders without popover', () => {
    render(
      <PopoverProvider {...defaultProps}>
        <Input />
      </PopoverProvider>,
      {
        wrapper: ({children}) => <Provider>{children}</Provider>,
      }
    );
    expect(document.body).toMatchSnapshot();
  });

  it('renders with popover', () => {
    const props = {
      ...defaultProps,
      isVisible: true,
    };
    render(
      <PopoverProvider {...props}>
        <Input />
      </PopoverProvider>,
      {
        wrapper: ({children}) => <Provider>{children}</Provider>,
      }
    );
    expect(document.body).toMatchSnapshot();
  });
});
