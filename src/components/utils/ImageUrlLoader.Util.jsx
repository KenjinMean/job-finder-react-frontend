// import React, { useState, useRef, useEffect } from "react";
// import fallBackCompanyImage from "../../assets/icons/fallbackCompanyImage.png";

// export default function ImageUrlLoaderUtil({ imageUrl, alt = "" }) {
//   const [isLoading, setIsLoading] = useState(true);
//   const imageRef = useRef();

//   const handleImageLoad = () => {
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const img = new Image();
//             img.src = url;
//             img.onload = handleImageLoad;
//             imageRef.current.src = url;
//           }
//         });
//       },
//       { threshold: 0.5 } // Adjust the threshold as needed
//     );

//     observer.observe(imageRef.current);

//     return () => {
//       observer.disconnect();
//     };
//   }, [url]);

//   const url = imageUrl
//     ? imageUrl.startsWith("http://") || imageUrl.startsWith("https://")
//       ? imageUrl
//       : `${import.meta.env.VITE_APP_LARAVEL_API_URL}/${imageUrl}`
//     : fallBackCompanyImage;

//   return (
//     <div className="relative w-full h-full">
//       {isLoading && (
//         <img
//           src={fallBackCompanyImage}
//           alt="Loading..."
//           className="block object-cover w-full h-full"
//         />
//       )}
//       <img
//         ref={imageRef}
//         data-src={url}
//         alt={alt}
//         className={`block object-cover w-full h-full ${
//           isLoading ? "hidden" : "block"
//         }`}
//         loading="lazy"
//       />
//     </div>
//   );
// }

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
      : `${import.meta.env.VITE_APP_LARAVEL_API_URL}/${imageUrl}`
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
