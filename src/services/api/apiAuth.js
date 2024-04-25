import axiosClient from "../../utils/axiosClient.Util";

const authBaseUrl = "auth";
/* ----------------------------------------------------------- */
/**
 * API function to log in a user.
 *
 * @param {Object} payload - The user login credentials.
 * @returns {Promise} A promise that resolves with the login response.
 */
export const apiLogin = async (payload) => {
  return axiosClient.post(`${authBaseUrl}/login`, payload);
};

/* ----------------------------------------------------------- */
/**
 * API function to log out the currently authenticated user.
 *
 * @returns {Promise} A promise that resolves with the logout response.
 */
export const apiLogout = async () => {
  return axiosClient.post(`${authBaseUrl}/logout`);
};

/* ----------------------------------------------------------- */
/**
 * API function to check if user email available.
 *
 * @returns {Promise} A promise that resolves with the token refresh response.
 */
export const apiCheckEmail = async (value) => {
  return axiosClient.get(
    `${authBaseUrl}/check-email-availability?email=${value}`
  );
};

/* ----------------------------------------------------------- */
/**
 * API function to register a new user.
 *
 * @param {Object} payload - The user registration details.
 * @returns {Promise} A promise that resolves with the registration response.
 */
export const apiRegister = async (payload) => {
  return axiosClient.post(`${authBaseUrl}/register`, payload);
};

/* ----------------------------------------------------------- */
/**
 * API function to send otp to user email.
 *
 * @param {Object} email - The user email to send the otp.
 * @returns {Promise} A promise that resolves with the send response.
 */
export const apiAuthRequestOtp = async (email) => {
  return axiosClient.post(`${authBaseUrl}/request-otp?email=${email}`);
};

/* ----------------------------------------------------------- */
/**
 * API function to verify otp code.
 *
 * @param {Object} email - The user email to send the otp.
 * @returns {Promise} A promise that resolves with the send response.
 */
export const apiAuthVerifyOtp = async (payload) => {
  return axiosClient.post(`${authBaseUrl}/verify-otp`, payload);
};

/* ----------------------------------------------------------- */
/**
 * API function for initiating GitHub OAuth login.
 *
 * @returns {Promise} A promise that resolves with the GitHub login URL.
 */
export const apiGitHubAuthLogin = async () => {
  return axiosClient.get(`${authBaseUrl}/github/get-authorization-url`);
};

/* ----------------------------------------------------------- */
/**
 * API function for initiating Google OAuth login.
 *
 * @returns {Promise} A promise that resolves with the Google login URL.
 */
export const apiGoogleAuthLogin = async () => {
  return axiosClient.get(`${authBaseUrl}/google/get-authorization-url`);
};

/* ----------------------------------------------------------- */
/**
 * API function to refresh the user's authentication token.
 *
 * @returns {Promise} A promise that resolves with the token refresh response.
 */
export const apiRefreshToken = async () => {
  return axiosClient.post(`${authBaseUrl}/refresh-token`);
};
