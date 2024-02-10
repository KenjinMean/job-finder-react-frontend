import { useState } from "react";
import {
  apiLogin,
  apiLogout,
  apiRegister,
  apiRefreshToken,
  apiGitHubAuthLogin,
  apiGoogleAuthLogin,
} from "../services/api/apiAuth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuthenticationStore } from "../services/state/AuthenticationStore";

/* ----------------------------------------------------------- */
export const useApiAuthLogin = () => {
  const {
    setToken,
    setAuthenticatedUser,
    setIsLoginButtonDisabled,
    setSocialServiceLoginError,
  } = useAuthenticationStore();

  return useMutation(apiLogin, {
    onMutate: () => {
      setSocialServiceLoginError(null);
      setIsLoginButtonDisabled(true);
    },
    onSuccess: ({ data }) => {
      setToken(data);
      setAuthenticatedUser(data.user);
    },
    onSettled: () => {
      setIsLoginButtonDisabled(false);
    },
    // do not use ErrorBoundary if the response status is 422 or 409 because login
    //  component has error to display error on the component
    useErrorBoundary: (error) =>
      !error.response ||
      (error.response.status !== 422 && error.response.status !== 409),
  });
};

/* ----------------------------------------------------------- */
export const useApiAuthLogout = () => {
  const { setToken, clearRefreshTimeout, setAuthenticatedUser } =
    useAuthenticationStore();
  const queryClient = useQueryClient();

  return useMutation(apiLogout, {
    onSuccess: () => {
      setToken(null);
      setAuthenticatedUser({});
      clearRefreshTimeout();

      // invalidate all queries on logout
      queryClient.invalidateQueries();
    },
    useErrorBoundary: true,
  });
};

/* ----------------------------------------------------------- */
export const useApiAuthRegister = () => {
  const { setToken, setAuthenticatedUser } = useAuthenticationStore();
  return useMutation(apiRegister, {
    onSuccess: ({ data }) => {
      setToken(data);
      setAuthenticatedUser(data.user);
    },
    // do not use ErrorBoundary if the response status is 422 or 409 because register component has error to display error on the component
    useErrorBoundary: (error) =>
      !error.response ||
      (error.response.status !== 422 && error.response.status !== 409),
  });
};

/* ----------------------------------------------------------- */
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
        throw { code: error.response.status };
      } finally {
        setIsLoginButtonDisabled(false);
      }
    },
    enabled: false,
    useErrorBoundary: true,
  });
};

export const useApiAuthRefreshToken = (callback) => {
  const {
    setRefreshTimeout,
    setToken,
    clearRefreshTimeout,
    authenticatedUser,
  } = useAuthenticationStore();

  const [isRefreshing, setIsRefreshing] = useState(false);

  const { refetch } = useQuery({
    queryKey: ["refreshToken", authenticatedUser.id], // do you need to provide ID
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
        throw { code: error.response.status };
      } finally {
        setIsRefreshing(false); // Reset the refresh state in case of errors
      }
    },
    enabled: false,
    cacheTime: 0,
  });

  return { refetch };
};
