// SOURCE: https://www.youtube.com/watch?v=ZsT815JRtbE

// import { useCallback, useRef } from "react";

// export default function useIntersectionObserver(callback, deps) {
//   const observer = useRef(null);
//   const ref = useCallback(
//     (node) => {
//       if (deps) {
//         observer.current?.disconnect();
//         observer.current = new IntersectionObserver((entries) => {
//           if (entries[0].isIntersecting) {
//             callback();
//           }
//         });
//         if (node) {
//           observer.current.observe(node);
//         }
//       }
//     },
//     [deps, callback]
//   );

//   return ref;
// }

// IMPORVED

// useIntersectionObserver.js
import { useCallback, useRef } from "react";

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
        { root: null, rootMargin: "0px", threshold: 1 }
      );

      if (node) {
        observerRef.current.observe(node);
      }
    },
    [callback]
  );

  return ref;
}
