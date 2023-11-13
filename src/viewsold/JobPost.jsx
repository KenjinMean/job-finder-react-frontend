import React, { useState, useRef, useEffect } from "react";
import axiosClient from "../axios-client";

export default function JobPost() {
  const [errors, setErrors] = useState("");
  const [companyId, setCompanyId] = useState("");
  const [userCompany, setUserCompany] = useState(null);

  const titleRef = useRef();
  const locationRef = useRef();
  const descriptionRef = useRef();
  const requirementsRef = useRef();
  const salaryRef = useRef();

  const handleCompanySelect = (event) => {
    setCompanyId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const payload = {
      company_id: companyId,
      category_id: categoryId,
      title: titleRef.current.value,
      location: locationRef.current.value,
      description: descriptionRef.current.value,
      requirements: requirementsRef.current.value,
      salary: salaryRef.current.value,
    };

    axiosClient
      .post("/jobs", payload)
      .then(({ data }) => {
        console.log(data.message);
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

  const getUserCompanies = () => {
    axiosClient
      .get("companies/user-companies")
      .then(({ data }) => {
        setUserCompany(data);
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

  useEffect(() => {
    getUserCompanies();
  }, []);

  return (
    <div className="p-5">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 items-start">
        <div className="flex gap-3 items-center ">
          <label htmlFor="company">Company</label>
          <select
            name="company"
            id="company"
            value={companyId}
            onChange={handleCompanySelect}
          >
            <option value="">Select Company</option>
            {userCompany &&
              userCompany.map((company) => {
                return (
                  <option key={company.id} value={company.id}>
                    {company.name}
                  </option>
                );
              })}
          </select>
        </div>
        {/* <div className="flex gap-3 items-center ">
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            value={categoryId}
            onChange={handleSelect}
          >
            <option value="">Select Category</option>
            {allCategories &&
              allCategories.map((category) => {
                return (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                );
              })}
          </select>
        </div> */}
        <div className="flex gap-3 items-center">
          <label htmlFor="">Job Title</label>
          <input type="text" className="border p-2" ref={titleRef} />
        </div>
        <div className="flex gap-3 items-center">
          <label htmlFor="">Job Location</label>
          <input type="text" className="border p-2" ref={locationRef} />
        </div>
        <div className="flex gap-3 items-center">
          <label htmlFor="">Job Description</label>
          <input type="text" className="border p-2" ref={descriptionRef} />
        </div>
        <div className="flex gap-3 items-center">
          <label htmlFor="">Job Requirements</label>
          <input type="text" className="border p-2" ref={requirementsRef} />
        </div>
        <div className="flex gap-3 items-center">
          <label htmlFor="">Job Salary</label>
          <input type="text" className="border p-2" ref={salaryRef} />
        </div>
        <button className="px-8 py-2 bg-blue-600 rounded-sm text-white font-semibold">
          Create
        </button>
      </form>
    </div>
  );
}
