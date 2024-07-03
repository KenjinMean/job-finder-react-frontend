import axios from "axios";

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_JOB_FINDER_API_URL}/api/`,
  headers: {
    common: {
      "Content-Type": "multipart/form-data",
    },
  },
  withCredentials: true,
});

//  this interceptor sends bearer token to every request
axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("ACCESS_TOKEN");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },

  async (error) => {
    const originalRequest = error.config;

    if (originalRequest.url === "refresh-token") {
      if (
        error.response.data.error === "Account Conflict: Email Already Linked"
      ) {
        console.log("email already taken");
      }

      if (error.response.data.message === "JWT error") {
        localStorage.removeItem("ACCESS_TOKEN");
        localStorage.removeItem("ACCESS_TOKEN_EXPIRES_IN");
        localStorage.removeItem("USER");
        window.location.reload();
      }

      if (
        error.response.status === 500 &&
        error.response.data.message === "Failed to authenticate token"
      ) {
        localStorage.removeItem("ACCESS_TOKEN");
        localStorage.removeItem("ACCESS_TOKEN_EXPIRES_IN");
        localStorage.removeItem("USER");
        window.location.reload();
      }

      if (error.response.data.message === "Token has expired") {
        try {
          const refreshResponse = await axiosClient.post("/refresh-token");

          const newAccessToken = refreshResponse.data.access_token;
          const newExpiresIn = refreshResponse.data.expires_in;

          localStorage.setItem("ACCESS_TOKEN", newAccessToken);
          localStorage.setItem("ACCESS_TOKEN_EXPIRES_IN", newExpiresIn);

          axiosClient.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${newAccessToken}`;

          return axiosClient(originalRequest);
        } catch (refreshError) {
          console.error("Failed to refresh token:", refreshError);
          // window.location.reload(); redirect to guest layout
        }
      }
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
