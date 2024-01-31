// AUTH TEMPLATE SOURCE: https://codepen.io/owaiswiz/pen/jOPvEPB
import React, { Fragment, Suspense, lazy } from "react";

const LoginComponent = lazy(() => import("../components/auth/Login.Component"));

import { useSetPageTitle } from "../hooks/useSetPageTitle";
import AuthSkeletonUtil from "../components/utils/LoadersSpinners/AuthSkeleton.Util";

export default function LoginPage() {
  useSetPageTitle("Login");
  return (
    <Fragment>
      <Suspense fallback={<AuthSkeletonUtil />}>
        <LoginComponent />
      </Suspense>
    </Fragment>
  );
}
