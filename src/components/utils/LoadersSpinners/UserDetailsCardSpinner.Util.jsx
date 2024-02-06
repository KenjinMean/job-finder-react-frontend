import React from "react";

export default function UserDetailsCardSpinnerUtil({ title }) {
  return (
    <div className="flex flex-col h-40 gap-5 p-5 overflow-hidden border rounded-md border-border-100 bg-background-gray_50">
      <span className="sr-only">Loading...</span>
      <span className="text-2xl font-bold ">{title}</span>

      <div className="flex flex-col gap-2">
        <div className="w-40 h-4 rounded-md animate-pulse bg-background-gray300_hoover" />
        <div className="h-3 rounded-md w-80 animate-pulse bg-background-gray300_hoover" />
        <div className="h-3 rounded-md w-80 animate-pulse bg-background-gray300_hoover" />
      </div>
    </div>
  );
}
