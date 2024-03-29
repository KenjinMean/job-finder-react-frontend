import { AnimatePresence } from "framer-motion";
import React, { Fragment } from "react";
import { GlobalModals } from "../../constants/ModalNames.Constants";
import { useModalParamDetector } from "../../hooks/useModalFunctions";

export default function GlobalModalProvider() {
  const overlayComponents = Object.keys(GlobalModals);

  const overlayDetectionMap = overlayComponents.reduce((acc, key) => {
    acc[key] = useModalParamDetector(GlobalModals[key].name);
    return acc;
  }, {});

  return (
    <Fragment>
      <AnimatePresence mode="wait">
        {overlayComponents.map((key) => {
          const isOverlayActive = overlayDetectionMap[key];

          return (
            isOverlayActive &&
            React.createElement(GlobalModals[key].component, {
              key: GlobalModals[key].name,
            })
          );
        })}
      </AnimatePresence>
    </Fragment>
  );
}
