import React from "react";
import JobListSkeletonUtil from "./JobListSkeleton.Util";

export default function JobDetailSkeletonUtil() {
  return (
    <div className="p-5 mx-auto border rounded-md max-w-7xl">
      <div className="flex gap-5">
        <div>
          <div className="w-20 h-20 rounded-full pulse"></div>
        </div>
        <div className="flex flex-col w-full gap-2">
          <div className="w-1/3 h-10 rounded-md pulse"></div>
          <div className="w-1/2 h-3 rounded-md pulse"></div>
          <div className="w-3/5 h-3 rounded-md pulse"></div>
          <div className="w-1/2 h-3 rounded-md pulse"></div>
        </div>
      </div>
      {[...Array(5).keys()].map((i) => {
        return <JobListSkeletonUtil key={i} />;
      })}
    </div>
  );
}
