import React, {useRef} from 'react';
import {mount} from 'enzyme';
import useOnClickOutside from './useOnClickOutside';

const callback = () => {};

const Component = () => {
  const ref = useRef();
  useOnClickOutside(ref, callback);
  return <div ref={ref} />;
};

describe('useOnClickOutside', () => {
  it('renders', () => {
    const component = mount(<Component />);
    expect(component).toMatchSnapshot();
  });

  it('adds and removes event listener to the document', () => {
    const addEventListener = jest.spyOn(document, 'addEventListener');
    const removeEventListener = jest.spyOn(document, 'addEventListener');
    const component = mount(<Component />);
    expect(addEventListener).toHaveBeenCalledTimes(2);
    expect(addEventListener.mock.calls[0][0]).toBe('mousedown');
    expect(addEventListener.mock.calls[1][0]).toBe('touchstart');
    component.unmount();
    expect(removeEventListener).toHaveBeenCalledTimes(2);
    expect(removeEventListener.mock.calls[0][0]).toBe('mousedown');
    expect(removeEventListener.mock.calls[1][0]).toBe('touchstart');
    addEventListener.mockRestore();
    removeEventListener.mockRestore();
  });
});
