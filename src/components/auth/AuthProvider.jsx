import React, { useEffect, useRef } from "react";
import { useRefreshToken } from "../../services/api/useAuthRequestHandler";
import { useStateContext } from "../../context/ContextProvider";

const AuthProvider = ({ children }) => {
  const isRefreshing = useRef(false);

  const { token, user, setToken, refreshTimeoutRef, setIsTokenRefreshing } =
    useStateContext();

  const refreshTokenSuccess = (data) => {
    refreshTimeoutRef.current = setTimeout(() => {
      refreshTokenFn();
    }, (data.expires_in - 5) * 1000);

    setToken(data);
  };

  const refreshTokenFinally = () => setIsTokenRefreshing(false);

  const { refetch: refreshTokenFn } = useRefreshToken(
    user.id,
    refreshTokenSuccess,
    refreshTokenFinally
  );

  const refreshToken = () => {
    if (!isRefreshing.current) {
      setIsTokenRefreshing(true);
      isRefreshing.current = true;
      refreshTokenFn();
    }
  };

  useEffect(() => {
    if (token) {
      refreshToken();
    }
  }, [token]);

  return <>{children}</>;
};

export default AuthProvider;
