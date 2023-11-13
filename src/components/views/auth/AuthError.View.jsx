import React from "react";

export default function AuthErrorView({ error, errorMessage }) {
  return (
    <div
      aria-hidden={error ? "false" : "true"}
      className="max-w-xs text-center height-auto"
    >
      {<span className="block text-red-500">{errorMessage}</span>}
    </div>
  );
}
