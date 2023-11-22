import { useRef } from "react";
import { Outlet } from "react-router-dom";

// https://reactrouter.com/en/main/components/scroll-restoration
import { ScrollRestoration } from "react-router-dom";

import { useModalScrollLock } from "../lib/hooks/useModalScrollLock";

export default function AppLayout() {
  const modalScrollLockRef = useRef();

  // lock scrolling when modal is active
  const { setModalParentRef } = useModalScrollLock();
  setModalParentRef(modalScrollLockRef);

  return (
    <div ref={modalScrollLockRef}>
      <ScrollRestoration />
      <Outlet />
    </div>
  );
}
