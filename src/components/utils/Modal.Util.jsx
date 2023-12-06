// Modal Scroll Lock SOURCE: https://blog.logrocket.com/building-react-modal-module-with-react-router/
import React from "react";
import { createPortal } from "react-dom";
import { useModalScrollLock } from "../../hooks/useModalScrollLock";

/**
 * ModalUtil Component
 *
 * This component creates a portal for rendering modal content and handles
 *  scroll lock when the modal component is active.
 *
 * @component
 * @example
 * // In your React component
 * import ModalUtil from './ModalUtil';
 *
 * const MyComponent = () => {
 *   return (
 *     <ModalUtil>
 *       // Your modal content goes here
 *     </ModalUtil>
 *   );
 * }
 */

export default function ModalUtil({ children }) {
  const mountElement = document.getElementById("overlays");

  const { setScrollLockActive } = useModalScrollLock();

  // automatically disables scrollLock on modal active or onMount
  if (children) {
    setScrollLockActive();
  }

  return createPortal(<>{children}</>, mountElement);
}
