import React from "react";

export default function ImageUrlLoaderUtil({ imageUrl, alt = "" }) {
  const getImageUrl = (imageUrl) => {
    if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) {
      return imageUrl;
    } else {
      return `${import.meta.env.VITE_API_BASE_URL}/${imageUrl}`;
    }
  };

  const url = getImageUrl(imageUrl);

  return (
    <img src={url} alt={alt} className="block object-cover w-full h-full" />
  );
}
