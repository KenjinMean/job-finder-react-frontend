import React, { Fragment, Suspense, lazy } from "react";

const JobSearchResultComponent = lazy(() =>
  import("../components/jobs/JobSearchResult.Component")
);

import { PageTitleUtil } from "../components/utils/PageTitle.Util";
import JobListSkeletonUtil from "../components/utils/LoadersSpinners/JobListSkeleton.Util";

export default function JobSearchResultPage() {
  return (
    <Fragment>
      <PageTitleUtil title="Job Search Results" />
      <Suspense fallback={<JobListSkeletonUtil />}>
        <JobSearchResultComponent />
      </Suspense>
    </Fragment>
  );
}
