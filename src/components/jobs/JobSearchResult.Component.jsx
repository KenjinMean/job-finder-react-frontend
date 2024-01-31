import React, { Fragment, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { extractUrlParams } from "../../utils/extractUrlParams";
import { useApiJobSearchInfiniteFetch } from "../../hooks/useApiJob";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

import JobContainerComponent from "./JobContainer.Component";
import EndOfListIndicatorUiComponent from "../UI/EndOfListIndicator.Ui.Component";
import JobListSkeletonUtil from "../../components/utils/LoadersSpinners/JobListSkeleton.Util";

export default function JobSearchResultComponent() {
  const location = useLocation();
  const params = extractUrlParams(location);

  const {
    data: searchResult,
    refetch,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useApiJobSearchInfiniteFetch(params);

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
      {searchResult?.pages?.map((group, index) => {
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
        <EndOfListIndicatorUiComponent
          message={`No more jobs available for the search: ${params.query}`}
        />
      )}
    </Fragment>
  );
}
