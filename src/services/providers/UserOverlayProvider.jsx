import React, { Fragment } from "react";
import { AnimatePresence } from "framer-motion";

import { UserModals } from "../../constants/ModalNames.Constants";
import { useOverlayParamDetector } from "../../hooks/useOverlayFunctions";

/**
 * React component for displaying user related overlays or modals,
 * it looks for an active "overlay" param in the url and displays matching overlay name,
 * Utilizes Framer Motion's AnimatePresence for animation of overlay components.
 *
 * @component
 * @example
 * // Import the UserOverlayProvider
 * import UserOverlayProvider from 'path-to/UserOverlayProvider';
 *
 * // Call UserOverlayProvider on the parent component where the modals will be called
 * function App() {
 *   return (
 *     <UserOverlayProvider />
 *   );
 * }
 *
 * @returns {ReactNode} - Rendered React node.
 */
const UserOverlayProvider = () => {
  const overlayComponents = Object.keys(UserModals);

  const overlayDetectionMap = overlayComponents.reduce((acc, key) => {
    acc[key] = useOverlayParamDetector(UserModals[key].name);
    return acc;
  }, {});

  return (
    <Fragment>
      <AnimatePresence mode="wait">
        {overlayComponents.map((key) => {
          const isOverlayActive = overlayDetectionMap[key];

          return (
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

export default UserOverlayProvider;
