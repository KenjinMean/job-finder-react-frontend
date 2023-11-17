import { useRef } from "react";
import { Outlet } from "react-router-dom";
// https://reactrouter.com/en/main/components/scroll-restoration
import { ScrollRestoration } from "react-router-dom";

import HeaderView from "../../components/views/Header.View";
import { useModalScrollLock } from "../../lib/hooks/useModalScrollLock";

export default function AppLayout() {
  const modalScrollLockRef = useRef();

  // set this component scroll to lock when modal is active
  const { setModalParentRef } = useModalScrollLock();
  setModalParentRef(modalScrollLockRef);
  //

  return (
    <div
      ref={modalScrollLockRef}
      className="flex flex-col min-h-screen bg-white"
    >
      <ScrollRestoration
      // getKey={(location, matches) => {
      //   return location.pathname;
      // }}
      />
      <HeaderView />

      <main className="min-h-screen p-5 lg:px-10">
        <Outlet />
      </main>

      <footer className="p-5 bg-white">Footer</footer>
    </div>
  );
}
