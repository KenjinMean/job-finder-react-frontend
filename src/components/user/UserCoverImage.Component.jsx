import React from "react";
import DefaultCoverImageComponent from "./DefaultCoverImage.Component";
import LazyImageUtil from "../utils/LazyImage.Util";

export default function UserCoverImageComponent({ imageUrl, alt = "" }) {
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
        <DefaultCoverImageComponent />
      )}
    </>
  );
}
