/*  SOURCE https://reactrouter.com/en/main/components/scroll-restoration */
/* BUG: after sometime on the page the scroll reset do not work, solution is to open a new page */

import { useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { useModalScrollLock } from "../hooks/useModalScrollLock";

import Footer from "../components/footer/Footer.jsx";
import AppProviders from "../services/providers/AppProviders.jsx";
import HeaderComponent from "../components/header/Header.Component.jsx";
import { Helmet, HelmetProvider } from "react-helmet-async";
import CustomConsoleMessage from "../components/utils/CustomConsoleMessage/CustomConsoleMessage.jsx";

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

  const cspConfig = import.meta.env.VITE_CSP_POLICY || "";

  return (
    <AppProviders>
      <HelmetProvider>
        <Helmet>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="description"
            content="Search and apply for thousands of job listings in various industries. Find your next career opportunity with Job Finder."
          />
          <title>Job Finder</title>
          {/* Open Graph (OG) Meta Tags for Social Sharing */}
          <meta property="og:title" content="Job Finder" />
          <meta
            property="og:description"
            content="Find your next career opportunity with Job Finder. Search and apply for thousands of job listings in various industries."
          />
          <meta property="og:image" content="/src/assets/icons/favicon.png" />
          <meta property="og:url" content="URL_TO_YOUR_APP" />
          <meta property="og:type" content="website" />
          <meta httpEquiv="Content-Security-Policy" content={cspConfig} />
        </Helmet>

        <div
          ref={elementToScrollLockRef}
          className="grid min-h-[100dvh] grid-rows-[auto_1fr_auto] gap-5 bg-background-white font-primary text-content-black"
        >
          <CustomConsoleMessage />
          {!isAuthRoute && <HeaderComponent />}
          <Outlet />
          {!(isAuthRoute || isJobListing || isSearchPage) && <Footer />}
        </div>
      </HelmetProvider>
    </AppProviders>
  );
}
