import React from "react";
import { Outlet } from "react-router-dom";
import MaxWidthWrapperUtil from "../../components/utils/MaxWidthWrapper.Util";

export default function JobsLayout() {
  return (
    <MaxWidthWrapperUtil>
      <Outlet />
    </MaxWidthWrapperUtil>
  );
}
