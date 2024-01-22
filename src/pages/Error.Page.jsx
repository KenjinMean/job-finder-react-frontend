import React from "react";

import ErrorNotFoundUiComponent from "../components/UI/error/ErrorNotFound.Ui.Component";
import ErrorServerErrorUiComponent from "../components/UI/error/ErrorServerError.Ui.Component";
import ErrorServerUnavailableUiComponent from "../components/UI/error/ErrorServerUnavailable.Ui.Component";

export default function ErrorPage({ error, resetErrorBoundary }) {
  if (error.code === "404") {
    return (
      <div className="flex items-center justify-center min-h-screen border text-content-black">
        <ErrorNotFoundUiComponent />
      </div>
    );
  }

  if (error.code === "ERR_NETWORK") {
    <div className="flex items-center justify-center min-h-screen border text-content-black">
      <ErrorServerUnavailableUiComponent
        resetErrorBoundary={resetErrorBoundary}
      />
    </div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen border text-content-black">
      <ErrorServerErrorUiComponent resetErrorBoundary={resetErrorBoundary} />
    </div>
  );
}
