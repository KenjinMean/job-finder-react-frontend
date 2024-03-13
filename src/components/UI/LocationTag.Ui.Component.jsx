import React from "react";

export default function LocationTagUiComponent({
  city,
  zipCode,
  country,
  province,
}) {
  return (
    <p className="text-sm text-content-slate_500 empty:hidden">
      {city && <span>{city}</span>}
      {province && (
        <>
          {city && ", "}
          <span>{province}</span>
        </>
      )}
      {zipCode && (
        <>
          {(city || province) && ", "}
          <span>{zipCode}</span>
        </>
      )}
      {country && (
        <>
          {(city || province || zipCode) && ", "}
          <span>{country}</span>
        </>
      )}
    </p>
  );
}
