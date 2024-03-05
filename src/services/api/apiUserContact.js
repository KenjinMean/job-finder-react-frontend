import axiosClient from "../../utils/axiosClient.Util";

/* ----------------------------------------------------------- */
// fetch user contact
export const apiUserContactFetch = async () => {
  return await axiosClient.get("/user-contact");
};

/* ----------------------------------------------------------- */
// fetch user contact
export const apiUserContactStore = async (payload) => {
  return await axiosClient.post("/user-contact", payload);
};

/* ----------------------------------------------------------- */
// update user contact
export const apiUserContactUpdate = async (payload) => {
  return await axiosClient.post("/user-contact", payload);
};
