import axiosClient from "../../axios-client";
import { logAxiosError } from "../../utils/LogAxiosError";
import { devError } from "../../utils/devError";

/* ----------------------------------------------------------- */
export const apiUserContactFetch = async () => {
  try {
    const response = await axiosClient.get("/user-contact/show");
    return response.data;
  } catch (error) {
    devError(
      "Failed to fetch user contact. API request failed:",
      error.message
    );

    logAxiosError(error);

    throw new Error("Failed to fetch user contact. API request failed");
  }
};

/* ----------------------------------------------------------- */
export const apiUserContactUpdate = async (payload) => {
  try {
    const response = await axiosClient.post("/user-contact/update", payload);
    return response;
  } catch (error) {
    devError(
      "Failed to update user contact. API request failed:",
      error.message
    );

    logAxiosError(error);

    throw new Error("Failed to update user contact. API request failed");
  }
};
