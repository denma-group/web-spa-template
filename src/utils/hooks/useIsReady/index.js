import { useCallback, useEffect, useState } from 'react';

export const useIsReady = () => {
  const [isReady, setIsReady] = useState(false);

  const initialScroll = useCallback(() => {
    if (!isReady && window.scrollY === 0) {
      setIsReady(true);
    }
  }, [isReady]);

  useEffect(() => {
    if (window.scrollY === 0) {
      setIsReady(true);
    } else {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
      window.addEventListener('scroll', initialScroll);
    }

    return () => window.removeEventListener('scroll', initialScroll);
    // initialScroll is only supposed to run once.
  }, []); // eslint-disable-line

  return { isReady, setIsReady };
};
