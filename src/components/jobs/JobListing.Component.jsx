import React, { Fragment } from "react";

import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { useFetchJobsInfinite } from "../../services/api/useJobRequestHandler";

import JobContainerComponent from "./JobContainer.Component";
import { PageTitleUtil } from "../../components/utils/PageTitle.Util";
import JobListSkeletonUtil from "../../components/utils/LoadersSpinners/JobListSkeleton.Util";

export default function JobListingComponent() {
  const { data, hasNextPage, fetchNextPage, isFetching, isFetchingNextPage } =
    useFetchJobsInfinite();

  const lastJobRef = useIntersectionObserver(
    () => fetchNextPage(),
    [hasNextPage, !isFetchingNextPage]
  );

  return (
    <div className="flex flex-col gap-5 sm:gap-3">
      <PageTitleUtil title="Job Listings" />
      {data?.pages?.map((group, index) => {
        return (
          <Fragment key={index}>
            {group.data?.data?.map((job, jobIndex, array) => {
              const isLastJob = jobIndex === array.length - 1;
              return (
                <JobContainerComponent
                  job={job}
                  ref={isLastJob ? lastJobRef : null}
                  key={job.id}
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
