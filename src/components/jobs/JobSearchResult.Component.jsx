import React, { Fragment, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import { extractUrlParams } from "../../utils/extractUrlParams";
import { useSearchJobsInfinite } from "../../services/api/useJobRequestHandler";

import JobContainerComponent from "./JobContainer.Component";

import { PageTitleUtil } from "../../components/utils/PageTitle.Util";
import JobListSkeletonUtil from "../../components/utils/LoadersSpinners/JobListSkeleton.Util";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

export default function JobSearchResultComponent() {
  const location = useLocation();
  const lastJobResultRef = useRef(null);
  const params = extractUrlParams(location);

  const {
    data,
    refetch,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useSearchJobsInfinite(params);

  // const lastJobRef = useIntersectionObserver(
  //   () => fetchNextPage(),
  //   [hasNextPage, !isFetchingNextPage]
  // );

  const handleIntersect = () => {
    if (lastJobResultRef.current && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        handleIntersect();
      }
    });

    if (lastJobResultRef.current) {
      observer.observe(lastJobResultRef.current);
    }

    return () => {
      if (lastJobResultRef.current) {
        observer.unobserve(lastJobResultRef.current);
      }
    };
  }, [handleIntersect]);

  useEffect(() => {
    refetch();
  }, [location]);

  return (
    <div className="flex flex-col gap-5 sm:gap-3">
      <PageTitleUtil title="Job Search Results" />
      {data?.pages?.map((group, index) => {
        return (
          <Fragment key={index}>
            {group.data?.data?.map((job, jobIndex, array) => {
              const isLastJob = jobIndex === array.length - 1;
              return (
                <JobContainerComponent
                  job={job}
                  ref={isLastJob ? lastJobResultRef : null}
                  key={job.id}
                />
              );
            })}
          </Fragment>
        );
      })}

      {isFetchingNextPage && (
        <div className="pt-5 ">
          <JobListSkeletonUtil />
        </div>
      )}

      {!hasNextPage && !isFetching && !isFetchingNextPage && (
        <div className="w-full mt-5 text-lg font-semibold text-center text-content-black">
          No more jobs available for the search: {params.query}
        </div>
      )}
    </div>
  );
}
