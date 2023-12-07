import React, { useEffect, useRef } from "react";
import { useRefreshToken } from "../api/useAuthRequestHandler";
import { useAuthenticationStore } from "../state/AuthenticationStore";

const AuthProviderProvider = ({ children }) => {
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

  return <>{children}</>;
};

export default AuthProviderProvider;
