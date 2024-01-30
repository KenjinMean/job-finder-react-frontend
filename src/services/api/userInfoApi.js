import axiosClient from "../../axios-client";

/* ----------------------------------------------------------- */
// fetch user info
export const apiUserInfoFetch = async () => {
  return await axiosClient.get("/user-infos/show");
};

/* ----------------------------------------------------------- */
// update user info
export const apiUserInfoUpdate = async (payload) => {
  return await axiosClient.post("/user-infos/update", payload);
};

/* ----------------------------------------------------------- */
// update profile image
export const apiUserProfileImageUpdate = async (payload) => {
  return await axiosClient.post("/user-infos/update-profile-image", payload);
};

/* ----------------------------------------------------------- */
// update cover image
export const apiUserCoverImageUpdate = async (payload) => {
  return await axiosClient.post("/user-infos/update-cover-image", payload);
};
