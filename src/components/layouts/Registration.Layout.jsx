import React from "react";
import { Outlet } from "react-router-dom";
import { QueryBoundaries } from "../utils/QueryBoundaries.Util";

export default function RegistrationLayout() {
  return (
    <div>
      <QueryBoundaries>
        <Outlet />
      </QueryBoundaries>
    </div>
  );
}
