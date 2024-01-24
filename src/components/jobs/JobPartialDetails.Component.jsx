import React from "react";
import { formatSalary } from "../../utils/formatSalary";

export default function JobPartialDetailsComponent({
  location,
  salary,
  companySize,
}) {
  return (
    <p className="flex flex-col gap-1 sm:gap-2 md:flex-row text-content-gray empty:hidden">
      {location && (
        <span className="rounded-md sm:px-2 sm:border w-max border-border-100">
          Location: <span className="text-content-slate_500"> {location}</span>
        </span>
      )}

      {salary && (
        <span className="rounded-md sm:px-2 sm:border w-max border-border-100">
          {" "}
          Salary:{" "}
          <span className="text-content-slate_500">
            PHP {formatSalary(salary)}
          </span>
        </span>
      )}

      {companySize && (
        <span className="rounded-md sm:px-2 sm:border w-max border-border-100">
          Company Size:{" "}
          <span className="text-content-slate_500">
            {companySize} employee's
          </span>
        </span>
      )}
    </p>
  );
}
