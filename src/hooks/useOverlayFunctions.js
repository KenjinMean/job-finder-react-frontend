import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useOverlayStateStore } from "../services/state/OverlaysStatesStore";
import { dialogNames } from "../constants/DialogNames.Constants";

/**
 * Custom hook to detect "overlay" parameter in the URL,
 * then return a boolean value for the specified overlay name
 * that can be used to conditionally render overlays
 * triggers the showing/hiding of modal.
 * The opening of the modal functionality is handled by the
 * specific "OverlayProvider" (e.g., UserOverlayProvider).
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
 * // use useOpenModalOverlay() to append "overlay" param to current url
 * const navigate = useNavigate()
 * <button onClick={() => navigate(useOpenModalOverlay("example-modal"))}>Open Example Modal</button>
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
 * A custom hook to open a modal that's triggered by a URL parameter (overlay parameter).
 * Appends the "overlay" parameter and its value (overlay name from "ModalNames.Constants")
 * to the current URL and returns the generated URL. If navigated into, it results in opening
 * the specified modal. The opening of the modal functionality is handled by the
 * specific "OverlayProvider" (e.g., UserOverlayProvider).
 * NOTE: NOT really a usehook XD. for centralization purpose only
 *
 *
 * @param {string} overlayName - The name of the overlay to include in the URL.
 * @param {Object} additionalParams - Additional parameters to include in the URL.
 * @returns {string} The generated URL with the overlay parameter.
 * @example
 * // import useOpenModalOverlay
 * import { useOpenModalOverlay } from "path-to-useOpenModalOverlay"
 *
 * function App() {
 * const navigate = useNavigate();
 *
 * const handleOpenExampleModal = () => {
 *    const newUrl = useOpenModalOverlay("exampleModal");
 *    navigate(newUrl);
 * };
 *
 * return (
 *   <a href="#" onClick={handleOpenExampleModal}>
 *     Open Modal Dialog
 *   </a>
 *  );
 * }
 */
// export const useOpenModalOverlay = (overlayName, additionalParams) => {
//   const overlayParam = `overlay=${encodeURIComponent(overlayName)}`;
//   const currentSearchParams = new URLSearchParams(window.location.search);

//   // Add additional parameters
//   if (additionalParams) {
//     Object.entries(additionalParams).forEach(([key, value]) => {
//       currentSearchParams.set(key, encodeURIComponent(value));
//     });
//   }

//   const existingSearchParams = currentSearchParams.toString();
//   const separator = existingSearchParams ? "&" : "?";

//   return (
//     `${window.location.pathname}` +
//     (existingSearchParams ? `${window.location.search}${separator}` : `?`) +
//     `${overlayParam}`
//   );
// };

export const useOpenModalOverlay = (overlayName, additionalParams) => {
  const currentSearchParams = new URLSearchParams(window.location.search);

  // remove error parameter
  currentSearchParams.delete("error");

  // Check if the "overlay" parameter already exists
  if (currentSearchParams.has("overlay")) {
    // Replace the existing "overlay" parameter with the new one
    currentSearchParams.set("overlay", encodeURIComponent(overlayName));
  } else {
    // Add the "overlay" parameter if it doesn't exist
    currentSearchParams.append("overlay", encodeURIComponent(overlayName));
  }

  // Add additional parameters
  if (additionalParams) {
    Object.entries(additionalParams).forEach(([key, value]) => {
      currentSearchParams.set(key, value);
    });
  }

  const existingSearchParams = currentSearchParams.toString();
  const separator = existingSearchParams ? "?" : "&";

  return `${window.location.pathname}${separator}${existingSearchParams}`;
};

