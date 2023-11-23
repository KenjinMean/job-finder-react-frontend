// AUTH TEMPLATE SOURCE: https://codepen.io/owaiswiz/pen/jOPvEPB
import { Fragment, Suspense, lazy } from "react";

const RegisterComponent = lazy(() =>
  import("../components/auth/Register.Component")
);

import { PageTitleUtil } from "../components/utils/PageTitle.Util";
import AuthSkeletonUtil from "../components/utils/LoadersSpinners/AuthSkeleton.Util";

export default function RegisterPage() {
  return (
    <Fragment>
      <PageTitleUtil title="Register | JobFinder" />
      <Suspense fallback={<AuthSkeletonUtil />}>
        <RegisterComponent />
      </Suspense>
    </Fragment>
  );
}
