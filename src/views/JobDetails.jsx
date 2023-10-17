import React, { Fragment } from "react";
import { useParams, useNavigate } from "react-router-dom";
import LoadingSpinner from "./loading/LoadingSpinner";
import { PageTitleUtil } from "../components/utils/PageTitle.Util";
import { useGetJobDetails } from "../hooks/useJobRequestHandler";

export default function JobDetails() {
  const { jobSlug } = useParams();

  const navigate = useNavigate();

  const { isLoading, data, isError, error } = useGetJobDetails(jobSlug);

  const { job: { title, description, salary, company } = {} } =
    data?.data || {};

  return (
    <Fragment>
      <PageTitleUtil title="Job Details" />
      <div className="p-5">
        <button onClick={() => navigate(-1)}>Go back</button>
        {isLoading ? (
          <LoadingSpinner size={8} />
        ) : (
          <>
            <div className="p-5 border">
              <h1 className="text-2xl font-bold">{title}</h1>
              <p className="mt-3">description:</p>
              <p>{description}</p>
              <p className="mt-3">Salary: ${salary}</p>
            </div>
            {company && (
              <div className="p-5">
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
    </Fragment>
  );
}
