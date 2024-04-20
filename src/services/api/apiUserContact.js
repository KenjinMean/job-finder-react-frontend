import axiosClient from "../../utils/axiosClient.Util";

const userUserContactbaseUrl = "/user-contact";

/* ----------------------------------------------------------- */
// fetch user contact
export const apiUserContactFetch = async () => {
  return await axiosClient.get(`${userUserContactbaseUrl}`);
};

/* ----------------------------------------------------------- */
// fetch user contact
export const apiUserContactStore = async (payload) => {
  return await axiosClient.post(`${userUserContactbaseUrl}`, payload);
};

/* ----------------------------------------------------------- */
// update user contact
export const apiUserContactUpdate = async (payload) => {
  return await axiosClient.patch(`${userUserContactbaseUrl}`, payload);
};
