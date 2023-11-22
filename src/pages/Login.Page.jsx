// AUTH TEMPLATE SOURCE: https://codepen.io/owaiswiz/pen/jOPvEPB
import React, { Fragment, Suspense, lazy } from "react";

const LoginComponent = lazy(() => import("../components/auth/Login.Component"));

import { PageTitleUtil } from "../components/utils/PageTitle.Util";
import AuthSkeletonUtil from "../components/utils/LoadersSpinners/AuthSkeleton.Util";

export default function LoginPage() {
  return (
    <Fragment>
      <PageTitleUtil title="Login" />
      <Suspense fallback={<AuthSkeletonUtil />}>
        <LoginComponent />
      </Suspense>
    </Fragment>
  );
}
