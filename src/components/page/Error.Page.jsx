import React from "react";
import Error500View from "../views/error/Error500.View";
import Error503View from "../views/error/Error503.View";
import Error404View from "../views/error/Error404.View";

export default function ErrorPage({ error, resetErrorBoundary }) {
  if (error.code === "404") {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-900 border">
        <Error404View />
      </div>
    );
  }

  if (error.code === "ERR_NETWORK") {
    <div className="flex items-center justify-center min-h-screen text-gray-900 border">
      <Error503View resetErrorBoundary={resetErrorBoundary} />
    </div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen text-gray-900 border">
      <Error500View resetErrorBoundary={resetErrorBoundary} />
    </div>
  );
}
