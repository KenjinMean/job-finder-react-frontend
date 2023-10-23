import { useEffect, useRef } from "react";

export function useDebouncedCallback(callback, delay) {
  const timerIdRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timerIdRef.current) {
        clearTimeout(timerIdRef.current);
      }
    };
  }, []);

  return (...args) => {
    if (timerIdRef.current) {
      clearTimeout(timerIdRef.current);
    }

    timerIdRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}
