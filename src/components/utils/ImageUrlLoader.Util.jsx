import React, { useState } from "react";
import fallBackCompanyImage from "../../assets/icons/fallbackCompanyImage.png";

export default function ImageUrlLoaderUtil({ imageUrl, alt = "" }) {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const url = imageUrl
    ? imageUrl.startsWith("http://") || imageUrl.startsWith("https://")
      ? imageUrl
      : `${import.meta.env.VITE_API_BASE_URL}/${imageUrl}`
    : fallBackCompanyImage;

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <img
          src={fallBackCompanyImage}
          alt="Loading..."
          className="block object-cover w-full h-full"
        />
      )}
      <img
        src={url}
        alt={alt}
        className={`block object-cover w-full h-full ${
          isLoading ? "hidden" : "block"
        }`}
        onLoad={handleImageLoad}
      />
    </div>
  );
}
