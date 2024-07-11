import React, { Fragment, useState } from "react";

import { useApiJobsListingFetch } from "../../hooks/useApiJob";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

import JobCardComponent from "./JobCard.Component";
import EndOfListIndicatorUiComponent from "../UI/EndOfListIndicator.Ui.Component";
import JobListSkeletonUtil from "../../components/utils/LoadersSpinners/JobListSkeleton.Util";

export default function JobListingComponent() {
  const {
    data: jobs,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useApiJobsListingFetch();

  const lastJobRef = useIntersectionObserver(
    () => fetchNextPage(),
    [hasNextPage, !isFetchingNextPage]
  );

  return (
    <Fragment>
      {jobs?.pages?.map((group, index) => {
        return (
          <Fragment key={index}>
            {group.data?.data?.map((job, jobIndex, array) => {
              const isLastJob = jobIndex === array.length - 1;
              return (
                <JobCardComponent
                  job={job}
                  key={job.id}
                  ref={isLastJob ? lastJobRef : null}
                />
              );
            })}
          </Fragment>
        );
      })}

      {isFetchingNextPage && <JobListSkeletonUtil />}

      {!hasNextPage && !isFetching && !isFetchingNextPage && (
        <EndOfListIndicatorUiComponent message={"No more jobs available"} />
      )}
    </Fragment>
  );
}
