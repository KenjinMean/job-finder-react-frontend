import React from "react";

import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import MaxWidthWrapperUtil from "../utils/MaxWidthWrapper.Util";

export default function UserProfileLayout() {
  const { token } = useStateContext();

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <MaxWidthWrapperUtil>
      <Outlet />
    </MaxWidthWrapperUtil>
  );
}
