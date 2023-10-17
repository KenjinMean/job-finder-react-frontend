import React from "react";

function CompanyLogo({ logoPath }) {
  const imageUrl = `${import.meta.env.VITE_API_BASE_URL}/${logoPath}`;
  return (
    <div>
      <img
        src={imageUrl}
        alt="Company Logo"
        loading="lazy"
        className="w-full h-full"
      />
    </div>
  );
}

export default CompanyLogo;
