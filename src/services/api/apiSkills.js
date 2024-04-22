import axiosClient from "../../utils/axiosClient.Util";

/* ----------------------------------------------------------- */
// fetch skill
export const apiUserFetchSkills = async () => {
  return await axiosClient.get(`/users/skills`);
};

/* ----------------------------------------------------------- */
// search skill
export const apiSkillSearch = async (keyword) => {
  return await axiosClient.get(`skills/?keyword=${keyword}`);
  // return await axiosClient.get(`/search-skills?keyword=${keyword}`);
};

/* ----------------------------------------------------------- */
// add skill
export const apiUserAddSkill = async (skillId) => {
  return await axiosClient.post(`/users/skills/${skillId}`);
};

/* ----------------------------------------------------------- */
// remove skill
export const apiUserRemoveSkill = async (skillId) => {
  return await axiosClient.delete(`/users/skills/${skillId}`);
};
