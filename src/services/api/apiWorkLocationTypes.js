import axiosClient from "../../utils/axiosClient.Util";

/* ----------------------------------------------------------- */
// fetch Work Location Types
export const apiWorkLocationTypesFetch = async () => {
  return await axiosClient.get(`/work-location-types`);
};
