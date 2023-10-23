import React from "react";
import { QueryBoundaries } from "../utils/QueryBoundaries.Util";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div>
      <QueryBoundaries>
        <Outlet />
      </QueryBoundaries>
    </div>
  );
}
