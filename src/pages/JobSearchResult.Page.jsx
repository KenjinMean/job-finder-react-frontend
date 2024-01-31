import React, { Fragment, Suspense, lazy } from "react";

const JobSearchResultComponent = lazy(() =>
  import("../components/jobs/JobSearchResult.Component")
);

import { useSetPageTitle } from "../hooks/useSetPageTitle";

import JobListSkeletonUtil from "../components/utils/LoadersSpinners/JobListSkeleton.Util";

export default function JobSearchResultPage() {
  useSetPageTitle("Job Search Results");
  return (
    <Fragment>
      <Suspense fallback={<JobListSkeletonUtil />}>
        <JobSearchResultComponent />
      </Suspense>
    </Fragment>
  );
}
