// AUTH TEMPLATE SOURCE: https://codepen.io/owaiswiz/pen/jOPvEPB
import { Fragment, Suspense, lazy } from "react";

import { PageTitleUtil } from "../components/utils/PageTitle.Util";
import AuthSkeletonUtil from "../components/utils/LoadersSpinners/AuthSkeleton.Util";

const RegisterComponent = lazy(() =>
  import("../components/auth/Register.Component")
);

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
