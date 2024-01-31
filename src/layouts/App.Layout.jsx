/*  SOURCE https://reactrouter.com/en/main/components/scroll-restoration */
/* BUG: after sometime on the page the scroll reset do not work, solution is to open a new page */

import { useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { useModalScrollLock } from "../hooks/useModalScrollLock";

import HeaderComponent from "../components/header/Header.Component.jsx";
import AppProviders from "../services/providers/AppProviders.jsx";

export default function AppLayout() {
  // lock app scrolling when a modal is active
  const elementToScrollLockRef = useRef();
  const { setElementToScrollLockRef } = useModalScrollLock();
  setElementToScrollLockRef(elementToScrollLockRef);

  const location = useLocation();

  const isAuthRoute = location.pathname.startsWith(
    "/job-finder-react-frontend/auth"
  );

  return (
    <AppProviders>
      <div
        ref={elementToScrollLockRef}
        className="flex flex-col min-h-screen gap-5 sm:gap-3 bg-background-white font-primary text-content-black"
      >
        {!isAuthRoute && <HeaderComponent />}
        <Outlet />
      </div>
    </AppProviders>
  );
}
