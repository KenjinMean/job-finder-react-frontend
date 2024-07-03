import React from "react";
import fallBackCompanyImage from "../../assets/icons/fallbackCompanyImage.png";
import LazyImageUtil from "./LazyImage.Util";

export default function ImageUrlLoaderUtil({ imageUrl, alt = "" }) {
  const url = imageUrl
    ? imageUrl.startsWith("http://") || imageUrl.startsWith("https://")
      ? imageUrl
      : `${import.meta.env.VITE_JOB_FINDER_API_URL}/${imageUrl}`
    : fallBackCompanyImage;

  return (
    <LazyImageUtil
      src={url}
      alt={alt}
      height="100%"
      width="100%"
      className={`block object-cover w-full h-full`}
    />
    // <img
    //   src={url}
    //   alt={alt}
    //   height="full"
    //   width="full"
    //   className={`block object-cover w-full h-full `}
    // />
  );
}
