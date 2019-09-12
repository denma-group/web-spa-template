// Libraries
import{ useInView } from 'react-intersection-observer';
import { useState } from 'react';

export default function useElementInViewport(options) {
  const [ref, inView] = useInView(options);
  const [firstInView, setFirstInView] = useState(false);

  // Whenever inView changes to true for the first time,
  // set firstInView to true, this will trigger the CSS animation.
  // This will only happen once.
  if (!firstInView && inView) {
    setFirstInView(true);
  }

  return [ref, firstInView, inView];
}
