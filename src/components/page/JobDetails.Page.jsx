import React, { Fragment, Suspense } from "react";
import { PageTitleUtil } from "../utils/PageTitle.Util";
import { useParams, useNavigate } from "react-router-dom";
import { useFormatSalary } from "../../hooks/useFormatSalary";
import JobDetailSkeletonUtil from "../utils/JobDetailSkeleton.Util";
import { useFetchJobdetails } from "../../hooks/useJobRequestHandler";

export default function JobDetailsPage() {
  const { jobSlug } = useParams();

  const navigate = useNavigate();

  const { data } = useFetchJobdetails(jobSlug);

  const {
    job: {
      title,
      description,
      salary,
      company,
      skills,
      requirements,
      location,
    } = {},
  } = data?.data || {};

  return (
    <Fragment>
      <PageTitleUtil title="Job Details" />
      <Suspense fallback={<JobDetailSkeletonUtil />}>
        <div className="mx-auto">
          <button onClick={() => navigate(-1)}>Go back</button>
          <>
            <div className="py-5 border">
              <h1 className="text-2xl font-bold">{title}</h1>
              <div className="mt-3">
                <span className="text-lg font-bold">Location:</span>
                <p>{location}</p>
              </div>
              <div className="mt-3">
                <span className="text-lg font-bold">Description:</span>
                <p>{description}</p>
              </div>
              <div className="mt-3">
                <span className="text-lg font-bold">Requirements:</span>
                <p>{requirements}</p>
              </div>
              <div className="mt-3">
                <span className="text-lg font-bold">Salary:</span>
                <p>P{useFormatSalary(salary)}</p>
              </div>
              <div className="flex gap-3 mt-3">
                {skills &&
                  skills?.map((skill) => {
                    return (
                      <span
                        key={skill.id}
                        className="p-1 border rounded-lg bg-background-400"
                      >
                        {skill.name}
                      </span>
                    );
                  }, [])}
              </div>
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
        </div>
      </Suspense>
    </Fragment>
  );
}
