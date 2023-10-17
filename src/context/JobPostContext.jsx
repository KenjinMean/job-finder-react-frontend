import React, { createContext, useContext, useState } from "react";

const JobPostContext = createContext();

const JobPostProvider = ({ children }) => {
  const getUserCompanies = () => {
    axiosClient
      .get("/users")
      .then(({ data }) => {
        setUserCompany(data.data);
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          if (response.data.errors) {
            setErrors(response.data.errors);
          } else {
            setErrors({
              email: [response.data.message],
            });
          }
        }
      });
  };

  return (
    <JobPostContext.Provider value={getUserCompanies}>
      {children}
    </JobPostContext.Provider>
  );
};

export { JobPostContext, JobPostProvider };
