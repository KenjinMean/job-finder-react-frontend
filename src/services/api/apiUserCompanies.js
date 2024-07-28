import axiosClient from "../../utils/axiosClient.Util";

const userCompaniesBaseUrl = "/users/companies";

export const apiUserCompaniesFetch = async () => {
  return await axiosClient.get(`${userCompaniesBaseUrl}`);
};

export const apiUserCompanyFetch = async (companyId) => {
  return await axiosClient.get(`${userCompaniesBaseUrl}/${companyId}`);
};

export const apiUserCompanyStore = async (payload) => {
  return await axiosClient.post(`${userCompaniesBaseUrl}`, payload);
};

export const apiUserCompanyUpdate = async (companyId, payload) => {
  return await axiosClient.post(
    `${userCompaniesBaseUrl}/${companyId}`,
    payload
  );
};

export const apiUserCompanyDelete = async (companyId) => {
  return await axiosClient.delete(`${userCompaniesBaseUrl}/${companyId}`);
};
