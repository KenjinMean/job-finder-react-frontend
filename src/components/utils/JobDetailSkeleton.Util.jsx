import React from "react";
import JobListSkeletonUtil from "./JobListSkeleton.Util";
import MaxWidthWrapperUtil from "./MaxWidthWrapper.Util";

export default function JobDetailSkeletonUtil() {
  return (
    <MaxWidthWrapperUtil className="p-5 rounded rouned-md">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col w-full gap-2">
          <div className="w-1/3 h-10 rounded-md pulse"></div>
          <div className="w-1/2 h-3 rounded-md pulse"></div>
          <div className="w-3/5 h-3 rounded-md pulse"></div>
          <div className="w-1/2 h-3 rounded-md pulse"></div>
        </div>
        <div className="flex flex-col w-full gap-2">
          <div className="w-1/3 h-10 rounded-md pulse"></div>
          <div className="w-1/2 h-3 rounded-md pulse"></div>
          <div className="w-1/2 h-3 rounded-md pulse"></div>
        </div>
        <div className="flex w-full gap-5">
          <div className="w-10 h-5 rounded-full pulse"></div>
          <div className="w-10 h-5 rounded-full pulse"></div>
          <div className="w-10 h-5 rounded-full pulse"></div>
          <div className="w-10 h-5 rounded-full pulse"></div>
          <div className="w-10 h-5 rounded-full pulse"></div>
        </div>
        <div className="flex flex-col w-full gap-2">
          <div className="w-1/3 h-10 rounded-md pulse"></div>
          <div className="w-1/2 h-3 rounded-md pulse"></div>
          <div className="w-1/2 h-3 rounded-md pulse"></div>
        </div>
      </div>
    </MaxWidthWrapperUtil>
  );
}
