// UNUSED HOOK

import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

// FIX: Sometimes the restore scroll function is not working, but opening a new page resolves the problem

/**
 * A custom React hook that preserves and restores scroll position based on the provided routes.
 *
 * @param {string[]} preserveScrollRoutes - An array of route paths where the scroll position should be preserved.
 * @returns {{ scrollPositionRef: React.MutableRefObject<number> }} - An object containing the scroll position reference.
 *
 * @example
 *
 * // Usage in root component of the application
 * export default function AppLayout() {
 *   // Preserve scroll position for specific routes
 *   usePreserveScrollPositionForRoute([
 *     userAddSkillErrorPageRoute,
 *     userAddSkillSuccessPageRoute,
 *   ]);
 *
 *   // Render your component content
 *   return <div>hello</div>;
 * }
 */

const usePreserveScrollPositionForRoute = (preserveScrollRoutes) => {
  const scrollPositionRef = useRef(0);
  const location = useLocation();

  /**
   * Event handler to reset the scroll position to 0 when the page is refreshed.
   * @private
   */
  useEffect(() => {
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    // Check if the current route is in the list
    const shouldPreserveScrollPosition = preserveScrollRoutes.includes(
      location.pathname
    );

    if (shouldPreserveScrollPosition) {
      window.scrollTo(0, scrollPositionRef.current);
    } else {
      // Save the scroll position for routes where you want to scroll to the top
      scrollPositionRef.current = window.scrollY;
    }
  }, [location.pathname, preserveScrollRoutes]);

  return { scrollPositionRef };
};

export default usePreserveScrollPositionForRoute;
