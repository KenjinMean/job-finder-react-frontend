// Modal Scroll Lock SOURCE: https://blog.logrocket.com/building-react-modal-module-with-react-router/
import React from "react";
import { createPortal } from "react-dom";
import { useModalScrollLock } from "../../hooks/useModalScrollLock";

export default function ModalUtil({ modalComponent }) {
  const mountElement = document.getElementById("overlays");

  const { setScrollLockOnModalActive } = useModalScrollLock();

  if (modalComponent) {
    setScrollLockOnModalActive();
  }

  return createPortal(<>{modalComponent && modalComponent}</>, mountElement);
}
