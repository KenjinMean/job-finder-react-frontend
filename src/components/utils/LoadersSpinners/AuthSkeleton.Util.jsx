import React from "react";

export default function AuthSkeletonUtil() {
  return (
    <div className="flex items-center justify-center flex-1 m-0 bg-background-gray300 sm:max-w-xl sm:m-8 sm:rounded-lg">
      <div className="w-full p-6 sm:p-12">
        <div className="w-full rounded-md h-28 pulse"></div>
        <div className="w-1/2 h-10 mt-5 rounded-md pulse"></div>
        <div className="w-full h-10 mt-5 rounded-md pulse"></div>
        <div className="w-full h-10 mt-5 rounded-md pulse"></div>
        <div className="w-full h-10 mt-5 rounded-md pulse"></div>
        <div className="w-1/2 h-10 mt-5 rounded-md pulse"></div>
      </div>
    </div>
  );
}
