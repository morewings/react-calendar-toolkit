import {useEffect} from 'react';

const defaultOptions = {
  block: 'nearest',
  inline: 'center',
  behavior: 'smooth',
};

const useScrollIntoView = (ref, condition, options = defaultOptions) => {
  useEffect(() => {
    if (condition) {
      ref.current.scrollIntoView(options);
    }
  }, [ref, condition, options]);
};

export default useScrollIntoView;
