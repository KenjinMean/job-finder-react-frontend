import { Fragment } from "react";
import router from "./router.jsx";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";

import cspConfig from "./config/cspConfig.js";

function App() {
  return (
    <HelmetProvider>
      <Fragment>
        <Helmet>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="description"
            content="Search and apply for thousands of job listings in various industries. Find your next career opportunity with Job Finder."
          />
          <title>Job Finder</title>
          {/* <!-- Open Graph (OG) Meta Tags for Social Sharing --> */}
          <meta property="og:title" content="Job Finder" />
          <meta
            property="og:description"
            content="Find your next career opportunity with Job Finder. Search and apply for thousands of job listings in various industries."
          />
          <meta property="og:image" content="/src/assets/icons/favicon.png" />
          {/* <!-- Add an image URL for social sharing  --> */}
          <meta property="og:url" content="URL_TO_YOUR_APP" />
          <meta property="og:type" content="website" />
          <meta http-equiv="Content-Security-Policy" content={cspConfig} />
          <link
            rel="icon"
            type="image/png"
            href="/src/assets/icons/favicon.png"
          />
        </Helmet>
        <div className="font-primary">
          <RouterProvider router={router} />
        </div>
      </Fragment>
    </HelmetProvider>
  );
}
export default App;
