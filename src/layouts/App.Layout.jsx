/*  SOURCE https://reactrouter.com/en/main/components/scroll-restoration */
/* BUG: after sometime on the page the scroll reset do not work, solution is to open a new page */

import { useRef } from "react";
import {
  Outlet,
  ScrollRestoration,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { jobRoutes, userRoutes } from "../constants/RoutesPath.Constants";
import { useModalScrollLock } from "../hooks/useModalScrollLock";

import DialogProvider from "../services/providers/DialogProvider.jsx";
import HeaderComponent from "../components/header/Header.Component.jsx";
import { QueryBoundaries } from "../components/utils/QueryBoundaries.Util.jsx";
import GlobalModalProvider from "../services/providers/GlobalModalProvider.jsx";
import AuthProviderProvider from "../services/providers/AuthProvider.Provider.jsx";

export default function AppLayout() {
  // lock app scrolling when a modal is active
  const elementToScrollLockRef = useRef();
  const { setElementToScrollLockRef } = useModalScrollLock();
  setElementToScrollLockRef(elementToScrollLockRef);

  const navigate = useNavigate();
  const location = useLocation();

  const isAuthRoute = location.pathname.startsWith(
    "/job-finder-react-frontend/auth"
  );

  return (
    <div
      ref={elementToScrollLockRef}
      className="flex flex-col min-h-screen bg-background-white font-primary text-content-black"
    >
      <QueryBoundaries>
        <AuthProviderProvider>
          <ScrollRestoration
            getKey={(location, matches) => {
              const paths = [
                userRoutes.userProfilePage,
                jobRoutes.jobListingPage,
              ];
              return paths.includes(location.pathname)
                ? location.pathname
                : location.key;
            }}
          />

          {!isAuthRoute && <HeaderComponent />}
          <Outlet />

          <DialogProvider />
          <GlobalModalProvider />
        </AuthProviderProvider>
      </QueryBoundaries>
    </div>
  );
}
