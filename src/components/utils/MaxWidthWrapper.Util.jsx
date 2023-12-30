import React from "react";

export default function MaxWidthWrapperUtil({ children, className = "" }) {
  return <div className={`mx-auto max-w-5xl ${className}`}>{children}</div>;
}
