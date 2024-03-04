import axiosClient from "../../utils/axiosClient.Util";

/* ----------------------------------------------------------- */
export const apiUserInfoFetch = async () => {
  return await axiosClient.get("/user-info");
};

/* ----------------------------------------------------------- */
export const apiUserInfoUpdate = async (payload) => {
  return await axiosClient.post("/user-info", payload);
};

/* ----------------------------------------------------------- */
export const apiUserProfileImageUpdate = async (payload) => {
  return await axiosClient.post("/user-info/profile-image", payload);
};

/* ----------------------------------------------------------- */
export const apiUserCoverImageUpdate = async (payload) => {
  return await axiosClient.post("/user-info/cover-image", payload);
};
