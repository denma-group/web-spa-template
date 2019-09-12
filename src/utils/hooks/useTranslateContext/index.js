// Libraries
import { useState, useEffect } from 'react';
import throttle from 'lodash/throttle';
import clamp from 'lodash/clamp';

const translateOffsetLimit = 100; // pixels
/*
	`useTranslateContent` takes a multiplier and returns the translateY value
*/
// Throtheled function that gets the Y translate value
const getTranslateYValue = (startingY, componentHeight, multipliersY, setTranslateYVal) => {
  const { scrollY, innerHeight } = window;
  // Checks if component is in view before doing calculations for performance
  if (
    scrollY + innerHeight + translateOffsetLimit >= (startingY - componentHeight) * 0.8 &&
    scrollY < (startingY + componentHeight) * 1.2 + translateOffsetLimit
  ) {
    // 'componentOffsetMultiplier' handles some weird cases when scrollY is less than the innerHeight
    const componentOffsetMultiplier = clamp(1 - scrollY / innerHeight, 0, 1);
    const relativeY =
      scrollY + innerHeight - startingY - componentOffsetMultiplier * (componentHeight / 2);

    const calculation = relativeY * -multipliersY;
    setTranslateYVal(calculation);
  }
};

export const useTranslateContent = (
  multipliersY,
  { startingY, componentHeight },
  isReady = true
) => {
  const [translateYVal, setTranslateYVal] = useState(0);

  // throttled for performance
  const throttled = throttle(
    () => getTranslateYValue(startingY, componentHeight, multipliersY, setTranslateYVal),
    100
  );
  useEffect(() => {
    if (isReady) {
      window.addEventListener('scroll', throttled);
      return () => window.removeEventListener('scroll', throttled);
    }
  }, [throttled, startingY, componentHeight, multipliersY, setTranslateYVal, isReady]);

  useEffect(() => {
    if (isReady) {
      throttled();
    }
    // Everytime the startingY or isReady change, we want to "manually" force the translate calculation
    // without the need of scrolling.
  }, [isReady, startingY]); // eslint-disable-line

  return { translateYVal };
};
