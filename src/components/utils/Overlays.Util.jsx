// Modal Scroll Lock SOURCE: https://blog.logrocket.com/building-react-modal-module-with-react-router/
import React from "react";
import { createPortal } from "react-dom";

export default function OverlaysUtil({ modalComponent }) {
  const mountElement = document.getElementById("overlays");

  return createPortal(<>{modalComponent && modalComponent}</>, mountElement);
}
