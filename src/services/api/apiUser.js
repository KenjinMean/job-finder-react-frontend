import axiosClient from "../../utils/axiosClient.Util";

/* ----------------------------------------------------------- */
/**
 * API function to fetch a user.
 *
 * @param {Object} payload - The user login credentials.
 * @returns {Promise} A promise that resolves with the login response.
 */
export const apiFetchUser = async (userId) => {
  return axiosClient.get(`/users/${userId}`);
};
