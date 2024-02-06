import React from "react";

export default function ProfileSkeletonLoadingUtil() {
  return (
    <section className="relative w-full overflow-hidden border bg-background-gray_50 border-border-100 sm:rounded-lg text-content-black">
      <span className="sr-only">Loading...</span>
      <div className="block w-full p-10 border-b h-36 sm:h-48 border-border-100">
        <svg
          className="w-full h-full text-background-gray300_hoover animate-pulse"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>

      <div className="absolute z-10 w-32 h-32 overflow-hidden border-4 rounded-full sm:w-40 sm:h-40 top-20 left-5 border-border-100 bg-background-gray_50">
        <svg
          className="w-full h-full text-background-gray300_hoover animate-pulse"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
        </svg>
      </div>

      <div className="pt-10 mt-3">
        <div className="flex flex-col gap-2 p-5">
          <div className="w-40 h-4 rounded-md bg-background-gray300_hoover animate-pulse" />
          <div className="h-3 rounded-md bg-background-gray300_hoover w-80 animate-pulse" />
          <div className="h-3 rounded-md bg-background-gray300_hoover w-80 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
