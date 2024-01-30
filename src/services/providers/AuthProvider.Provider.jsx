import React, { useEffect } from "react";
import { useAuthenticationStore } from "../state/AuthenticationStore";
import { useApiAuthRefreshToken } from "../../hooks/useApiAuth";

const AuthProviderProvider = ({ children }) => {
  const { token } = useAuthenticationStore();

  const refreshToken = () => {
    refreshTokenFn();
  };

  const { refetch: refreshTokenFn } = useApiAuthRefreshToken(refreshToken);

  useEffect(() => {
    if (token) {
      refreshToken();
    }
  }, [token]);

  return <>{children}</>;
};

export default AuthProviderProvider;
