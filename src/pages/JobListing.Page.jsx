import React, { Fragment, Suspense, lazy } from "react";

const JobListingComponent = lazy(() =>
  import("../components/jobs/JobListing.Component")
);

import { PageTitleUtil } from "../components/utils/PageTitle.Util";
import JobListSkeletonUtil from "../components/utils/LoadersSpinners/JobListSkeleton.Util";

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
