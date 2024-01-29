import axiosClient from "../../axios-client";

/* ----------------------------------------------------------- */
export const apiUserInfoFetch = async () => {
  const response = await axiosClient.get("/user-infos/show");
  return response;
};

/* ----------------------------------------------------------- */
export const apiUserInfoUpdate = async (payload) => {
  const response = await axiosClient.post("/user-infos/update", payload);
  return response;
};

/* ----------------------------------------------------------- */
export const apiUserProfileImageUpdate = async (payload) => {
  const response = await axiosClient.post(
    "/user-infos/update-profile-image",
    payload
  );
  return response;
};

/* ----------------------------------------------------------- */
export const apiUserCoverImageUpdate = async (payload) => {
  const response = await axiosClient.post(
    "/user-infos/update-cover-image",
    payload
  );
  return response;
};
