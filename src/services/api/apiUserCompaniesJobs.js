import axiosClient from "../../utils/axiosClient.Util";

const userCompaniesBaseUrl = "/users/companies";

export const apiUserCompanyJobsFetch = async (companyId) => {
  return await axiosClient.get(`${userCompaniesBaseUrl}/${companyId}/jobs`);
};

export const apiUserCompanyJobDetailFetch = async (jobId) => {
  return await axiosClient.get(`jobs/${jobId}`);
};

export const apiUserCompanyJobStore = async (companyId, payload) => {
  return await axiosClient.post(
    `${userCompaniesBaseUrl}/${companyId}/jobs`,
    payload
  );
};

export const apiUserCompanyJobUpdate = async (companyId, jobId, payload) => {
  return await axiosClient.post(
    `${userCompaniesBaseUrl}/${companyId}/jobs/${jobId}`,
    payload
  );
};

export const apiUserCompanyJobDelete = async (companyId, jobId) => {
  return await axiosClient.delete(
    `${userCompaniesBaseUrl}/${companyId}/jobs/${jobId}`
  );
};
