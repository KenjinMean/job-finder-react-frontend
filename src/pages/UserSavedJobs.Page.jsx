import React, { Fragment, Suspense, lazy } from "react";

import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

const UserSavedJobsComponent = lazy(() =>
  import("../components/user/UserSavedJobs/UserSavedJobs.Component")
);

import { useSetPageTitle } from "../hooks/useSetPageTitle";
import JobListSkeletonUtil from "../components/utils/LoadersSpinners/JobListSkeleton.Util";

export default function UserSavedJobsPage() {
  useSetPageTitle("Edit User Skill");
  return (
    <Fragment>
      <Typography
        sx={{
          mt: "1rem",
          "@media (max-width: 768px)": {
            padding: "0 1rem",
          },
        }}
        variant="h3"
      >
        My jobs
      </Typography>
      <Divider />
      <Suspense fallback={<JobListSkeletonUtil />}>
        <UserSavedJobsComponent />
      </Suspense>
    </Fragment>
  );
}
