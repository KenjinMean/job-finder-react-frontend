import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

import MaxWidthWrapperUtil from "../components/utils/MaxWidthWrapper.Util";
import { QueryBoundaries } from "../components/utils/QueryBoundaries.Util";

export default function JobsLayout() {
  return (
    <Fragment>
      <main className="flex flex-grow p-0 sm:p-5 lg:px-10">
        <MaxWidthWrapperUtil className="w-full">
          <QueryBoundaries>
            <Outlet />
          </QueryBoundaries>
        </MaxWidthWrapperUtil>
      </main>
    </Fragment>
  );
}
