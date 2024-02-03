import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

export default function LazyImageUtil({ src, alt, width, height, className }) {
  return (
    <LazyLoadImage
      alt={alt}
      height={height}
      width={width}
      effect="opacity" // Use opacity effect for faster loading
      src={src}
      className={className}
    />
  );
}
