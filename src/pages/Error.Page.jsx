import React from "react";

import { authRoutes } from "../constants/RoutesPath.Constants";
import ErrorNotFoundUiComponent from "../components/UI/error/ErrorNotFound.Ui.Component";
import ErrorServerErrorUiComponent from "../components/UI/error/ErrorServerError.Ui.Component";
import ErrorServerUnavailableUiComponent from "../components/UI/error/ErrorServerUnavailable.Ui.Component";

export default function ErrorPage({ error, resetErrorBoundary }) {
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

  // make a reusable function for this
  if (
    error.code === 401 &&
    error.error.response.data.error.error === "jwt token error"
  ) {
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("ACCESS_TOKEN_EXPIRES_IN");
    localStorage.removeItem("User");
    localStorage.removeItem("USER_INFO");

    window.location.href = authRoutes.authLoginPage;
    return null;
  }

  return (
    <div className="flex items-center justify-center h-full">
      <ErrorServerErrorUiComponent resetErrorBoundary={resetErrorBoundary} />
    </div>
  );
}
