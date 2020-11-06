import React from 'react';
import {InputMockProvider as Provider} from 'lib/utils/testProvider';
import {render, fireEvent, act} from '@testing-library/react';
import PopoverWrapper from './PopoverWrapper';

const toggleDatepicker = jest.fn();
const Mock = () => <div data-testid="modalContent">Mock</div>;
const wrapper = document.createElement('div');
wrapper.setAttribute('id', 'wrapper');

const sibling = document.createElement('div');
sibling.setAttribute('id', 'sibling');
document.body.appendChild(sibling);

describe('PopoverWrapper', () => {
  beforeEach(() => {
    toggleDatepicker.mockClear();
  });

  it.each([['bottom'], ['top'], ['left'], ['right']])('renders', position => {
    const {container} = render(
      <PopoverWrapper position={position} toggleDatepicker={toggleDatepicker}>
        <Mock />
      </PopoverWrapper>,
      {
        container: document.body.appendChild(wrapper),
        wrapper: ({children}) => <Provider>{children}</Provider>,
      }
    );
    expect(container).toMatchSnapshot();
  });

  it('calls toggleDatepicker when clicked outside', () => {
    render(
      <PopoverWrapper position="bottom" toggleDatepicker={toggleDatepicker}>
        <Mock />
      </PopoverWrapper>,
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

  it('does not call toggleDatepicker when clicked inside', () => {
    const {getByTestId} = render(
      <PopoverWrapper position="bottom" toggleDatepicker={toggleDatepicker}>
        <Mock />
      </PopoverWrapper>,
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

  it('calls toggleDatepicker when scrolling', () => {
    render(
      <PopoverWrapper position="bottom" toggleDatepicker={toggleDatepicker}>
        <Mock />
      </PopoverWrapper>,
      {
        container: document.body.appendChild(wrapper),
        wrapper: ({children}) => <Provider>{children}</Provider>,
      }
    );
    act(() => {
      fireEvent.scroll(document);
    });

    expect(toggleDatepicker).toHaveBeenCalledTimes(1);
    expect(toggleDatepicker).toHaveBeenCalledWith(false);
  });
});
