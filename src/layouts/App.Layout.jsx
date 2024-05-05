/*  SOURCE https://reactrouter.com/en/main/components/scroll-restoration */
/* BUG: after sometime on the page the scroll reset do not work, solution is to open a new page */

import { useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { useModalScrollLock } from "../hooks/useModalScrollLock";

import Footer from "../components/footer/Footer.jsx";
import AppProviders from "../services/providers/AppProviders.jsx";
import HeaderComponent from "../components/header/Header.Component.jsx";

export default function AppLayout() {
  // lock app scrolling when a modal is active
  const elementToScrollLockRef = useRef();
  const { setElementToScrollLockRef } = useModalScrollLock();
  setElementToScrollLockRef(elementToScrollLockRef);

  const location = useLocation();

  const isAuthRoute = location.pathname.startsWith("/auth");
  const isJobListing = location.pathname === "/";
  const isSearchPage =
    location.pathname === "/search" && location.search.includes("query");

  return (
    <AppProviders>
      {/* this div replaces the div on the App.jsx */}
      <div
        ref={elementToScrollLockRef}
        className="flex flex-col min-h-screen gap-2 overflow-hidden sm:gap-5 bg-background-white font-primary text-content-black"
      >
        {!isAuthRoute && <HeaderComponent />}
        <Outlet />
        {/* remove footer from auth login and register  */}
        {!(isAuthRoute || isJobListing || isSearchPage) && <Footer />}
      </div>
    </AppProviders>
  );
}
