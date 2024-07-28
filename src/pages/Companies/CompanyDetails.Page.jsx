import React, { Fragment, Suspense, lazy } from "react";

const LazyUserCompaniesComponent = lazy(() =>
  import("../../components/user/UserCompanies/UserCompanies.Component")
);

import { useSetPageTitle } from "../../hooks/useSetPageTitle";

export default function CompanyDetailsPage() {
  useSetPageTitle("Job Details");

  return (
    <Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <div>CompanyDetailsPage</div>
      </Suspense>
    </Fragment>
  );
}
