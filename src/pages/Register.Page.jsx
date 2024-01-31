// AUTH TEMPLATE SOURCE: https://codepen.io/owaiswiz/pen/jOPvEPB
import { Fragment, Suspense, lazy } from "react";

const RegisterComponent = lazy(() =>
  import("../components/auth/Register.Component")
);

import { useSetPageTitle } from "../hooks/useSetPageTitle";

import AuthSkeletonUtil from "../components/utils/LoadersSpinners/AuthSkeleton.Util";

export default function RegisterPage() {
  useSetPageTitle("Register");
  return (
    <Fragment>
      <Suspense fallback={<AuthSkeletonUtil />}>
        <RegisterComponent />
      </Suspense>
    </Fragment>
  );
}
