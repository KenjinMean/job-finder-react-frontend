import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import { useAuthenticationStore } from "./services/state/AuthenticationStore.js";
import { useRefreshToken } from "./services/api/useAuthRequestHandler.js";
import { useEffect } from "react";

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
    <div className="font-primary">
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
