import axiosClient from "../../axios-client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useAuthenticationStore } from "../state/AuthenticationStore";
import { useState } from "react";

const login = (payload) => {
  return axiosClient.post("/login", payload);
};

const logout = () => {
  return axiosClient.post("/logout");
};

const register = (payload) => {
  return axiosClient.post("/register-user", payload);
};

const githubAuthLogin = () => {
  return axiosClient.get("auth/github/get-authorization-url");
};

const googleAuthLogin = () => {
  return axiosClient.get("auth/google/get-authorization-url");
};

const refreshToken = () => {
  return axiosClient.post("refresh-token");
};

// ****************************************************

export const useLogin = () => {
  const {
    setToken,
    setAuthenticatedUser,
    setIsLoginButtonDisabled,
    setSocialServiceLoginError,
    setLoginError,
  } = useAuthenticationStore();

  return useMutation(login, {
    onMutate: () => {
      setLoginError(null);
      setSocialServiceLoginError(null);
      setIsLoginButtonDisabled(true);
    },
    onSuccess: ({ data }) => {
      setToken(data);
      setAuthenticatedUser(data.user);
    },
    onError: (error) => {
      setLoginError(error?.response?.data?.message);
    },
    onSettled: () => {
      setIsLoginButtonDisabled(false);
    },
    useErrorBoundary: (error) =>
      !error.response ||
      (error.response.status !== 422 && error.response.status !== 409),
  });
};

export const useLogout = (id, onSuccess) => {
  const { setToken, clearRefreshTimeout, setAuthenticatedUser } =
    useAuthenticationStore();
  return useQuery({
    queryKey: ["userlogout", id],
    queryFn: async () => {
      const response = await logout();
      if (response.status === 200) {
        setToken(null);
        setAuthenticatedUser({});
        clearRefreshTimeout();
      }
      return response;
    },
    enabled: false,
  });
};

export const useRegister = (onSuccess) => {
  return useMutation(register, {
    onSuccess: ({ data }) => {
      setToken(data);
      setAuthenticatedUser(data.user);
    },
    onError: (error) => {
      setLoginError(error?.response?.data?.message);
    },
    useErrorBoundary: (error) =>
      !error.response ||
      (error.response.status !== 422 && error.response.status !== 409),
  });
};

export const useGithubAuthLogin = (onSuccess) => {
  return useQuery({
    queryKey: ["getgithubauthurl"],
    queryFn: async () => {
      const response = await githubAuthLogin();
      if (response.status === 200) {
        onSuccess(response.data.authorization_url);
      }
      return response;
    },
    enabled: false,
    useErrorBoundary: true,
  });
};

export const useGoogleAuthLogin = (onSuccess) => {
  return useQuery({
    queryKey: ["getgoogleauthurl"],
    queryFn: async () => {
      const response = await googleAuthLogin();
      if (response.status === 200) {
        onSuccess(response.data.authorization_url);
      }
      return response;
    },
    enabled: false,
    useErrorBoundary: true,
  });
};

export const useRefreshToken = (callback) => {
  const {
    setRefreshTimeout,
    setToken,
    clearRefreshTimeout,
    authenticatedUser,
  } = useAuthenticationStore();

  const [isRefreshing, setIsRefreshing] = useState(false);

  const { refetch } = useQuery({
    queryKey: ["refreshtoken", authenticatedUser.id], // do you need to provide ID
    queryFn: async () => {
      try {
        if (isRefreshing) {
          // Token refresh is already in progress, skip
          return { data: null }; // Return a default value to satisfy useQuery
        }

        setIsRefreshing(true);

        const response = await refreshToken();

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
        throw error;
      } finally {
        setIsRefreshing(false); // Reset the refresh state in case of errors
      }
    },
    enabled: false,
    cacheTime: 0,
  });

  return { refetch };
};

// old refresh token
// export const useRefreshToken = (
//   id,
//   onSuccess = () => {},
//   finallyFn = () => {}
// ) => {
//   return useQuery({
//     queryKey: ["refreshtoken", id],
//     queryFn: async () => {
//       try {
//         const response = await refreshToken();
//         if (response.status === 200) {
//           onSuccess(response.data);
//         }
//         return response;
//       } catch (error) {
//         throw error;
//       } finally {
//         finallyFn();
//       }
//     },
//     enabled: false,
//     cacheTime: 0,
//   });
// };
