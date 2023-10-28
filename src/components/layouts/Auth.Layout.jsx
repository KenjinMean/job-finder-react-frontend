import React from "react";
import { QueryBoundaries } from "../utils/QueryBoundaries.Util";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="flex justify-center min-h-screen text-gray-900 bg-gray-50">
      <div className="flex items-center justify-center flex-1 m-0 bg-white border border-background-400 sm:max-w-xl sm:m-8 sm:rounded-lg">
        <QueryBoundaries>
          <Outlet />
        </QueryBoundaries>
      </div>
    </div>
  );
}
