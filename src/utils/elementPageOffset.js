const elementPageOffset = el => {
  if (
    !el ||
    typeof window === 'undefined' ||
    typeof document === 'undefined'
  ) return { top: null, left: null };
  const {
    bottom,
    height,
    left,
    right,
    top,
    width,
  } = el.getBoundingClientRect();
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {
    pageTop: top + scrollTop,
    pageLeft: left + scrollLeft,
    // NOTE: Spreading the rect object does not work in ES6
    bottom,
    height,
    left,
    right,
    top,
    width,
  };
};

export default elementPageOffset;
