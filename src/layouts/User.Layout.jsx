import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

import HeaderComponent from "../components/header/Header.Component";

import MaxWidthWrapperUtil from "../components/utils/MaxWidthWrapper.Util";
import UserOverlayProvider from "../services/providers/UserOverlayProvider";

export default function UserProfileLayout() {
  return (
    <Fragment>
      <HeaderComponent />

      {/* UserOverlayProvider displays user related modal */}
      <UserOverlayProvider />
      <main className="min-h-screen p-0 sm:p-5 lg:px-10">
        <MaxWidthWrapperUtil>
          <Outlet />
        </MaxWidthWrapperUtil>
      </main>
    </Fragment>
  );
}
