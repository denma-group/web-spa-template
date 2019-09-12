// Libraries
import { useEffect, useCallback } from 'react';

// Dependencies
import { mixColors } from 'utils/mixColors';
import debounce from 'lodash/debounce';

/**
 * `changeColorOnScroll` is a hook that will mix two colors when the on scroll event listener triggers,
 * depending on the current scroll position, total scroll height given, and the colors to be mixed.
 * The on scroll event listener callback is throttled and set at a `30ms` duration.
 * @param {[string, string] | [number, string][]} colors `colors` accepts an array of two colors, or an array of tuples
 * structured as `[heightBreakpoint, colors]`.
 * @param {{
 *  callback: (backgroundColor: string, bracketsTuple: [[number, string], [number, string]]) => void,
 *  scrollHeight: number,
 *  debounceLimit: number,
 *  shouldSort: boolean,
 *  setColorOnMount: boolean,
 *  mixRatioChannels: [boolean, boolean, boolean]
 * }} settings Settings, each argument will:
 * - `callback`: Callback which sends the current background color, and the bracket, if any, as arguments.
 * - `scrollHeight`: Total scroll height, defaults to the entire body's height.
 * - `debounceLimit`: Throttle limit, in milliseconds, defaults to `100`.
 * - `shouldSort`: Boolean that sorts the `colors` array of tuples by their height breakpoints,
 * from lower to higher. It defaults to false to save performance.
 * - `setColorOnMount`: Boolean that will run an initial setup during mount to change the background.
 * Defaults to `true`.
 * - `mixRatioChannels`: A 3-Tuple or triple boolean. Supports mixing by specific RBG channels
 * (e.g. only red, or only green and blue). Defaults to mixing all channels.
 */
function changeColorOnScroll(
  colors = [],
  {
    elementBackgroundRef = document.body,
    callback,
    currentHeight,
    scrollHeight,
    shouldSort = false,
    mixRatioChannels = [true, true, true]
  } = {}
) {
  const isTupleBreakpoints = Array.isArray(colors[0]);
  /**
   * If `colors` is an array of tuples, then we must mix the colors based on their
   * height breakpoints and which bracket `currentHeight` is at.
   */
  if (isTupleBreakpoints) {
    /**
     * Sorting `colors` tuples by their height breakpoints if `shouldSort` is true.
     */
    if (shouldSort) colors.sort((colorTwo, colorOne) => colorTwo[0] - colorOne[0]);
    // Declaring color two, which must be the color of the next bracket, or the same if it's the last bracket.
    const colorTwoTuple = colors.find(colorTuple => currentHeight <= colorTuple[0]) || colors[colors.length - 1];
    if (
      // If on the last bracket,
      currentHeight >= colorTwoTuple[0] &&
      // Or if the background color is already the last one,
      elementBackgroundRef.style.backgroundColor === colorTwoTuple[1]
      // Then simply set the last color as the mixed one then run the callback.
    ) {
      const mixedColor = colorTwoTuple[1];
      elementBackgroundRef.style.backgroundColor = mixedColor; // eslint-disable-line
      if (callback) {
        callback({
          mixedColor,
          mixRatio: 1,
          bracket: [colorTwoTuple, colorTwoTuple],
          currentHeight
        });
      }
    // Otherwise, mix the colors.
    } else {
      const indexOfColorTwo = colors.indexOf(colorTwoTuple);
      const colorOneTuple = colors[indexOfColorTwo - 1] || colors[0];
      /**
       * The mix ratio is basically at which percentage of the bracket the
       * current scroll height, or position, is at.
       */
      const mixRatio = ((currentHeight - colorOneTuple[0]) / (colorTwoTuple[0] - colorOneTuple[0])) || 0;
      const mixedColor = mixColors(
        [colorOneTuple[1], colorTwoTuple[1]],
        mixRatioNumberToTriple(mixRatio, mixRatioChannels)
      );
      elementBackgroundRef.style.backgroundColor = mixedColor; // eslint-disable-line
      /**
       * On top of sending `mixedColor` as an argument, we send `colorOneTuple`
       */
      if (callback) {
        callback({
          mixedColor,
          mixRatio: mixRatio > 1 ? 1 : mixRatio,
          bracket: [colorOneTuple, colorTwoTuple],
          currentHeight
        });
      }
    }
  /**
   * If `colors` is an array of strings, then we simply mix the two colors.
   */
  } else {
    const [colorOne, colorTwo] = colors;
    const mixRatio = currentHeight / scrollHeight;
    const mixedColor = mixColors(
      [colorOne, colorTwo],
      mixRatioNumberToTriple(mixRatio, mixRatioChannels)
    );
    elementBackgroundRef.style.backgroundColor = mixedColor; // eslint-disable-line
    if (callback) {
      callback({
        mixedColor,
        mixRatio: mixRatio > 1 ? 1 : mixRatio,
        color: mixedColor,
        currentHeight
      });
    }
  }
}

export function useOnScrollBgColor(
  colors = [],
  {
    elementBackgroundRef,
    callback,
    scrollHeight,
    shouldSort,
    mixRatioChannels,
  } = {},
  delay = 50
) {

  const listener = useCallback(
    debounce(
      () => {
        const newBodyOffset = document.body.getBoundingClientRect();
        changeColorOnScroll(
          // Colors from the Hook parameters.
          colors,
          {
            // Settings from the Hook parameters.
            elementBackgroundRef,
            callback,
            scrollHeight,
            shouldSort,
            mixRatioChannels,
            // Current scroll height from the event listener.
            currentHeight: -newBodyOffset.top,
          }
        );
      },
      delay,
      { maxWait: delay * 4 },
    ),
    [colors]
  );

  // Running the handler once during the initial mount to paint the background.
  useEffect(() => {
    if (document !== 'undefined') {
      listener();
      const elementBackground = elementBackgroundRef || document.body;
      elementBackground.style.transition = `background-color ${delay * 4}ms ease`;
    }
  }, []);

  useEffect(() => {
    window.addEventListener(
      'scroll',
      listener,
      {
        capture: true,
        passive: true
      }
    );
    return () => {
      window.removeEventListener(
        'scroll',
        listener,
        {
          capture: true,
          passive: true
        }
      );
    };
  }, [listener]);
}

/**
 * `mixRatioNumberToTriple` worker function to support mixing by
 * specific RBG channels (e.g. only red, or only green and blue).
 */
const mixRatioNumberToTriple = (mixRatio, mixRatioChannels) => {
  /**
   * Capped at 1 for whenever `currentHeight` is higher than `scrollHeight`.
   * Mix ratio is capped at 1 i more ofthen than not, redundant, if using height
   * breakpoints, ince it should never happen, but just in case.
   */
  const ratio = mixRatio > 1 ? 1 : mixRatio;
  return (
    [
      mixRatioChannels[0] ? ratio : 0,
      mixRatioChannels[1] ? ratio : 0,
      mixRatioChannels[2] ? ratio : 0
    ]
  );
};
