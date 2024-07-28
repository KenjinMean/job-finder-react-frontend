import React, { Fragment, useEffect } from "react";
import { formatSalary } from "../../utils/formatSalary";
import { getElapsedTime } from "../../utils/getElapsedTime";
import { useStoredActionState } from "../../services/state/StoredActionStateStore";

export default function JobCardDetailsComponent({ job }) {
  const { clearStoredAction } = useStoredActionState();

  useEffect(() => {
    clearStoredAction();
  }, []);

  return (
    <div className="flex flex-col w-full gap-0 font-medium text-content-gray">
      <h2 className="text-lg sm:text-xl text-content-black font-secondary">
        {job.title}
      </h2>

      <div className="items-baseline gap-2 sm:flex">
        <span className="text-lg">{job.company.name}</span>{" "}
        <div>
          {job.job_types.map((jobType, index) => (
            <Fragment key={index}>
              <span
                key={index}
                className="text-sm text-indigo-500 whitespace-nowrap"
              >
                {jobType.job_type}
              </span>
              {index !== job.job_types.length - 1 && (
                <span className="text-foreground-100"> • </span>
              )}
            </Fragment>
          ))}{" "}
        </div>
      </div>

      <div className="items-baseline gap-2 sm:flex">
        <span className="text-content-slate_500">{job.location}</span>
        <div>
          {job.work_location_types.map((workLocationType, index) => (
            <Fragment key={index}>
              <span
                key={index}
                className="text-sm text-indigo-500 whitespace-nowrap"
              >
                {workLocationType.name}
              </span>
              {index !== job.work_location_types.length - 1 && (
                <span className="text-foreground-100"> • </span>
              )}
            </Fragment>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        <span className="font-bold">PHP {formatSalary(job.salary)}</span>
        <span className="font-bold ">{getElapsedTime(job.created_at)}</span>
      </div>
    </div>
  );
}
