import React, { Fragment, Suspense, lazy } from "react";

const JobDetailsComponent = lazy(() =>
  import("../components/jobs/JobDetails.Component")
);

import { useSetPageTitle } from "../hooks/useSetPageTitle";
import JobDetailSkeletonUtil from "../components/utils/LoadersSpinners/JobDetailSkeleton.Util";

export default function JobDetailsPage() {
  useSetPageTitle("Job Details");

  return (
    <Fragment>
      <Suspense fallback={<JobDetailSkeletonUtil />}>
        <JobDetailsComponent />
      </Suspense>
    </Fragment>
  );
}
