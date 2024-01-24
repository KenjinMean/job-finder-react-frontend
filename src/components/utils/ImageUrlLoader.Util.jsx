import React from "react";
import fallBackCompanyImage from "../../assets/icons/fallbackCompanyImage.png";

export default function ImageUrlLoaderUtil({ imageUrl, alt = "" }) {
  const url = imageUrl
    ? imageUrl.startsWith("http://") || imageUrl.startsWith("https://")
      ? imageUrl
      : `${import.meta.env.VITE_APP_LARAVEL_API_URL}/${imageUrl}`
    : fallBackCompanyImage;

  return (
    <img src={url} alt={alt} className={`block object-cover w-full h-full `} />
  );
}
