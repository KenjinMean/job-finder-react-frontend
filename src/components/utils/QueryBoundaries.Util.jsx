// SOURCE: https://www.bam.tech/en/article/suspense-and-react-query-make-data-fetching-easy
import React from "react";

import { ErrorBoundary } from "react-error-boundary";
import { QueryErrorResetBoundary } from "@tanstack/react-query";

import ErrorPage from "../../pages/Error.Page";

export const QueryBoundaries = ({ children }) => (
  <QueryErrorResetBoundary>
    {({ reset }) => (
      <ErrorBoundary onReset={reset} FallbackComponent={ErrorPage}>
        {children}
      </ErrorBoundary>
    )}
  </QueryErrorResetBoundary>
);
