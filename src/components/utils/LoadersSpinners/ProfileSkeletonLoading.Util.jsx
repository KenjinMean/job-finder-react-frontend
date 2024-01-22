import React from "react";

export default function ProfileSkeletonLoadingUtil() {
  return (
    <div className="overflow-hidden rounded-md">
      <div className="relative">
        <div className="block w-full h-48 bg-background-gray300">
          <img src="" alt="" />
        </div>
        <div className="absolute w-40 h-40 overflow-hidden border-4 rounded-full pulse top-20 left-5 border-border-100 bg-background-slate300">
          <img src="" alt="" />
        </div>
      </div>

      <div className="p-5 mt-5">
        <div className="flex flex-col gap-3 p-5">
          <div className="w-40 h-5 pulse rounded-xl"></div>
          <div className="h-5 w-52 pulse rounded-xl"></div>
          <div className="h-5 w-44 pulse rounded-xl"></div>
        </div>
      </div>
    </div>
  );
}
