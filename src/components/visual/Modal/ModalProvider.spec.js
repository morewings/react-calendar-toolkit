import React from 'react';
import {InputMockProvider as Provider} from 'utils/testProvider';
import {render} from '@testing-library/react';
import ModalProvider from './ModalProvider';

const Datepicker = () => <div data-testid="datepicker">Datepicker</div>;
const Input = () => <div data-testid="input">Input</div>;
const Wrapper = ({children}) => <div data-testid="wrapper">{children}</div>;

const toggleDatepicker = jest.fn();

const defaultProps = {
  toggleDatepicker,
  isVisible: false,
  renderDatePickerAs: Datepicker,
  wrapModalWith: Wrapper,
};

describe('ModalProvider', () => {
  it('renders without modal', () => {
    render(
      <ModalProvider {...defaultProps}>
        <Input />
      </ModalProvider>,
      {
        wrapper: ({children}) => <Provider>{children}</Provider>,
      }
    );
    expect(document.body).toMatchSnapshot();
  });

  it('renders with modal', () => {
    const props = {
      ...defaultProps,
      isVisible: true,
    };
    render(
      <ModalProvider {...props}>
        <Input />
      </ModalProvider>,
      {
        wrapper: ({children}) => <Provider>{children}</Provider>,
      }
    );
    expect(document.body).toMatchSnapshot();
  });
});
