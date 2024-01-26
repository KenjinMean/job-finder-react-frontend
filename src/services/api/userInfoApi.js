import axiosClient from "../../axios-client";
import { logAxiosError } from "../../utils/LogAxiosError";

/* ----------------------------------------------------------- */
export const apiUserInfoFetch = async () => {
  try {
    const response = await axiosClient.get("/user-infos/show");
    return response.data;
  } catch (error) {
    console.error(
      "Failed to fetch UserInfo on userApi fetch request:",
      error.message
    );

    logAxiosError(error);

    throw new Error("Failed to fetch UserInfo on userApi fetch request");
  }
};

/* ----------------------------------------------------------- */
export const apiUserInfoUpdate = async (payload) => {
  try {
    const response = await axiosClient.post("/user-infos/update", payload);
    return response;
  } catch (error) {
    console.error(
      "Failed to Update UserInfo on userApi update request:",
      error.message
    );

    logAxiosError(error);

    throw new Error("Failed to Update UserInfo on userApi update request");
  }
};

/* ----------------------------------------------------------- */
export const apiUserProfileImageUpdate = async (payload) => {
  try {
    const response = await axiosClient.post(
      "/user-infos/update-profile-image",
      payload
    );
    return response;
  } catch (error) {
    console.error(
      "Failed to Update Profile Image on userApi update request:",
      error.message
    );

    logAxiosError(error);

    throw new Error("Failed to Update Profile Image on userApi update request");
  }
};

/* ----------------------------------------------------------- */
export const apiUserCoverImageUpdate = async (payload) => {
  try {
    const response = await axiosClient.post(
      "/user-infos/update-cover-image",
      payload
    );
    return response;
  } catch (error) {
    console.error(
      "Failed to Update Cover Image on userApi update request:",
      error.message
    );

    logAxiosError(error);

    throw new Error("Failed to Update Cover Image on userApi update request:");
  }
};
