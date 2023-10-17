import React, { createContext, useContext, useState, useEffect } from "react";
import axiosClient from "../axios-client";

const JobsContext = createContext();

export function useJobsContext() {
  return useContext(JobsContext);
}

export function JobsProvider({ children }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [jobId, setJobId] = useState(null);

  const fetchJobs = async () => {
    try {
      const { data } = await axiosClient.get("/jobs/get-job-posting");
      setJobs(data.data);
      const { data: jobData } = data;

      if (jobData.length > 0) {
        setJobId(jobData[0].id);
      }

      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch job postings:", error);
      setLoading(false);
    }
  };

  const searchJobs = async (keyword) => {
    try {
      const payload = {
        keyword: keyword,
      };

      setLoading(true);

      const { data } = await axiosClient.get("/jobs/search-jobs", {
        params: payload,
      });

      setJobs(data.data);
      const { data: jobData } = data;

      if (jobData.length > 0) {
        setJobId(jobData[0].id);
      }

      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch job postings:", error);
      setLoading(false);
    }
  };

  return (
    <JobsContext.Provider
      value={{ jobs, loading, jobId, fetchJobs, searchJobs }}
    >
      {children}
    </JobsContext.Provider>
  );
}
