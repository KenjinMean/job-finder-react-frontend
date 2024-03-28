import React, { Fragment, Suspense, lazy } from "react";

const OTPSuccessComponent = lazy(() =>
  import("../components/auth/OTPSuccess.Component")
);

import { useSetPageTitle } from "../hooks/useSetPageTitle";
import AuthSkeletonUtil from "../components/utils/LoadersSpinners/AuthSkeleton.Util";

export default function OTPSuccessPage() {
  useSetPageTitle("OTP Verification Success");
  return (
    <Fragment>
      <Suspense fallback={<AuthSkeletonUtil />}>
        <OTPSuccessComponent />
      </Suspense>
    </Fragment>
  );
}
