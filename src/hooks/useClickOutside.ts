import { RefObject, useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useClickOutside = (ref: RefObject<any>, handler: () => void) => {
  const events = ['mousedown', 'touchstart'];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const detectClickOutside = (event: any) => !ref?.current?.contains(event.target) && handler();

  useEffect(() => {
    events.forEach(e => {
      document.addEventListener(e, detectClickOutside);
    });

    return () => {
      events.forEach(e => {
        document.removeEventListener(e, detectClickOutside);
      });
    };
  });
};

export default useClickOutside;
