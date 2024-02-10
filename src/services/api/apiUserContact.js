import axiosClient from "../../utils/axiosClient.Util";

/* ----------------------------------------------------------- */
// fetch user contact
export const apiUserContactFetch = async () => {
  return await axiosClient.get("/user-contacts/show");
};

/* ----------------------------------------------------------- */
// update user contact
export const apiUserContactUpdate = async (payload) => {
  return await axiosClient.post("/user-contacts/update", payload);
};
