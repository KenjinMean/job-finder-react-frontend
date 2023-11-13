import React, { useState, useEffect } from "react";
import axiosClient from "../axios-client";
import CompanyLogo from "./CompanyLogo";

export default function Companies() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(false);

  const getJobs = () => {
    setLoading(true);
    axiosClient
      .get("companies")
      .then(({ data }) => {
        setLoading(false);
        setCompanies(data.data);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <div className="flex flex-col gap-3">
      {loading ? (
        <div className="flex justify-center">
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      ) : (
        companies.map((company) => {
          return (
            <div key={company.id}>
              <div className="flex gap-3 p-5 border-b">
                <CompanyLogo logoPath={company.company_logo} />
                <div>
                  <h1>{company.name}</h1>
                  <p>{company.location}</p>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
