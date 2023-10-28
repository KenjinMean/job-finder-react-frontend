import React, { Fragment, Suspense, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import LoadingSpinnerUtil from "../utils/LoadingSpinnder.Util";
import { PageTitleUtil } from "../utils/PageTitle.Util";
import { useFetchJobdetails } from "../../hooks/useJobRequestHandler";
import JobDetailSkeletonUtil from "../utils/JobDetailSkeleton.Util";

export default function JobDetailsPage() {
  const { jobSlug } = useParams();

  const navigate = useNavigate();

  const { isLoading, data, isError, error } = useFetchJobdetails(jobSlug);

  const { job: { title, description, salary, company } = {} } =
    data?.data || {};

  // useEffect(() => {
  //   window.scrollTo(0, 450);
  // }, []);

  return (
    <Fragment>
      <PageTitleUtil title="Job Details" />
      <Suspense fallback={<JobDetailSkeletonUtil />}>
        <div className="mx-auto">
          <button onClick={() => navigate(-1)}>Go back</button>
          {isLoading ? (
            <LoadingSpinnerUtil size={8} />
          ) : (
            <>
              <div className="border ">
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="mt-3">description:</p>
                <p>{description}</p>
                <p className="mt-3">Salary: ${salary}</p>
              </div>
              {company && (
                <div className="">
                  <h2 className="font-bold">Company Details</h2>
                  <p className="font-semibold text-zinc-700">{company?.name}</p>
                  <p className="mt-3">{company?.description}</p>
                  <p className="mt-3">{company?.location}</p>
                  <p className="mt-3">{company?.industry}</p>
                  <p className="mt-3">{company?.website}</p>
                </div>
              )}
            </>
          )}
        </div>
      </Suspense>
    </Fragment>
  );
}
