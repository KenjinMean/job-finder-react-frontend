import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { dialogNames } from "../../constants/DialogNames.Constants";

// Mapping the "name" property from "dialogNames" in "DialogNames.Constants"
// to create an initial dialogStates object with all values set to false.
// This sets up an automatic store that updates when you add new dialogs to the Constants.
const initialDialogStates = Object.fromEntries(
  Object.entries(dialogNames).map(([key, { name }]) => [name, false])
);

/**
 * A custom Zustand store for managing dialog states.
 *
 * @typedef {Object} OverlayStateStore
 * @property {Object} dialogStates - The object containing the state of various dialogs.
 * @property {function} setDialogStates - Function to update the state of a specific dialog.
 *
 * @example
 * // Example: const stateOfExampleDialog = dialogStates[dialogNames.exampleDialog.name]
 */
export const useOverlayStateStore = create(
  devtools((set) => ({
    /**
     * When using this dialogStates, use the dialogNames.Constants object's
     * "name" property
     * Example: const stateOfExampleDialog = dialogStates[dialogNames.exampleDialog.name]
     */
    dialogStates: initialDialogStates,

    /**
     * When using this setDialogStates, refer to the dialogNames.Constants for its "dialogKey" parameter
     * Set the state of a specific dialog.
     *
     * @param {string} dialogKey - The key identifying the dialog in the dialogStates store.
     * @param {boolean} dialogState - The new state to set for the specified dialog.
     */
    setDialogStates: (dialogKey, dialogState) =>
      set((state) => ({
        dialogStates: {
          ...state.dialogStates,
          [dialogKey]: dialogState,
        },
      })),
  }))
);
