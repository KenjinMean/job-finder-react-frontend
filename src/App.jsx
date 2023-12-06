import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import { useAuthenticationStore } from "./services/state/AuthenticationStore.js";
import { useRefreshToken } from "./services/api/useAuthRequestHandler.js";
import { useEffect, Fragment } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import cspConfig from "./config/cspConfig.js";

function App() {
  const { token } = useAuthenticationStore();

  const refreshToken = () => {
    refreshTokenFn();
  };

  const { refetch: refreshTokenFn } = useRefreshToken(refreshToken);

  useEffect(() => {
    if (token) {
      refreshToken();
    }
  }, [token]);

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
          <meta property="og:image" content="URL_TO_YOUR_APP_IMAGE" />
          {/* <!-- Add an image URL for social sharing  --> */}
          <meta property="og:url" content="URL_TO_YOUR_APP" />
          <meta property="og:type" content="website" />
          <meta
            http-equiv="Content-Security-Policy"
            // content="default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.example.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https://example.com https://postsrc.com/ http://127.0.0.1:8000/ https://via.placeholder.com/; font-src 'self' https://fonts.gstatic.com; connect-src 'self' http://127.0.0.1:8000/;"
            content={`default-src ${cspConfig.defaultSrc}; script-src ${cspConfig.scriptSrc}; style-src ${cspConfig.styleSrc}; img-src ${cspConfig.imgSrc}; font-src ${cspConfig.fontSrc}; connect-src ${cspConfig.connectSrc};`}
          />
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
