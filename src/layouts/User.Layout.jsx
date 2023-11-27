import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

import { useAuthenticationStore } from "../services/state/AuthenticationStore";

import HeaderComponent from "../components/header/Header.Component";

import MaxWidthWrapperUtil from "../components/utils/MaxWidthWrapper.Util";

export default function UserProfileLayout() {
  const { token } = useAuthenticationStore();

  if (!token) {
    return <Navigate to="/auth/login" />;
  }

  return (
    <Fragment>
      <HeaderComponent />
      <main className="min-h-screen p-5 lg:px-10">
        <MaxWidthWrapperUtil>
          <Outlet />
        </MaxWidthWrapperUtil>
      </main>
    </Fragment>
  );
}
