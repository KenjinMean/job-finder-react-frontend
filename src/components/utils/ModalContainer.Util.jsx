/**
 * NOTE: ensure to use "modal-content" class to the component parent div/container
 * so component properly closes when clicekd outside. see DOCS below
 * The `ModalContainerUtil` component is a utility component for creating modal containers.
 * It handles the rendering of modal content and provides functionality to close the modal
 * when clicking outside the content area.
 *
 * @component
 * @example
 * // Import the component
 * import ModalContainerUtil from 'path-to/ModalContainerUtil';
 *
 * // Usage in a component
 *    const YourComponent = () => {
 *   // Your component logic here
 *
 *    return (
 *    <ModalContainerUtil navigateOnClose="/path-to-navigate">
 *
 *       <div className="modal-content">
 *          // Your modal content goes here
 *       </div>
 *     </ModalContainerUtil>
 *
 */

import React, { Fragment, useEffect, useState } from "react";
import { useModalScrollLock } from "../../hooks/useModalScrollLock";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";

export default function ModalContainerUtil({
  children,
  navigateOnClose,
  contentClassName,
  containerClassName,
}) {
  const navigate = useNavigate();

  // is ready prevents the click source from triggering handleOutsideClick on mount
  const [isReady, setIsReady] = useState(false);
  const { setScrollLockActive } = useModalScrollLock();
  const mountElement = document.getElementById("overlays");

  setScrollLockActive();

  useEffect(() => {
    setIsReady(true);

    const handleOutsideClick = (e) => {
      if (isReady && !e.target.closest(".modal-content")) {
        navigate(navigateOnClose);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
      setIsReady(false);
    };
  }, [isReady]);

  return createPortal(
    <Fragment>
      <div
        className={
          containerClassName
            ? containerClassName
            : "fixed left-0 right-0 z-50 flex items-center justify-center top-5"
        }
      >
        <div className={`modal-content ${contentClassName}`}>{children}</div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </Fragment>,
    mountElement
  );
}
