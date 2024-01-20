import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

import HeaderComponent from "../components/header/Header.Component";

import MaxWidthWrapperUtil from "../components/utils/MaxWidthWrapper.Util";

export default function JobsLayout() {
  return (
    <Fragment>
      <HeaderComponent />
      <main className="min-h-screen p-5">
        <MaxWidthWrapperUtil>
          <Outlet />
        </MaxWidthWrapperUtil>
      </main>
    </Fragment>
  );
}
