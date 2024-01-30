import React from "react";

export default function UserDetailsCardSpinnerUtil({ title }) {
  return (
    <div className="flex flex-col h-40 gap-5 p-5 overflow-hidden border rounded-md border-border-100 bg-background-gray_50">
      <span className="sr-only">Loading...</span>
      <span className="text-2xl font-bold ">{title}</span>

      <div className="flex flex-col gap-2">
        <div className="w-40 h-4 bg-gray-200 rounded-md animate-pulse dark:bg-gray-600" />
        <div className="h-3 bg-gray-200 rounded-md w-80 animate-pulse dark:bg-gray-600" />
        <div className="h-3 bg-gray-200 rounded-md w-80 animate-pulse dark:bg-gray-600" />
      </div>
    </div>
  );
}
