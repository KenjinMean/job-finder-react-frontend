// import React from "react";
// import { createPortal } from "react-dom";
// import TestModal from "../modals/user_modals/Test.Modal";
// import { useAtom } from "jotai";
// import { uiAtom } from "../../lib/state";

// export default function OverlaysUtil({ isOpen, setIsOpen }) {
//   const mountElement = document.getElementById("overlays");
//   const [ui] = useAtom(uiAtom);

//   return createPortal(<>{ui.modal && <TestModal />}</>, mountElement);
// }

import React from "react";
import { createPortal } from "react-dom";

export default function OverlaysUtil({ modalComponent }) {
  const mountElement = document.getElementById("overlays");

  return createPortal(<>{modalComponent && modalComponent}</>, mountElement);
}
