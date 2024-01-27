import React, { Fragment, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { extractUrlParams } from "../../utils/extractUrlParams";
import { useApiJobSearchInfiniteFetch } from "../../hooks/useApiJob";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

import JobContainerComponent from "./JobContainer.Component";

import { PageTitleUtil } from "../../components/utils/PageTitle.Util";
import JobListSkeletonUtil from "../../components/utils/LoadersSpinners/JobListSkeleton.Util";
import EndOfListIndicatorUiComponent from "../UI/EndOfListIndicator.Ui.Component";

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
      <PageTitleUtil title="Job Search Results" />
      <div className="flex flex-col gap-5 sm:gap-3">
        <h2 className="text-3xl font-bold">
          Search Results for "{params.query}"
        </h2>
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
      </div>
    </Fragment>
  );
}
