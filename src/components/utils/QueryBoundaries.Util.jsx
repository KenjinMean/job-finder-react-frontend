// SOURCE: https://www.bam.tech/en/article/suspense-and-react-query-make-data-fetching-easy

import { QueryErrorResetBoundary } from "@tanstack/react-query";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallbackView from "../views/ErrorFallback.View";
import JobListSkeletonUtil from "./JobListSkeleton.Util";

export const QueryBoundaries = ({ children }) => (
  <QueryErrorResetBoundary>
    {({ reset }) => (
      <ErrorBoundary onReset={reset} FallbackComponent={ErrorFallbackView}>
        <Suspense FallbackComponent={<JobListSkeletonUtil />}>
          {children}
        </Suspense>
      </ErrorBoundary>
    )}
  </QueryErrorResetBoundary>
);
