import { useMutation, useQuery } from "@tanstack/react-query";
import axiosClient from "../axios-client";

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

export const useLogin = (onSuccess) => {
  return useMutation(login, {
    onSuccess: ({ data }) => {
      onSuccess(data);
    },
    useErrorBoundary: (error) =>
      !error.response ||
      (error.response.status !== 422 && error.response.status !== 409),
  });
};

export const useLogout = (id, onSuccess) => {
  return useQuery({
    queryKey: ["userlogout", id],
    queryFn: async () => {
      const response = await logout();
      if (response.status === 200) {
        onSuccess();
      }
      return response;
    },
    enabled: false,
  });
};

export const useRegister = (onSuccess) => {
  return useMutation(register, {
    onSuccess: ({ data }) => {
      onSuccess(data);
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
  });
};

export const useRefreshToken = (id, onSuccess, finallyFn) => {
  return useQuery({
    queryKey: ["refreshtoken", id],
    queryFn: async () => {
      // console.log("silent-refreshing-token");
      try {
        const response = await refreshToken();
        if (response.status === 200) {
          onSuccess(response.data);
        }
        return response;
      } catch (error) {
        throw error;
      } finally {
        finallyFn();
      }
    },
    enabled: false,
    cacheTime: 0,
  });
};
