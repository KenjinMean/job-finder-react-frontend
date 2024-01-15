import React, { Fragment } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { formatSalary } from "../../utils/formatSalary";
import { useFetchJobdetails } from "../../services/api/useJobRequestHandler";

export default function JobDetailsComponent() {
  const navigate = useNavigate();

  const { jobSlug } = useParams();

  const { data: jobDetails } = useFetchJobdetails(jobSlug);
  const {
    title,
    salary,
    location,
    skills,
    description,
    requirements,
    company,
  } = jobDetails ?? {};
  return (
    <Fragment>
      <div className="mx-auto text-content-black">
        <button onClick={() => navigate(-1)}>Go back</button>
        <div className="py-5 ">
          <h1 className="text-2xl font-bold">{title}</h1>
          <div className="mt-3">
            <span className="text-lg font-bold">Salary:</span>
            <p>P{formatSalary(salary)}</p>
          </div>
          <div className="mt-3">
            <span className="text-lg font-bold">Location:</span>
            <p>{location}</p>
          </div>
          {/* craete a component that displays the skills */}
          <div className="gap-3 mt-3 ">
            <span className="text-lg font-bold">Skills:</span>
            <div className="flex flex-wrap gap-3 mt-3">
              {skills &&
                skills?.map((skill) => {
                  return (
                    <span
                      key={skill.id}
                      className="p-1 border rounded-lg bg-accent-100"
                    >
                      {skill.name}
                    </span>
                  );
                }, [])}
            </div>
          </div>
          <div className="mt-3">
            <span className="text-lg font-bold">Description:</span>
            <p>{description}</p>
          </div>
          <div className="mt-3">
            <span className="text-lg font-bold">Requirements:</span>
            <p>{requirements}</p>
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
      </div>
    </Fragment>
  );
}
