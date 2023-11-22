import React, { Fragment, Suspense, lazy } from "react";

const JobDetailsComponent = lazy(() =>
  import("../components/jobs/JobDetails.Component")
);

import { PageTitleUtil } from "../components/utils/PageTitle.Util";
import JobDetailSkeletonUtil from "../components/utils/LoadersSpinners/JobDetailSkeleton.Util";

export default function JobDetailsPage() {
  return (
    <Fragment>
      <PageTitleUtil title="Job Details" />
      <Suspense fallback={<JobDetailSkeletonUtil />}>
        <JobDetailsComponent />
      </Suspense>
    </Fragment>
  );
}
