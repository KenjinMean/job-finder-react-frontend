import React, { Fragment } from "react";
import { Divider, Typography } from "@mui/material";

import JobCardComponent from "../../jobs/JobCard.Component";
import { useApiUserSaveJobsFetch } from "../../../hooks/useApiUserSaveJobs";

export default function UserSavedJobsComponent() {
  const { data } = useApiUserSaveJobsFetch();

  console.log(data);
  return (
    <Fragment>
      <div className="flex flex-col gap-5 p-5 pt-10 md:pt-10">
        {data?.map((job) => {
          return <JobCardComponent key={job.id} job={job} />;
        })}
      </div>
    </Fragment>
  );
}
