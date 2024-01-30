import React from "react";

import ErrorNotFoundUiComponent from "../components/UI/error/ErrorNotFound.Ui.Component";
import ErrorServerErrorUiComponent from "../components/UI/error/ErrorServerError.Ui.Component";
import ErrorServerUnavailableUiComponent from "../components/UI/error/ErrorServerUnavailable.Ui.Component";

export default function ErrorPage({ error, resetErrorBoundary }) {
  console.log("error from error page:", error);

  if (error instanceof TypeError) {
    console.log("A Type Error");
  }

  if (error.code == "404") {
    return (
      <div className="flex items-center justify-center h-full">
        <ErrorNotFoundUiComponent resetErrorBoundary={resetErrorBoundary} />
      </div>
    );
  }

  if (error.code === "ERR_NETWORK") {
    <div className="flex items-center justify-center h-full">
      <ErrorServerUnavailableUiComponent
        resetErrorBoundary={resetErrorBoundary}
      />
    </div>;
  }

  return (
    <div className="flex items-center justify-center h-full">
      <ErrorServerErrorUiComponent resetErrorBoundary={resetErrorBoundary} />
    </div>
  );
}
