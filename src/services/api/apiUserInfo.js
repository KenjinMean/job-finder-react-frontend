import axiosClient from "../../utils/axiosClient.Util";

/* ----------------------------------------------------------- */
export const apiUserInfoFetch = async () => {
  return await axiosClient.get("/user-infos");
};

/* ----------------------------------------------------------- */
export const apiUserInfoUpdate = async (payload) => {
  return await axiosClient.post("/user-infos", payload);
};

/* ----------------------------------------------------------- */
export const apiUserProfileImageUpdate = async (payload) => {
  return await axiosClient.post("/user-infos/profile-image", payload);
};

/* ----------------------------------------------------------- */
export const apiUserCoverImageUpdate = async (payload) => {
  return await axiosClient.post("/user-infos/cover-image", payload);
};
