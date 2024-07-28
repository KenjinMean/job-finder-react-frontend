import React, { Fragment } from "react";
import JobCardComponent from "../../jobs/JobCard.Component";
import { useApiUserSaveJobsFetch } from "../../../hooks/useApiUserSaveJobs";

export default function UserSavedJobsComponent() {
  const { data: userSavedJobs } = useApiUserSaveJobsFetch();

  return (
    <Fragment>
      <div className="flex flex-col gap-5 p-5 pt-10 md:pt-10">
        {userSavedJobs?.length > 0 ? (
          userSavedJobs.map((job) => {
            return <JobCardComponent key={job.id} job={job} />;
          })
        ) : (
          <div>No saved jobs available.</div>
        )}
      </div>
    </Fragment>
  );
}
