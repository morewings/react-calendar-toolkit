import {useEffect} from 'react';

const defaultOptions = {
  block: 'center',
  inline: 'center',
  behavior: 'smooth',
};

const useScrollIntoView = (ref, isSelected, options = defaultOptions) => {
  useEffect(() => {
    if (isSelected) {
      ref.current.scrollIntoView(options);
    }
  }, [ref, isSelected, options]);
};

export default useScrollIntoView;
