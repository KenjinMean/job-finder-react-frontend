// AUTH TEMPLATE SOURCE: https://codepen.io/owaiswiz/pen/jOPvEPB
import React, { Fragment, Suspense, lazy } from "react";

const OTPSendComponent = lazy(() =>
  import("../components/auth/OTPSend.Component")
);

import { useSetPageTitle } from "../hooks/useSetPageTitle";
import AuthSkeletonUtil from "../components/utils/LoadersSpinners/AuthSkeleton.Util";

export default function OTPRequestPage() {
  useSetPageTitle("Login");
  return (
    <Fragment>
      <Suspense fallback={<AuthSkeletonUtil />}>
        <OTPSendComponent />
      </Suspense>
    </Fragment>
  );
}
