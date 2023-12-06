import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import { useAuthenticationStore } from "./services/state/AuthenticationStore.js";
import { useRefreshToken } from "./services/api/useAuthRequestHandler.js";
import { useEffect, Fragment } from "react";
import { Helmet } from "react-helmet";

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
    <Fragment>
      <Helmet>
        {/* Add your CSP meta tag */}
        <meta
          http-equiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' https://example.com; style-src 'self' https://fonts.googleapis.com; img-src 'self' data: https://example.com; font-src 'self' https://fonts.gstatic.com"
        />
      </Helmet>
      <div className="font-primary">
        <RouterProvider router={router} />
      </div>
    </Fragment>
  );
}
export default App;
