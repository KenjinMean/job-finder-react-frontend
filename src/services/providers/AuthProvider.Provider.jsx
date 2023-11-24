import React, { useEffect, useRef } from "react";
import { useRefreshToken } from "../api/useAuthRequestHandler";
import { useAuthenticationStore } from "../state/AuthenticationStore";

const AuthProviderProvider = ({ children }) => {
  // const { token, authenticatedUser } = useAuthenticationStore();
  // const isRefreshing = useRef(false);

  // const refreshTokenSuccess = (data) => {
  //   refreshTimeoutRef.current = setTimeout(() => {
  //     refreshTokenFn();
  //   }, (data.expires_in - 5) * 1000);

  //   setToken(data);
  // };

  // check this setIsrefreshing to false not used on useRefreshToken hook
  // const refreshTokenFinally = () => setIsTokenRefreshing(false);

  // const { refetch: refreshTokenFn } = useRefreshToken(authenticatedUser.id);

  // const refreshToken = () => {
  //   // if (!isRefreshing.current) {
  //   //   setIsTokenRefreshing(true);
  //   //   isRefreshing.current = true;
  //   // }
  //   refreshTokenFn();
  // };

  // useEffect(() => {
  //   if (token) {
  //     refreshToken();
  //   }
  // }, [token]);

  return <>{children}</>;
};

export default AuthProviderProvider;
