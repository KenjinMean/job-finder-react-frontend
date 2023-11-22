import React, { Fragment, Suspense, lazy } from "react";

import { PageTitleUtil } from "../components/utils/PageTitle.Util";
import JobListSkeletonUtil from "../components/utils/LoadersSpinners/JobListSkeleton.Util";

const JobListingComponent = lazy(() =>
  import("../components/jobs/JobListing.Component")
);

export default function JobListingPage() {
  return (
    <Fragment>
      <PageTitleUtil title="Job Listings" />
      <Suspense fallback={<JobListSkeletonUtil />}>
        <JobListingComponent />
      </Suspense>
    </Fragment>
  );
}
