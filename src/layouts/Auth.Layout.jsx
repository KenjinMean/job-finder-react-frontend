import React from "react";
import { Outlet } from "react-router-dom";
import { QueryBoundaries } from "../components/utils/QueryBoundaries.Util";

export default function AuthLayout() {
  return (
    <QueryBoundaries>
      <div className="flex items-center justify-center min-h-screen bg-background-gray100">
        <div className="flex justify-center flex-1 h-screen overflow-y-auto sm:border sm:p-0 sm:items-center border-border-100 bg-background-gray300 sm:h-auto sm:max-w-xl sm:m-8 sm:rounded-lg">
          <Outlet />
        </div>
      </div>
    </QueryBoundaries>
  );
}
