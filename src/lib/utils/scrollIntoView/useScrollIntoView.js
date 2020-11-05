import {useEffect} from 'react';
import isInViewport from './isInViewport';
import scrollStop from './scrollStop';
import noScroll from './noScroll';

/**
 * @function
 * @name useScrollIntoView
 * @description React hook. Scrolls element into viewport if parent container is visible.
 * @param {Object} ref - React ref
 * @param {string} containerSelector - Selector of containing element: '.className'
 * @param {Boolean} condition - Condition flag
 * @return {void}
 */
const useScrollIntoView = (ref = {}, containerSelector, condition) => {
  useEffect(() => {
    const element = ref.current;
    const container = element && element.closest(containerSelector);

    if (element && condition && container) {
      container.addEventListener(
        'scroll',
        event => {
          window.addEventListener('scroll', noScroll);
        },
        false
      );
      scrollStop(() => {
        window.removeEventListener('scroll', noScroll);
      });
      isInViewport(container) &&
        element.scrollIntoView({
          block: 'nearest',
          inline: 'nearest',
        });
    }
    return () => {
      window.removeEventListener('scroll', noScroll);
    };
  }, [condition, containerSelector, ref]);
};

export default useScrollIntoView;
