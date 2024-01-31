import React from "react";
import { formatSalary } from "../../utils/formatSalary";

export default function JobPartialDetailsComponent({
  location,
  salary,
  companySize,
}) {
  return (
    <div className="flex flex-col flex-wrap gap-1 sm:gap-2 md:flex-row text-content-gray ">
      {location && (
        <p className="w-full rounded-md sm:w-max sm:px-2 sm:border border-border-100 empty:hidden">
          Location: <span className="text-content-slate_500"> {location}</span>
        </p>
      )}

      {salary && (
        <p className="w-full rounded-md sm:w-max sm:px-2 sm:border border-border-100 empty:hidden">
          {" "}
          Salary:{" "}
          <span className="text-content-slate_500">
            PHP {formatSalary(salary)}
          </span>
        </p>
      )}

      {companySize && (
        <p className="w-full rounded-md sm:w-max sm:px-2 sm:border border-border-100 empty:hidden">
          Company Size:{" "}
          <span className="text-content-slate_500">
            {companySize} employee's
          </span>
        </p>
      )}
    </div>
  );
}
