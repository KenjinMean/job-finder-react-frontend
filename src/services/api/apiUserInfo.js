import axiosClient from "../../utils/axiosClient.Util";

const userInfoBaseUrl = "users/user-info";

/* ----------------------------------------------------------- */
export const apiUserInfoFetch = async () => {
  return await axiosClient.get(`${userInfoBaseUrl}`);
};

/* ----------------------------------------------------------- */
export const apiUserInfoUpdate = async (payload) => {
  return await axiosClient.post(`${userInfoBaseUrl}`, payload);
};

/* ----------------------------------------------------------- */
export const apiUserProfileImageUpdate = async (payload) => {
  return await axiosClient.post(`${userInfoBaseUrl}/profile-image`, payload);
};

/* ----------------------------------------------------------- */
export const apiUserCoverImageUpdate = async (payload) => {
  return await axiosClient.post(`${userInfoBaseUrl}/cover-image`, payload);
};

/* ----------------------------------------------------------- */
export const apiUserProfileImageDelete = async () => {
  return await axiosClient.delete(`${userInfoBaseUrl}/profile-image`);
};

/* ----------------------------------------------------------- */
export const apiUserCoverImageDelete = async () => {
  return await axiosClient.delete(`${userInfoBaseUrl}/cover-image`);
};
