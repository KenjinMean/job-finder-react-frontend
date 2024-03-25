// AUTH TEMPLATE SOURCE: https://codepen.io/owaiswiz/pen/jOPvEPB
import React, { Fragment, Suspense, lazy } from "react";

const OTPVerificationComponent = lazy(() =>
  import("../components/auth/OTPVerification.Component")
);

import { useSetPageTitle } from "../hooks/useSetPageTitle";
import AuthSkeletonUtil from "../components/utils/LoadersSpinners/AuthSkeleton.Util";

export default function OTPVerificationPage() {
  useSetPageTitle("Login");
  return (
    <Fragment>
      <Suspense fallback={<AuthSkeletonUtil />}>
        <OTPVerificationComponent />
      </Suspense>
    </Fragment>
  );
}
