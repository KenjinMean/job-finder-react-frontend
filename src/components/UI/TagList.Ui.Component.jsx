import React, { Fragment } from "react";

export default function TagListUiComponent({ tags }) {
  return (
    <span className="">
      {tags.map((jobType, index) => (
        <Fragment key={index}>
          <span
            key={index}
            className="px-2 rounded-full text-content-black_inverted bg-accent-blue600"
          >
            {jobType.job_type}
          </span>
          {index !== tags.length - 1 && (
            <span className="text-foreground-100"> • </span>
          )}
        </Fragment>
      ))}
    </span>
  );
}
