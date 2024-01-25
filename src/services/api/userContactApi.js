import axiosClient from "../../axios-client";

export const apiFetchUserContact = async () => {
  try {
    const response = await axiosClient.get("/user-contact/show");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch user contact:", error.message);
    throw new Error("failed to fetch user contact");
  }
};

export const apiUpdateUserContact = async (payload) => {
  try {
    const response = await axiosClient.post("/user-contact/update", payload);
    return response;
  } catch (error) {
    console.error("Failed to update user contact:", error.message);
    throw new Error("Failed to update user contact. See console for details.");
  }
};
