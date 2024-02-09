import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useOverlayStateStore } from "../services/state/OverlaysStatesStore";
import { dialogNames } from "../constants/DialogNames.Constants";

/* ----------------------------------------------------------- */
/**
 * Custom hook to detect if theres a modal parameter in the URL,
 * accepts the modal name and compares if it matches with the modal URL parameter value,
 *  then returns the result as a boolean value.
 *
 * @param {string} OverlayName - The name of the modal to detect.
 * @returns {boolean} - returns a boolean result
 *
 * @example
 * import useModalParamDetector from "path to useModalParamDetector"
 * function App() {
 *
 * // use useOpenModalParam() to open a modal using the URL param using an anchor tag or navigate with a button
 * <a href={useOpenModalParam("example-modal")}>Open Example Modal</a>
 *
 * // detect if there is a "modal" parameter with the "example-modal" value in the URL
 * // then returns a boolean that can be assigned to a variable and used to conditionally render a modal.
 * const isExampleModalActive = useModalParamDetector("example-modal");
 *
 *   return (
 *     // make sure your modal is rendered on a react-portal
 *     {
 *       isExampleModalActive && <ExampleModal />
 *     }
 *   );
 * }
 */
export const useModalParamDetector = (OverlayName) => {
  const location = useLocation();

  const [isOverlayActive, setOverlayActive] = useState(false);

  useEffect(() => {
    const overlayParam = new URLSearchParams(location.search).get("modal");
    const newIsOverlayActive = overlayParam === OverlayName;

    setOverlayActive(newIsOverlayActive);
  }, [location, location.search, OverlayName]);

  return isOverlayActive;
};

/* ----------------------------------------------------------- */
/**
 * A custom hook to open a modal that's triggered by a URL parameter (modal parameter).
 * Appends the "modal" parameter and its value (modal name from "ModalNames.Constants")
 * to the current URL and returns the generated URL. If navigated into, it results in opening
 * the specified modal. The opening of the modal functionality is handled by the
 * specific "OverlayProvider" (e.g., UserOverlayProvider).
 * NOTE: NOT really a usehook XD
 *
 * @param {string} overlayName - The name of the modal to include in the URL.
 * @param {Object} additionalParams - Additional parameters to include in the URL.
 * @returns {string} The generated URL with the modal parameter.
 * @example
 * // import useOpenModalParam
 * import { useOpenModalParam } from "path-to-useOpenModalParam"
 *
 * function App() {
 * const navigate = useNavigate();
 *
 * const handleOpenExampleModal = () => {
 *    const newUrl = useOpenModalParam("exampleModal");
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

export const useOpenModalParam = (overlayName, additionalParams) => {
  const currentSearchParams = new URLSearchParams(window.location.search);

  // remove error parameter
  currentSearchParams.delete("error");

  // Check if the "modal" parameter already exists
  if (currentSearchParams.has("modal")) {
    // Replace the existing "modal" parameter with the new one
    currentSearchParams.set("modal", encodeURIComponent(overlayName));
  } else {
    // Add the "modal" parameter if it doesn't exist
    currentSearchParams.append("modal", encodeURIComponent(overlayName));
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

/* ----------------------------------------------------------- */
/**
 * A custom hook to close Modal trigered using a URL parameter(modal paramter).
 * Removes the "modal" parameter (both key and value) from the current URL
 *
 * @returns {string} The updated URL without the "modal" parameter.
 *
 * @example
 * // import useCloseModalParam
 * import { useCloseModalParam } from "path-to-useCloseModalParam"
 *
 * function App() {
 *
 * const closeModal = useCloseModalParam()
 *
 * return (
 * <button onClick={() => closeModal}>Close Modal Dialog<button />
 *  );
 * }
 */
export const useCloseModalParam = () => {
  const navigate = useNavigate();

  // Return a function that closes the modal
  return () => {
    // Remove the "modal" and "error" parameters
    // const newSearchParams = new URLSearchParams(window.location.search);
    // newSearchParams.delete("modal");
    // newSearchParams.delete("error");

    const newSearchParams = new URLSearchParams();

    // Navigate to the new URL
    navigate({
      pathname: window.location.pathname,
      search: newSearchParams.toString(),
    });
  };
};
// export const useCloseModalParam = () => {
//   const currentUrl = new URL(window.location.href);
//   const searchParams = new URLSearchParams(currentUrl.search);

//   // Remove the "modal" and "error" parameters
//   searchParams.delete("modal");
//   searchParams.delete("error");

//   return (
//     currentUrl.pathname +
//     (searchParams.toString() ? `?${searchParams.toString()}` : "")
//   );
// };

/* ----------------------------------------------------------- */
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
  const openExitConfirmationDialog = useOpenDialog();
  const closeModal = useCloseModalParam();
  const handleModalClose = () => {
    if (isInputChanged) {
      openExitConfirmationDialog(dialogNames.exitConfirmationDialog.name);
    } else {
      closeModal();
    }
  };

  return handleModalClose;
};

/* ----------------------------------------------------------- */
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

export const useOpenDialog = () => {
  const { setDialogStates } = useOverlayStateStore();
  const openDialog = (dialogKey) => {
    setDialogStates(dialogKey, true);
  };

  return openDialog;
};

/* ----------------------------------------------------------- */
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
