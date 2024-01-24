import React from "react";

export default function JobInformationComponent({ jobDetails }) {
  return (
    <div className="flex flex-col gap-5">
      {/* description */}
      <div>
        <span className="font-bold text-md">Job Description:</span>
        <p className="pl-5">{jobDetails.description}</p>
      </div>

      {/* responsibilities */}
      <div className="">
        <span className="font-bold text-md">Responsibilities:</span>
        <p className="pl-5 whitespace-pre-line">
          {jobDetails.responsibilities}
        </p>
      </div>

      {/* qualifications */}
      <div className="">
        <span className="font-bold text-md">Qualifications:</span>
        <p className="pl-5 whitespace-pre-line">{jobDetails.qualifications}</p>
      </div>
    </div>
  );
}
