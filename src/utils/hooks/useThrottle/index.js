import { useState } from 'react';

export const useThrottle = (callback, limit) => {
  const [callbackTimeoutId, setCallbackTimeoutId] = useState(undefined);
  const [lastCallbackRunDate, setLastCallbackRunDate] = useState(undefined);

  return () => {
    if (!lastCallbackRunDate) {
      setLastCallbackRunDate(Date.now());
    } else {
      clearTimeout(callbackTimeoutId);
      setCallbackTimeoutId((
        setTimeout(() => {
          if ((Date.now() - lastCallbackRunDate) >= limit) {
            callback();
            setLastCallbackRunDate(Date.now());
          }
        }, limit - (Date.now() - lastCallbackRunDate))
      ));
    }
  };
};
