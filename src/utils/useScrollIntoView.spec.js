import React, {useRef} from 'react';
import {mount} from 'enzyme';
import useScrollIntoView from './useOnClickOutside';

// TODO: add '@testing-library/react'

const Component = () => {
  const ref = useRef();
  useScrollIntoView(ref, '#container', true);
  return (
    <div id="#container">
      <div ref={ref} />
    </div>
  );
};

describe('useOnClickOutside', () => {
  it('renders', () => {
    const component = mount(<Component />);
    expect(component).toMatchSnapshot();
  });
});
