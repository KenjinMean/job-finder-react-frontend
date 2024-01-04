import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useOverlaysStatesStore } from "../services/state/OverlaysStatesStore";

/**
 * Custom hook to detect changes in the "overlay" parameter in the URL
 * and update the corresponding overlay state in the global store.
 *
 * @param {string} OverlayName - The name of the overlay to detect.
 * @returns {boolean} - Whether the specified overlay is active.
 *
 */

export const useOverlayParamDetector = (OverlayName) => {
  const { setUserModalStates, userModalStates } = useOverlaysStatesStore();
  const location = useLocation();

  useEffect(() => {
    const overlayParam = new URLSearchParams(location.search).get("overlay");
    const newIsOverlayActive = overlayParam === OverlayName;

    setUserModalStates({ [OverlayName]: newIsOverlayActive });
  }, [location, location.search, setUserModalStates, OverlayName]);

  return userModalStates[OverlayName];
};

/**
 * Generates a URL with an overlay parameter based on the provided overlay name.
 * The resulting URL includes the current pathname and the specified overlay parameter.
 * This URl is used to toggle modal components based on the overlay name
 *
 * @param {string} overlayName - The name of the overlay to include in the URL.
 * @returns {string} The generated URL with the overlay parameter.
 * @example
 * // Returns "http://example.com/current-path?overlay=exampleOverlay"
 * useCreateOverlayParamUrl("exampleOverlay");
 */
export const useCreateOverlayParamUrl = (overlayName) => {
  return `${window.location.pathname}?overlay=${overlayName}`;
};

/**
 * Removes the "overlay" parameter (both key and value) from the current URL
 * and returns the updated URL without it.
 *
 * @returns {string} The updated URL without the "overlay" parameter.
 */
export const useClearOverlayParamUrl = () => {
  const currentUrl = new URL(window.location.href);
  const searchParams = new URLSearchParams(currentUrl.search);

  // Remove the "overlay" parameter
  searchParams.delete("overlay");

  return (
    currentUrl.pathname +
    (searchParams.toString() ? `?${searchParams.toString()}` : "")
  );
};
