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

export default scrollStop;
