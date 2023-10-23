import React from "react";

export default function ErrorFallbackView({ error, resetErrorBoundary }) {
  return (
    <div className="p-5 mx-auto border rounded-md max-w-7xl">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

// import React, { useState } from "react";

// const ErrorFallback = ({ children }) => {
//   const [hasError, setHasError] = useState(false);

//   const componentDidCatch = (error, info) => {
//     // Handle the error, log it, or set a state to indicate an error
//     console.error(error, info);
//     setHasError(true);
//   };

//   if (hasError) {
//     // You can render a custom error message or a fallback UI
//     return <div>Something went wrong. Please try again later.</div>;
//   }

//   return children;
// };

// export default ErrorFallback;
