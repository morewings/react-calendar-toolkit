import {useLayoutEffect} from 'react';

const useScrollIntoView = (element, condition) => {
  useLayoutEffect(() => {
    if (condition) {
      element.scrollIntoView();
    }
  });
};

export default useScrollIntoView;
