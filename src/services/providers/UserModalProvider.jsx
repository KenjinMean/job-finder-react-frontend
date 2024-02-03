import React, { Fragment } from "react";
import { AnimatePresence } from "framer-motion";

import { UserModals } from "../../constants/ModalNames.Constants";
import { useModalParamDetector } from "../../hooks/useModalFunctions";

/**
 * Component for displaying user modals triggered by URL parameters.
 * Uses Framer Motion's AnimatePresence for modal animations.
 *
 * @component
 */
const UserModalProvider = () => {
  // Get modal keys from UserModals object
  const overlayComponents = Object.keys(UserModals);

  // Create a map to track whether each modal is active based on URL parameters
  const overlayDetectionMap = overlayComponents.reduce((acc, key) => {
    acc[key] = useModalParamDetector(UserModals[key].name);
    return acc;
  }, {});

  return (
    <Fragment>
      <AnimatePresence mode="wait">
        {overlayComponents.map((key) => {
          // Check if the overlay is active using the overlayDetectionMap
          const isOverlayActive = overlayDetectionMap[key];

          // Conditionally render the overlay component if it's active
          return (
            // Create the overlay component dynamically using UserModals[key].component
            isOverlayActive &&
            React.createElement(UserModals[key].component, {
              key: UserModals[key].name,
            })
          );
        })}
      </AnimatePresence>
    </Fragment>
  );
};

export default UserModalProvider;
