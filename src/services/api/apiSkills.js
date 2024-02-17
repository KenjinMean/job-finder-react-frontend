import axiosClient from "../../utils/axiosClient.Util";

/* ----------------------------------------------------------- */
// search skill
export const apiSkillSearch = async (keyword) => {
  return await axiosClient.get(`/search-skills?keyword=${keyword}`);
};

/* ----------------------------------------------------------- */
// add skill
export const apiUserAddSkill = async (skill) => {
  return await axiosClient.post(`/add-skill?skill_id=${skill.id}`);
};

/* ----------------------------------------------------------- */
// remove skill
export const apiUserRemoveSkill = async (skillId) => {
  return await axiosClient.delete(`/remove-skill?skill_id=${skillId}`);
};

/* ----------------------------------------------------------- */
// fetch skill
export const apiUserFetchSkill = async () => {
  return await axiosClient.get(`/get-user-skills`);
};
