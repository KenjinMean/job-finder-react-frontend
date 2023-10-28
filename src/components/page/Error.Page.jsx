import React from "react";
import Error500View from "../views/Error500.View";
import Error503View from "../views/Error503.View";

export default function ErrorPage({ error, resetErrorBoundary }) {
  return (
    <div className="flex items-center justify-center min-h-screen text-gray-900 border">
      {error.code === "ERR_NETWORK" ? (
        <Error503View resetErrorBoundary={resetErrorBoundary} />
      ) : (
        <Error500View resetErrorBoundary={resetErrorBoundary} />
      )}
    </div>
  );
}
