import React from "react";

export default function ErrorMessageUiComponent({ error }) {
  return (
    <span className="inline-block w-full text-center text-red-500">
      {error}
    </span>
  );
}
