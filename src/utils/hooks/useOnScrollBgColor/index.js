// Libraries
import { useState, useEffect, useCallback, useRef } from 'react';

// Dependencies
import { useCallbackQueue, useThrottle } from 'use-utilities';
import { mixColors } from 'utils/mixColors';

/**
 * `useOnScrollBgColor` is a hook that will mix two colors when the on scroll event listener triggers,
 * depending on the current scroll position, total scroll height given, and the colors to be mixed.
 * The on scroll event listener callback is throttled and set at a `30ms` duration.
 * @param {[string, string] | [number, string][]} colors `colors` accepts an array of two colors, or an array of tuples
 * structured as `[heightBreakpoint, colors]`.
 * @param {{
 *  callback: (backgroundColor: string, bracketsTuple: [[number, string], [number, string]]) => void,
 *  scrollHeight: number,
 *  throttleLimit: number,
 *  shouldSort: boolean,
 *  setColorOnMount: boolean,
 *  mixRatioChannels: [boolean, boolean, boolean]
 * }} settings Settings, each argument will:
 * - `callback`: Callback which sends the current background color, and the bracket, if any, as arguments.
 * - `scrollHeight`: Total scroll height, defaults to the entire body's height.
 * - `throttleLimit`: Throttle limit, in milliseconds, defaults to `100`.
 * - `shouldSort`: Boolean that sorts the `colors` array of tuples by their height breakpoints,
 * from lower to higher. It defaults to false to save performance.
 * - `setColorOnMount`: Boolean that will run an initial setup during mount to change the background.
 * Defaults to `true`.
 * - `mixRatioChannels`: A 3-Tuple or triple boolean. Supports mixing by specific RBG channels
 * (e.g. only red, or only green and blue). Defaults to mixing all channels.
 */

export const useOnScrollBgColor = (
  colors = [],
  {
    callback,
    scrollHeight = document.body.clientHeight,
    throttleLimit = 100,
    shouldSort = false,
    setColorOnMount = true,
    mixRatioChannels = [true, true, true]
  } = {}
) => {
  const maxHeightRef = useRef(undefined);
  const [backgroundColor, setBackgroundColor] = useState(undefined);
  const [currentHeight, setCurrentHeight] = useState(undefined);

  /**
   * `onThrottledScrollHandler` is the callback sent to the on scroll event listener.
   * - If `colors` is an array of two colors, then they will simply be mixed depending on the
   * current scroll position, and the `scrollHeight` parameter.
   * - If `colors` is an array of tuples (`[heightBreakpoint, colors]`),  then the algorithm
   * will calculate in which height breakpoint the scroll position is currently at, then mix
   * the colors of its upper end and lower end of its bracket. If the scroll position is at the
   * last bracket, no mixing will be made to save performance.
   */
  const onThrottledScrollHandler = useCallback(() => {
    const currentScrollHeight = window.pageYOffset;
    const isTupleBreakpoints = Array.isArray(colors[0]);
    /**
     * If `colors` is an array of tuples, then we must mix the colors based on their
     * height breakpoints and which bracket `currentScrollHeight` is at.
     */
    if (isTupleBreakpoints) {
      /**
       * Sorting `colors` tuples by their height breakpoints if `shouldSort` is true.
       */
      if (shouldSort) colors.sort((colorTwo, colorOne) => colorTwo[0] - colorOne[0]);
      // Saving the maximum height to a React reference.
      [maxHeightRef.current] = colors[colors.length - 1];
      // Declaring color two, which must be the color of the next bracket, or the same if it's the last bracket.
      const colorTwoTuple =
        colors.find(colorTuple => currentScrollHeight <= colorTuple[0]) ||
        colors[colors.length - 1];
      // If on the last bracket, simply set the last color as the mixed one then run the callback.
      if (backgroundColor === colorTwoTuple[1]) {
        const mixedColor = colorTwoTuple[1];
        if (callback) {
          callback({
            mixedColor,
            mixRatio: 1,
            bracket: [colorTwoTuple, colorTwoTuple],
            currentScrollHeight
          });
        }
        // Otherwise, mix the colors.
      } else {
        const indexOfColorTwo = colors.indexOf(colorTwoTuple);
        const colorOneTuple = colors[indexOfColorTwo - 1] || colors[0];
        //  the maximum height to a React reference.
        [maxHeightRef.current] = colors[colors.length - 1];
        /**
         * The mix ratio is basically at which percentage of the bracket the
         * current scroll height, or position, is at.
         */
        const mixRatio =
          (currentScrollHeight - colorOneTuple[0]) / (colorTwoTuple[0] - colorOneTuple[0]) || 0;
        const mixedColor = mixColors(
          [colorOneTuple[1], colorTwoTuple[1]],
          mixRatioNumberToTriple(mixRatio, mixRatioChannels)
        );
        setBackgroundColor(mixedColor);
        /**
         * On top of sending `mixedColor` as an argument, we send `colorOneTuple`
         */
        if (callback) {
          callback({
            mixedColor,
            mixRatio: mixRatio > 1 ? 1 : mixRatio,
            bracket: [colorOneTuple, colorTwoTuple],
            currentScrollHeight
          });
        }
      }
      /**
       * If `colors` is an array of strings, then we simply mix the two colors.
       */
    } else {
      const [colorOne, colorTwo] = colors;
      const mixRatio = currentScrollHeight / scrollHeight;
      const mixedColor = mixColors(
        [colorOne, colorTwo],
        mixRatioNumberToTriple(mixRatio, mixRatioChannels)
      );
      setBackgroundColor(mixedColor);
      if (callback) {
        callback({
          mixedColor,
          mixRatio: mixRatio > 1 ? 1 : mixRatio,
          color: mixedColor,
          currentScrollHeight
        });
      }
    }
  }, [backgroundColor, callback, colors, scrollHeight, shouldSort, mixRatioChannels]);

  const shouldPush = (currentHeight || 0) <= maxHeightRef.current;
  const useHandleOnScroll = useCallbackQueue(onThrottledScrollHandler, throttleLimit, shouldPush);
  const [setupOnMount, setSetupOnMount] = useState(setColorOnMount);

  const currentHeightObserver = useThrottle(() => {
    const height = window.pageYOffset;
    setCurrentHeight(height);
  }, 250);

  useEffect(() => {
    window.addEventListener('scroll', currentHeightObserver);
    // Return clause.
    return () => window.removeEventListener('scroll', currentHeightObserver);
  }, [currentHeightObserver]);

  useEffect(() => {
    window.addEventListener('scroll', useHandleOnScroll);
    if (setupOnMount) {
      onThrottledScrollHandler();
      setSetupOnMount(false);
    }
    // Return clause.
    return () => window.removeEventListener('scroll', useHandleOnScroll);
  }, [useHandleOnScroll, onThrottledScrollHandler, setupOnMount, shouldPush]);

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor]);
};

/**
 * `mixRatioNumberToTriple` worker function to support mixing by
 * specific RBG channels (e.g. only red, or only green and blue).
 */
const mixRatioNumberToTriple = (mixRatio, mixRatioChannels) => {
  /**
   * Capped at 1 for whenever `currentScrollHeight` is higher than `scrollHeight`.
   * Mix ratio is capped at 1 i more ofthen than not, redundant, if using height
   * breakpoints, ince it should never happen, but just in case.
   */
  const ratio = mixRatio > 1 ? 1 : mixRatio;
  return [
    mixRatioChannels[0] ? ratio : 0,
    mixRatioChannels[1] ? ratio : 0,
    mixRatioChannels[2] ? ratio : 0
  ];
};
