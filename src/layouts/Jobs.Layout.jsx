import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

import MaxWidthWrapperUtil from "../components/utils/MaxWidthWrapper.Util";
import { QueryBoundaries } from "../components/utils/QueryBoundaries.Util";

export default function JobsLayout() {
  return (
    <Fragment>
      <main className="min-h-screen p-5">
        <MaxWidthWrapperUtil>
          <QueryBoundaries>
            <Outlet />
          </QueryBoundaries>
        </MaxWidthWrapperUtil>
      </main>
    </Fragment>
  );
}