/**
 * A custom hook to close Modal that's closed using a URL parameter(overlay paramter).
 * Removes the "overlay" parameter (both key and value) from the current URL and returning the URL
 * and if navigated into result's in closing of the specified modal.
 * The closing of the modal functionality is handled by the
 * specific "OverlayProvider" e.g.(UserOverlayProvider).
 * NOTE: NOT really a usehook XD. for centralization purpose only
 *
 * @returns {string} The updated URL without the "overlay" parameter.
 *
 * @example
 * // import useCloseModalOverlay
 * import { useCloseModalOverlay } from "path-to-useCloseModalOverlay"
 *
 * function App() {
 * const navigate = useNavigate();
 *
 * const handleCloseModal = () => {
 *    const newUrl = useCloseModalOverlay("exampleModal");
 *    navigate(newUrl);
 * };
 *
 * return (
 *   <a href="#" onClick={handleCloseModal}>
 *     Close Modal Dialog
 *   </a>
 *  );
 * }
 */
export const useCloseModalOverlay = () => {
  const currentUrl = new URL(window.location.href);
  const searchParams = new URLSearchParams(currentUrl.search);

  // Remove the "overlay" and "error" parameters
  searchParams.delete("overlay");
  searchParams.delete("error");

  return (
    currentUrl.pathname +
    (searchParams.toString() ? `?${searchParams.toString()}` : "")
  );
};

/**
 * A custom hook for showing "ExitConfirmationDialog" when
 * closing a modal without saving otherwise, it closes the modal.
 *
 * @param {boolean} isInputChanged - A boolean value that indicates whether
 * data on the modal form (if editable) has been changed.
 * If true, it triggers an exit confirmation dialog.
 * @returns {function} - The handleModalClose function to be used as an event handler for modal closure.
 */
export const useModalExitHandler = (isInputChanged) => {
  const navigate = useNavigate();
  const openExitConfirmationDialog = useOpenDialog(
    dialogNames.exitConfirmationDialog.name
  );

  const handleModalClose = () => {
    if (isInputChanged) {
      openExitConfirmationDialog();
    } else {
      navigate(useCloseModalOverlay());
    }
  };

  return handleModalClose;
};

/**
 * A custom hook to Open a dialog.
 * this hook set the state of a specific dialog from "dialogStates" on "OverlyStateStore" to true
 * triggering the opening of a dialog on "DialogProvider"
 *
 * @param {string} dialogKey - The key(dialogName) identifying the dialog in the "dialogStates" on "OverlyStateStore".
 * @returns {function} openDialog() - A function that, when called, sets the state of the specified dialog to true.
 *
 * @example
 * // import useOpenDialog
 * import useOpenDialog from "path-to-useOpenDialog"
 *
 * function App() {
 *
 * const openDialog = useOpenDialog("exitConfirmationDialog");
 *
 *   return (
 *     <button onClick={openDialog}>
 *        Open Example Dialog
 *     </button>
 *   );
 * }
 */

export const useOpenDialog = (dialogKey) => {
  const { setDialogStates } = useOverlayStateStore();
  const openDialog = () => {
    setDialogStates(dialogKey, true);
  };

  return openDialog;
};

/**
 * A custom hook to Close a dialog.
 * this hook set the state of a specific dialog from "dialogStates" on "OverlyStateStore" to false
 * triggering the closing of a dialog on "DialogProvider"
 *
 * @param {string} dialogKey - The key(dialogName) identifying the dialog in the "dialogStates" on "OverlyStateStore".
 * @returns {function} closeDialog() - A function that, when called, sets the state of the specified dialog to false.
 * @example
 * // import useCloseDialog
 * import useCloseDialog from "path-to-useCloseDialog"
 *
 * function App() {
 *
 * const closeDialog = useCloseDialog("exitConfirmationDialog");
 *
 *   return (
 *     <button onClick={closeDialog}>
 *        Close Example Dialog
 *     </button>
 *   );
 * }
 */
export const useCloseDialog = (dialogKey) => {
  const { setDialogStates } = useOverlayStateStore();
  const closeDialog = () => {
    setDialogStates(dialogKey, false);
  };

  return closeDialog;
};
