import React, {useRef} from 'react';
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
  it('renders');
});
