import axiosClient from "../../axios-client";
import { devError } from "../../utils/devError";
import { logAxiosError } from "../../utils/LogAxiosError";

/* ----------------------------------------------------------- */
export const apiUserInfoFetch = async () => {
  try {
    const response = await axiosClient.get("/user-infos/show");
    return response.data;
  } catch (error) {
    devError("Failed to fetch UserInfo. API request failed:", error.message);

    logAxiosError(error);

    throw new Error("Failed to fetch UserInfo. API request failed");
  }
};

/* ----------------------------------------------------------- */
export const apiUserInfoUpdate = async (payload) => {
  try {
    const response = await axiosClient.post("/user-infos/update", payload);
    return response;
  } catch (error) {
    devError("Failed to Update UserInfo. API request failed:", error.message);

    logAxiosError(error);

    throw new Error("Failed to Update UserInfo. API request failed");
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
    devError(
      "Failed to Update Profile Image. API request failed:",
      error.message
    );

    logAxiosError(error);

    throw new Error("Failed to Update Profile Image. API request failed");
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
    devError(
      "Failed to Update Cover Image. API request failed:",
      error.message
    );

    logAxiosError(error);

    throw new Error("Failed to Update Cover Image. API request failed:");
  }
};
