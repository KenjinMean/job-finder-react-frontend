import axiosClient from "../../axios-client";

/* ----------------------------------------------------------- */
// fetch user contact
export const apiUserContactFetch = async () => {
  return await axiosClient.get("/user-contact/show");
};

/* ----------------------------------------------------------- */
// update user contact
export const apiUserContactUpdate = async (payload) => {
  return await axiosClient.post("/user-contact/update", payload);
};
