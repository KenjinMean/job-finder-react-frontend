import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  apiLogin,
  apiLogout,
  apiRegister,
  apiCheckEmail,
  apiRefreshToken,
  apiAuthVerifyOtp,
  apiAuthRequestOtp,
  apiGitHubAuthLogin,
  apiGoogleAuthLogin,
} from "../services/api/apiAuth";
import { handleError } from "../utils/handleError";
import { useUserStore } from "../services/state/UserStore";
import { useAuthenticationStore } from "../services/state/AuthenticationStore";

/* ----------------------------------------------------------- */
export const useApiAuthLogin = () => {
  const { setToken, setIsLoginButtonDisabled, setSocialServiceLoginError } =
    useAuthenticationStore();

  const { setUser, setUserInfo } = useUserStore();

  return useMutation(apiLogin, {
    onMutate: () => {
      setSocialServiceLoginError(null);
      setIsLoginButtonDisabled(true);
    },
    onSuccess: ({ data }) => {
      setToken(data);
      setUser(data.user);
      setUserInfo(data.user_info);
    },
    onSettled: () => {
      setIsLoginButtonDisabled(false);
    },
    // do not use ErrorBoundary if the response status is 422 or 409 because login
    //  component has error to display error on the component
    useErrorBoundary: (error) =>
      !error.response ||
      (error.response.status !== 422 && error.response.status !== 401),
  });
};

/* ----------------------------------------------------------- */
export const useApiAuthLogout = () => {
  const { setToken, clearRefreshTimeout } = useAuthenticationStore();
  const { setUser, setUserInfo } = useUserStore();

  const queryClient = useQueryClient();

  return useMutation(apiLogout, {
    onSuccess: () => {
      setToken(null);
      setUser({});
      setUserInfo({});
      clearRefreshTimeout();

      // clear all queries on logout
      queryClient.clear();
    },
    useErrorBoundary: true,
  });
};

/* ----------------------------------------------------------- */
export const useApiAuthCheckEmail = () => {
  return useQuery({
    queryKey: ["checkEmailAvailability"],
    queryFn: async (payload) => {
      const response = await apiCheckEmail(payload);
      return response;
    },
    enabled: false,
  });
};

/* ----------------------------------------------------------- */
export const useApiAuthRegister = () => {
  const { setToken } = useAuthenticationStore();
  const { setUser, setUserInfo } = useUserStore();

  return useMutation(apiRegister, {
    onSuccess: ({ data }) => {
      setToken(data);
      setUser(data.user);
      setUserInfo(data.user_info);
    },
    // do not use ErrorBoundary if the response status is 422 or 409 because register component has error to display error on the component
    useErrorBoundary: (error) =>
      !error.response ||
      (error.response.status !== 422 && error.response.status !== 409),
  });
};

/* ----------------------------------------------------------- */
export const useApiAuthRequestOtp = ({ onSuccess, onError }) => {
  return useMutation((email) => apiAuthRequestOtp(email), {
    onSuccess: (response) => {
      onSuccess(response);
    },
    onError: (error) => {
      onError(error);
    },
  });
};

/* ----------------------------------------------------------- */
export const useApiAuthVerifyOtp = ({ onSuccess, onError }) => {
  return useMutation(apiAuthVerifyOtp, {
    onSuccess: (response) => {
      onSuccess(response);
    },
    onError: (error) => {
      onError(error);
    },
  });
};

/* ----------------------------------------------------------- */
// use response.ok instead of comparing to 200
export const useApiAuthGithubAuthLogin = () => {
  const { setIsLoginButtonDisabled, setSocialServiceLoginError } =
    useAuthenticationStore();
  return useQuery({
    queryKey: ["getGithubAuthUrl"],
    queryFn: async () => {
      try {
        setSocialServiceLoginError(null);
        setIsLoginButtonDisabled(true);
        const response = await apiGitHubAuthLogin();
        if (response.status === 200) {
          window.location.href = response.data.authorization_url;
        }
        return response;
      } catch (error) {
        throw { code: error.response.status };
      } finally {
        setIsLoginButtonDisabled(false);
      }
    },
    enabled: false,
    useErrorBoundary: true,
  });
};

/* ----------------------------------------------------------- */
export const useApiAuthGoogleAuthLogin = () => {
  const { setIsLoginButtonDisabled, setSocialServiceLoginError } =
    useAuthenticationStore();
  return useQuery({
    queryKey: ["getGoogleAuthUrl"],
    queryFn: async () => {
      try {
        setSocialServiceLoginError(null);
        setIsLoginButtonDisabled(true);
        const response = await apiGoogleAuthLogin();
        if (response.status === 200) {
          window.location.href = response.data.authorization_url;
        }
        return response;
      } catch (error) {
        // use handleError to automatically throw error
        throw { code: error.response.status };
      } finally {
        setIsLoginButtonDisabled(false);
      }
    },
    enabled: false,
    useErrorBoundary: true,
  });
};

/* ----------------------------------------------------------- */
export const useApiAuthRefreshToken = (callback) => {
  const { user } = useUserStore();
  const { setToken, setRefreshTimeout, clearRefreshTimeout } =
    useAuthenticationStore();

  const [isRefreshing, setIsRefreshing] = useState(false);

  const { refetch } = useQuery({
    queryKey: ["refreshToken", user.id],
    queryFn: async () => {
      try {
        if (isRefreshing) {
          // Token refresh is already in progress, skip
          return { data: null }; // Return a default value to satisfy useQuery
        }

        setIsRefreshing(true);

        const response = await apiRefreshToken();

        if (response.status === 200) {
          // Clear the existing timeout
          clearRefreshTimeout();

          // Calculate the time until the next refresh (5 seconds before expiry)
          const refreshTime = (response.data.expires_in - 5) * 1000;

          // Set a new timeout for automatic refresh
          setRefreshTimeout(() => {
            setIsRefreshing(false); // Reset the refresh state before calling the callback
            callback();
          }, refreshTime);

          // Update the token
          setToken(response.data);
        }

        return response;
      } catch (error) {
        handleError(error, error.message, "useApiAuthRefreshToken");
        // throw { code: error.response.status, error: error };
      } finally {
        setIsRefreshing(false); // Reset the refresh state in case of errors
      }
    },
    enabled: false,
    cacheTime: 0,
  });

  return { refetch };
};
