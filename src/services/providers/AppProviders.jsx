import React, { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import { ScrollRestoration } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { useThemeStore } from "../state/ThemeStore";
import { jobRoutes, userRoutes } from "../../constants/RoutesPath.Constants";

import DialogProvider from "./DialogProvider";
import { ThemeProvider } from "./ThemeProvider";
import GlobalModalProvider from "./GlobalModalProvider";
import AuthProviderProvider from "./AuthProvider.Provider";
import { QueryBoundaries } from "../../components/utils/QueryBoundaries.Util";

export default function AppProviders({ children }) {
  const { theme } = useThemeStore();

  const scrollRestorationGetKey = (location, matches) => {
    const paths = [userRoutes.userProfilePage, jobRoutes.jobListingPage];
    return paths.includes(location.pathname) ? location.pathname : location.key;
  };

  const toastContainerOptions = {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: false,
    draggable: false,
    pauseOnHover: false,
    theme: theme === "light" ? "light" : "dark",
  };

  // is creating this the best way? XD
  return (
    <Fragment>
      <QueryBoundaries>
        <ThemeProvider>
          <AuthProviderProvider>
            <ScrollRestoration getKey={scrollRestorationGetKey} />
            {children}
            <DialogProvider />
            <GlobalModalProvider />
          </AuthProviderProvider>
          <ToastContainer {...toastContainerOptions} />
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </ThemeProvider>
      </QueryBoundaries>
    </Fragment>
  );
}
