import { useRef } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

import { userRoutes } from "../constants/RoutesPath.Constants";

import { useModalScrollLock } from "../hooks/useModalScrollLock";
import usePreserveScrollPositionForRoute from "../hooks/usePreserveScrollForRoute";
import DialogProvider from "../services/providers/DialogProvider.jsx";

export default function AppLayout() {
  // lock app scrolling when a modal is active
  const elementToScrollLockRef = useRef();
  const { setElementToScrollLockRef } = useModalScrollLock();
  setElementToScrollLockRef(elementToScrollLockRef);

  usePreserveScrollPositionForRoute([
    userRoutes.userAddSkillErrorPage,
    userRoutes.userAddSkillSuccessPage,
  ]);

  return (
    <div ref={elementToScrollLockRef}>
      {/*  SOURCE https://reactrouter.com/en/main/components/scroll-restoration */}
      {/* BUG: after sometime on the page the scroll reset do not work, solution is to open a new page */}
      <ScrollRestoration
        getKey={(location, matches) => {
          const paths = [userRoutes.userProfilePage];
          return paths.includes(location.pathname)
            ? location.pathname
            : location.key;
        }}
      />

      <Outlet />
      <DialogProvider />
    </div>
  );
}
