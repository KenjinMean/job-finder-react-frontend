import React from "react";
import ImageUrlLoaderUtil from "../utils/ImageUrlLoader.Util";

export default function CompanyOverviewComponent({ company }) {
  return (
    <div className="flex flex-col gap-5 p-5 border rounded-md border-border-100">
      <h2 className="text-xl font-bold ">Company Details</h2>

      <div className="flex items-center gap-5">
        <div className="w-20 h-20 mb-2 overflow-hidden rounded-md">
          <ImageUrlLoaderUtil imageUrl={company?.company_logo} />
        </div>

        <p className="flex flex-col text-sm text-content-black">
          <span className="text-lg">{company?.name}</span>
          <span className="text-content-slate_500">{company?.location}</span>
          <span className="text-content-slate_500">
            {company?.company_size} - employee's
          </span>
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <div>
          <label htmlFor="company-description" className="font-bold">
            About
          </label>
          <p className="line-clamp-2" id="company-description">
            {company?.description}
          </p>
        </div>
        <div>
          <label htmlFor="company-website">Visit Website: </label>
          <a
            href={company?.website}
            className=" text-accent-blue500"
            id="company-website"
            target="_blank"
            rel="noopener noreferrer"
          >
            {company?.website}
          </a>
        </div>
      </div>
    </div>
  );
}
