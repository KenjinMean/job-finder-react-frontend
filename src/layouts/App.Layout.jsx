import { useRef } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

import {
  userAddSkillPageRoute,
  userAddSkillErrorPageRoute,
  userAddSkillSuccessPageRoute,
} from "../constants/routes";

import { useModalScrollLock } from "../hooks/useModalScrollLock";
import usePreserveScrollPositionForRoute from "../hooks/usePreserveScrollForRoute";

export default function AppLayout() {
  // lock app scrolling when a modal is active
  const elementToScrollLockRef = useRef();
  const { setElementToScrollLockRef } = useModalScrollLock();
  setElementToScrollLockRef(elementToScrollLockRef);

  usePreserveScrollPositionForRoute([
    userAddSkillErrorPageRoute,
    userAddSkillSuccessPageRoute,
  ]);

  return (
    <div ref={elementToScrollLockRef}>
      {/*  SOURCE https://reactrouter.com/en/main/components/scroll-restoration */}
      <ScrollRestoration
        getKey={(location, matches) => {
          const paths = [userAddSkillPageRoute];
          return paths.includes(location.pathname)
            ? location.pathname
            : location.key;
        }}
      />

      <Outlet />
    </div>
  );
}
