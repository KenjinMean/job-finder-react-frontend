import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useOverlaysStatesStore } from "../services/state/OverlaysStatesStore";

/**
 * Custom hook to detect "overlay" parameter in the URL
 * then return a boolean value for the specified overlay name
 * that can be used to conditionally render overlays
 * triggers the showing/hiding of modal
 *
 * @param {string} OverlayName - The name of the overlay to detect.
 * @returns {boolean} - Whether the specified overlay is active.
 *
 * @example
 *
 * // import useOverlayParamDetector
 * import useOverlayParamDetector from "path to useOverlayParamDetector"
 *
 * function App() {
 *
 * // use useOpenOverlay() to append "overlay" param to current url
 * const navigate = useNavigate()
 * <button onClick={() => navigate(useOpenOverlay("example-modal"))}>Open Example Modal</button>
 *
 * //detect if there is "example-modal" overlay parameter int the URL and conditionally render  <ExampleModal />
 * const isExampleModalActive = useOverlayParamDetector("overlay="example-modal")
 *
 *   return (
 *
 *     // app content
 *
 *     // make sure your modal is rendered on a react-portal
 *     {
 *       isExampleModalActive && <ExampleModal />
 *     }
 *   );
 * }
 */

export const useOverlayParamDetector = (OverlayName) => {
  const location = useLocation();

  const [isOverlayActive, setOverlayActive] = useState(false);

  useEffect(() => {
    const overlayParam = new URLSearchParams(location.search).get("overlay");
    const newIsOverlayActive = overlayParam === OverlayName;

    setOverlayActive(newIsOverlayActive);
  }, [location, location.search, OverlayName]);

  return isOverlayActive;
};

/**
 * Appends "overlay" parameter and value(overlay name) to current url and return the generated URL
 * This URl is used to toggle open/close modal
 *
 * @param {string} overlayName - The name of the overlay to include in the URL.
 * @returns {string} The generated URL with the overlay parameter.
 * @example
 * // Returns "http://example.com/current-path?overlay=example-overlay"
 *
 * // using anchor tags
 * <a href={useOpenOverlay("example-overlay")}>Open Example Modal</a>
 *
 * // using button click
 * const navigate = useNavigate()
 * <button onClick={() => navigate(useOpenOverlay("example-overlay"))}>Open Example Modal</button>
 */
export const useOpenOverlay = (overlayName, additionalParams) => {
  const overlayParam = `overlay=${overlayName}`;

  if (additionalParams) {
    const additionalQueryParam = Object.entries(additionalParams)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join("&");

    return `${window.location.pathname}?${overlayParam}&${additionalQueryParam}`;
  }
  return `${window.location.pathname}?${overlayParam}`;
};

/**
 * Removes the "overlay" parameter (both key and value) from the current URL
 * clears the "overlay" parameter from the url and returning the URL resulting in  closing of the specified modal
 *
 * @returns {string} The updated URL without the "overlay" parameter.
 */
// rename to useClose Modal Overlay
export const useCloseModalOverlay = () => {
  const currentUrl = new URL(window.location.href);
  const searchParams = new URLSearchParams(currentUrl.search);

  // Remove the "overlay" parameter
  searchParams.delete("overlay");

  return (
    currentUrl.pathname +
    (searchParams.toString() ? `?${searchParams.toString()}` : "")
  );
};

/**
 * A custom hook for managing the exit behavior of a modal within the ModalUtil component.
 * Checks if the user has modified data on a modal form (if the modal has an editable form).
 * If data has been changed, it shows an exit confirmation dialog; otherwise, it closes the modal.
 *
 * @param {boolean} isInputChanged - A boolean value that indicates whether data on the modal form (if editable) has been changed.
 * If true, it triggers an exit confirmation dialog.
 * @returns {function} - The handleModalClose function to be used as an event handler for modal closure.
 */
export const useModalExitHandler = (isInputChanged) => {
  const navigate = useNavigate();
  const { setConfirmDialogState } = useOverlaysStatesStore();

  const handleModalClose = () => {
    if (isInputChanged) {
      setConfirmDialogState(true);
    } else {
      navigate(useCloseModalOverlay());
    }
  };

  return handleModalClose;
};
