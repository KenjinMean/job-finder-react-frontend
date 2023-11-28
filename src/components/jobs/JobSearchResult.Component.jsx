import React, { Fragment, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import menuIcon from "../../assets/icons/option.png";
import { jobDetailsPageRoute } from "../../constants/routes";

import { extractUrlParams } from "../../utils/extractUrlParams";
import { useSearchJobsInfinite } from "../../services/api/useJobRequestHandler";

import JobContainerComponent from "./JobContainer.Component";

import { PageTitleUtil } from "../../components/utils/PageTitle.Util";
import JobListSkeletonUtil from "../../components/utils/LoadersSpinners/JobListSkeleton.Util";

export default function JobSearchResultComponent() {
  const location = useLocation();
  const lastJobResultRef = useRef(null);
  const params = extractUrlParams(location);

  const {
    data,
    hasNextPage,
    refetch,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useSearchJobsInfinite(params);

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
    <Fragment>
      <PageTitleUtil title="Job Search Results" />
      {data?.pages?.map((group, index) => {
        return (
          <Fragment key={index}>
            {group.data?.data?.map((job, jobIndex, array) => {
              const isLastJob = jobIndex === array.length - 1;
              return (
                <div
                  key={job.id}
                  className="relative"
                  ref={isLastJob ? lastJobResultRef : null}
                >
                  <button
                    onClick={() => console.log("clicked")}
                    className="absolute z-10 p-1 transition-all duration-300 border rounded-full right-5 top-5 hover:bg-background-200 "
                  >
                    <img src={menuIcon} alt="Menu icon" className="w-5 h-5" />
                  </button>
                  <Link to={`${jobDetailsPageRoute}${job.slug}`}>
                    <JobContainerComponent job={job} />
                  </Link>
                </div>
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
        <div className="w-full mt-5 text-lg font-semibold text-center text-foreground-300">
          No more jobs available for the search: {params.query}
        </div>
      )}
    </Fragment>
  );
}
