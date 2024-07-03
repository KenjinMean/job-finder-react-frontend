import React, { Fragment } from "react";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";

import router from "./router.jsx";

function App() {
  const cspConfig = import.meta.env.VITE_CSP_POLICY || "";

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Search and apply for thousands of job listings in various industries. Find your next career opportunity with Job Finder."
        />
        <title>Job Finder</title>
        {/* Open Graph (OG) Meta Tags for Social Sharing */}
        <meta property="og:title" content="Job Finder" />
        <meta
          property="og:description"
          content="Find your next career opportunity with Job Finder. Search and apply for thousands of job listings in various industries."
        />
        <meta property="og:image" content="/src/assets/icons/favicon.png" />
        <meta property="og:url" content="URL_TO_YOUR_APP" />
        <meta property="og:type" content="website" />
        <meta httpEquiv="Content-Security-Policy" content={cspConfig} />
      </Helmet>

      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;
