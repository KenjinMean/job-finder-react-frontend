import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

import { QueryBoundaries } from "../components/utils/QueryBoundaries.Util";

export default function JobsLayout() {
  return (
    <Fragment>
      <main className="flex flex-col w-full max-w-5xl gap-2 px-2 mx-auto sm:gap-3 sm:px-3 lg:px-0">
        <QueryBoundaries>
          <Outlet />
        </QueryBoundaries>
      </main>
    </Fragment>
  );
}
