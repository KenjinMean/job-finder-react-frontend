import React, { Fragment } from "react";

import { useApiJobsInfiniteFetch } from "../../hooks/useApiJob";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

import JobContainerComponent from "./JobContainer.Component";
import { PageTitleUtil } from "../../components/utils/PageTitle.Util";
import JobListSkeletonUtil from "../../components/utils/LoadersSpinners/JobListSkeleton.Util";

export default function JobListingComponent() {
  const {
    data: jobs,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useApiJobsInfiniteFetch();

  const lastJobRef = useIntersectionObserver(
    () => fetchNextPage(),
    [hasNextPage, !isFetchingNextPage]
  );

  return (
    <div className="flex flex-col gap-5 sm:gap-3">
      <PageTitleUtil title="Job Listings" />
      {jobs?.pages?.map((group, index) => {
        return (
          <Fragment key={index}>
            {group.data?.data?.map((job, jobIndex, array) => {
              const isLastJob = jobIndex === array.length - 1;
              return (
                <JobContainerComponent
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
        <div className="w-full mt-5 text-lg font-semibold text-center text-content-black">
          No more jobs available
        </div>
      )}
    </div>
  );
}
