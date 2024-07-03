import React from "react";
import LazyImageUtil from "../utils/LazyImage.Util";

export default function UserProfileImageComponent({ imageUrl, alt = "" }) {
  const url = imageUrl
    ? imageUrl.startsWith("http://") || imageUrl.startsWith("https://")
      ? imageUrl
      : `${import.meta.env.VITE_JOB_FINDER_API_URL}/${imageUrl}`
    : "";

  return (
    <>
      {url ? (
        <LazyImageUtil
          src={url}
          alt={alt}
          height="100%"
          width="100%"
          className={`block object-cover w-full h-full`}
        />
      ) : (
        <div className="flex items-center justify-center bg-gray-500">
          <svg
            className="w-full h-full text-content-gray"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
          </svg>
        </div>
      )}
    </>
  );
}
