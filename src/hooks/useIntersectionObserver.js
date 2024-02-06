// SOURCE: https://www.youtube.com/watch?v=ZsT815JRtbE

import { useCallback, useRef } from "react";

/**
 * Custom hook for using Intersection Observer to trigger a callback when an element is in the viewport.
 *
 * @param {Function} callback - The callback function to be executed when the observed element is in the viewport.
 * @returns {Function} ref - The ref function to be attached to the element to be observed.
 */
export default function useIntersectionObserver(callback) {
  const observerRef = useRef(null);

  const ref = useCallback(
    (node) => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            callback();
            // Disconnect the observer to ensure the callback is called only once
            observerRef.current.disconnect();
          }
        },
        { root: null, rootMargin: "0px", threshold: 0.5 }
      );

      if (node) {
        observerRef.current.observe(node);
      }
    },
    [callback]
  );

  return ref;
}
