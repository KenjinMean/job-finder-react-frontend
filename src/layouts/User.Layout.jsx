import React, { Fragment, Suspense } from "react";
import { Outlet } from "react-router-dom";

import UserModalProvider from "../services/providers/UserModalProvider";
import { QueryBoundaries } from "../components/utils/QueryBoundaries.Util";
import LoadingSpinnerUtil from "../components/utils/LoadersSpinners/LoadingSpinnder.Util";

export default function UserProfileLayout() {
  return (
    <Fragment>
      <main className="flex flex-col w-full max-w-5xl gap-2 mx-auto sm:gap-3 sm:px-3 lg:px-0">
        <QueryBoundaries>
          <Suspense fallback={<LoadingSpinnerUtil />}>
            <Outlet />
          </Suspense>
        </QueryBoundaries>
      </main>
      <UserModalProvider />
    </Fragment>
  );
}
