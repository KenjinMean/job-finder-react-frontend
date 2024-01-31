import React, { Fragment, Suspense, lazy } from "react";

const JobListingComponent = lazy(() =>
  import("../components/jobs/JobListing.Component")
);

import { useSetPageTitle } from "../hooks/useSetPageTitle";
import JobListSkeletonUtil from "../components/utils/LoadersSpinners/JobListSkeleton.Util";

export default function JobListingPage() {
  useSetPageTitle("Job Listings");
  return (
    <Fragment>
      <Suspense fallback={<JobListSkeletonUtil />}>
        <JobListingComponent />
      </Suspense>
    </Fragment>
  );
}
