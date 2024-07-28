import axiosClient from "../../utils/axiosClient.Util";

const userCompaniesBaseUrl = "/users/companies";

export const apiUserCompanyJobsFetch = async (companyId) => {
  return await axiosClient.get(`${userCompaniesBaseUrl}/${companyId}/jobs`);
};
