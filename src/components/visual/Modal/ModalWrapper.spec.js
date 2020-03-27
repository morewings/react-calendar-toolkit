import React from 'react';
import {InputMockProvider as Provider} from 'utils/testProvider';
import {render, fireEvent} from '@testing-library/react';
import ModalWrapper from './ModalWrapper';

const toggleDatepicker = jest.fn();
const Mock = () => <div data-testid="modalContent">Mock</div>;
const wrapper = document.createElement('div');
wrapper.setAttribute('id', 'wrapper');

const sibling = document.createElement('div');
sibling.setAttribute('id', 'sibling');
document.body.appendChild(sibling);

describe('ModalWrapper', () => {
  beforeEach(() => {
    toggleDatepicker.mockClear();
  });

  it('renders', () => {
    const {container} = render(
      <ModalWrapper toggleDatepicker={toggleDatepicker}>
        <Mock />
      </ModalWrapper>,
      {
        container: document.body.appendChild(wrapper),
        wrapper: ({children}) => <Provider>{children}</Provider>,
      }
    );
    expect(container).toMatchSnapshot();
  });

  it('calls toggleDatepicker when clicked outside', () => {
    render(
      <ModalWrapper toggleDatepicker={toggleDatepicker}>
        <Mock />
      </ModalWrapper>,
      {
        container: document.body.appendChild(wrapper),
        wrapper: ({children}) => <Provider>{children}</Provider>,
      }
    );
    fireEvent.mouseDown(document.getElementById('sibling'));
    expect(toggleDatepicker).toHaveBeenCalledTimes(1);
    expect(toggleDatepicker).toHaveBeenCalledWith(false);
    fireEvent.touchStart(document.getElementById('sibling'));
    expect(toggleDatepicker).toHaveBeenCalledTimes(2);
    expect(toggleDatepicker).toHaveBeenLastCalledWith(false);
  });

  it('does not calls toggleDatepicker when clicked inside', () => {
    const {getByTestId} = render(
      <ModalWrapper toggleDatepicker={toggleDatepicker}>
        <Mock />
      </ModalWrapper>,
      {
        container: document.body.appendChild(wrapper),
        wrapper: ({children}) => <Provider>{children}</Provider>,
      }
    );
    fireEvent.mouseDown(getByTestId('modalContent'));
    expect(toggleDatepicker).not.toHaveBeenCalled();
    fireEvent.touchStart(getByTestId('modalContent'));
    expect(toggleDatepicker).not.toHaveBeenCalled();
  });
});
