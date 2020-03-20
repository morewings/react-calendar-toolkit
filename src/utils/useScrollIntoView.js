import {useEffect} from 'react';

const scrollStop = callback => {
  let isScrolling;
  window.addEventListener(
    'scroll',
    () => {
      window.clearTimeout(isScrolling);
      // eslint-disable-next-line fp/no-mutation
      isScrolling = setTimeout(() => {
        callback();
      }, 66);
    },
    false
  );
};

const isInViewport = elem => {
  const distance = elem.getBoundingClientRect();
  return (
    distance.top >= 0 &&
    distance.left >= 0 &&
    distance.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    distance.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
};

const noScroll = () => {
  const x = window.scrollX;
  const y = window.scrollY;
  window.scrollTo(x, y);
};

/**
 * @function
 * @name useScrollIntoView
 * @description React hook. Scrolls element into viewport if parent container is visible.
 * @param {Object} ref - React ref
 * @param {string} containerSelector - Selector of conatining element: '.className'
 * @param {Boolean} condition - Condition flag
 * @return {void}
 */
const useScrollIntoView = (ref, containerSelector, condition) => {
  useEffect(() => {
    const element = ref.current;
    const container = element.closest(containerSelector);
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
