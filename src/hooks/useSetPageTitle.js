import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Custom hook to update the document title based on the provided title and current location.
 * @param {string} title - The title to be displayed in the document title.
 */
export function useSetPageTitle(title) {
  const location = useLocation();

  useEffect(() => {
    document.title = `${title} - JobFinder` || "JobFinder";
  }, [location, title]);
}
