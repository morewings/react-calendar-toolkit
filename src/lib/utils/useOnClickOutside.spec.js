import React, {useRef} from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';
import useOnClickOutside from './useOnClickOutside';

const callBack = jest.fn();

const Component = () => {
  const ref = useRef();
  useOnClickOutside(ref, callBack);
  return (
    <div data-testid="parent">
      Parent
      <div data-testid="sibling">Sibling</div>
      <button data-testid="clickable" type="button" id="child" ref={ref}>
        Child
      </button>
    </div>
  );
};

describe('useOnClickOutside', () => {
  afterEach(() => {
    callBack.mockClear();
    cleanup();
  });

  it('renders', () => {
    const {asFragment} = render(<Component />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('does not trigger callback user clicks target element with mouse', () => {
    const {getByTestId} = render(<Component />);
    fireEvent.mouseDown(getByTestId('clickable'));
    expect(callBack).not.toHaveBeenCalled();
  });

  it('does not trigger callback user clicks target element with finger', () => {
    const {getByTestId} = render(<Component />);
    fireEvent.touchStart(getByTestId('clickable'));
    expect(callBack).not.toHaveBeenCalled();
  });

  it('triggers callback when user clicks outside target element with mouse', () => {
    const {getByTestId} = render(<Component />);
    fireEvent.mouseDown(getByTestId('sibling'));
    expect(callBack).toHaveBeenCalledTimes(1);
    fireEvent.mouseDown(getByTestId('parent'));
    expect(callBack).toHaveBeenCalledTimes(2);
  });

  it('triggers callback when user clicks outside target element with finger', () => {
    const {getByTestId} = render(<Component />);
    fireEvent.touchStart(getByTestId('sibling'));
    expect(callBack).toHaveBeenCalledTimes(1);
    fireEvent.touchStart(getByTestId('parent'));
    expect(callBack).toHaveBeenCalledTimes(2);
  });

  it('handles event listeners properly', () => {
    const addEventListener = jest.spyOn(document, 'addEventListener');
    const removeEventListener = jest.spyOn(document, 'addEventListener');
    const {unmount} = render(<Component />);
    expect(addEventListener).toHaveBeenCalledTimes(2);
    expect(addEventListener.mock.calls[0][0]).toBe('mousedown');
    expect(addEventListener.mock.calls[1][0]).toBe('touchstart');
    unmount();
    expect(removeEventListener).toHaveBeenCalledTimes(2);
    expect(removeEventListener.mock.calls[0][0]).toBe('mousedown');
    expect(removeEventListener.mock.calls[1][0]).toBe('touchstart');
    addEventListener.mockRestore();
    removeEventListener.mockRestore();
  });
});
