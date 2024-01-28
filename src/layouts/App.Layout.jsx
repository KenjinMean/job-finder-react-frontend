import { Fragment, useRef } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

import { jobRoutes, userRoutes } from "../constants/RoutesPath.Constants";

import { useModalScrollLock } from "../hooks/useModalScrollLock";
import DialogProvider from "../services/providers/DialogProvider.jsx";
import GlobalModalProvider from "../services/providers/GlobalModalProvider.jsx";

export default function AppLayout() {
  // lock app scrolling when a modal is active
  const elementToScrollLockRef = useRef();
  const { setElementToScrollLockRef } = useModalScrollLock();
  setElementToScrollLockRef(elementToScrollLockRef);

  return (
    <div
      ref={elementToScrollLockRef}
      className="bg-background-white font-primary text-content-black"
    >
      {/*  SOURCE https://reactrouter.com/en/main/components/scroll-restoration */}
      {/* BUG: after sometime on the page the scroll reset do not work, solution is to open a new page */}
      <ScrollRestoration
        getKey={(location, matches) => {
          const paths = [userRoutes.userProfilePage, jobRoutes.jobListingPage];
          return paths.includes(location.pathname)
            ? location.pathname
            : location.key;
        }}
      />

      <Outlet />
      <DialogProvider />
      <GlobalModalProvider />
    </div>
  );
}
