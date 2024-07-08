import React, { Fragment, Suspense, lazy } from "react";

const LazyJobDetails = lazy(() =>
  import("../../components/jobs/JobDetails/JobDetails")
);

import { useSetPageTitle } from "../../hooks/useSetPageTitle";
import JobDetailsSkeleton from "./JobDetailsSkeleton";

export default function JobDetailsPage() {
  useSetPageTitle("Job Details");

  return (
    <Fragment>
      <Suspense fallback={<JobDetailsSkeleton />}>
        <LazyJobDetails />
      </Suspense>
    </Fragment>
  );
}
