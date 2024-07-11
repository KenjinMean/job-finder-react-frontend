import React, { Fragment, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { extractUrlParams } from "../../utils/extractUrlParams";
import { useApiJobsFiltersInfiniteFetch } from "../../hooks/useApiJob";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

import JobCardComponent from "./JobCard.Component";
import EndOfListIndicatorUiComponent from "../UI/EndOfListIndicator.Ui.Component";
import JobListSkeletonUtil from "../../components/utils/LoadersSpinners/JobListSkeleton.Util";

export default function JobSearchResultComponent() {
  const location = useLocation();
  const params = extractUrlParams(location);

  const {
    data: jobs,
    refetch,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useApiJobsFiltersInfiniteFetch(params);

  const lastJobRef = useIntersectionObserver(
    () => fetchNextPage(),
    [hasNextPage, !isFetchingNextPage]
  );

  useEffect(() => {
    refetch();
  }, [location]);

  return (
    <Fragment>
      <span className="text-3xl font-bold">
        Search Results for "{params.query}"
      </span>
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
        <EndOfListIndicatorUiComponent
          message={`No more jobs available for the search: ${params.title}`}
        />
      )}
    </Fragment>
  );
}
