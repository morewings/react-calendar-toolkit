const noScroll = () => {
  const x = window.scrollX;
  const y = window.scrollY;
  window.scrollTo(x, y);
};

export default noScroll;
