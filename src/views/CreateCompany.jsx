import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../axios-client";

export default function CreateCompany() {
  const navigate = useNavigate();

  const nameRef = useRef();
  const companyLogoRef = useRef();
  const websiteRef = useRef();
  const locationRef = useRef();
  const descriptionRef = useRef();
  const industryRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    // const payload = {
    //   name: nameRef.current.value,
    //   company_logo: companyLogoRef.current.files[0],
    //   website: websiteRef.current.value,
    //   location: locationRef.current.value,
    //   description: descriptionRef.current.value,
    //   industry: industryRef.current.value,
    // };

    const formData = new FormData();
    formData.append("name", nameRef.current.value);
    formData.append("company_logo", companyLogoRef.current.files[0]);
    formData.append("website", websiteRef.current.value);
    formData.append("location", locationRef.current.value);
    formData.append("description", descriptionRef.current.value);
    formData.append("industry", industryRef.current.value);

    axiosClient
      .post("/companies", formData)
      .then(({ data }) => {
        console.log(data);
        navigate("/jobs");
      })
      .catch((e) => {
        console.log(e.messages);
      });
  };

  return (
    <div className="mt-5">
      <form
        onSubmit={onSubmit}
        encType="multipart/form-data"
        className="flex flex-col items-center gap-3 mx-auto max-w-2xl border p-5 rounded-md"
      >
        <h1 className="text-3xl">page Identity</h1>
        <div>
          <label htmlFor="name">Name </label>
          <input
            ref={nameRef}
            className="border p-2 rounded-md"
            type="text"
            name="name"
            id="name"
          />
        </div>

        <div>
          <label htmlFor="company_logo">Name </label>
          <input
            ref={companyLogoRef}
            className="border p-2 rounded-md"
            type="file"
            name="company_logo"
            id="company_logo"
          />
        </div>

        <div>
          <label htmlFor="website">Website </label>
          <input
            ref={websiteRef}
            className="border p-2 rounded-md"
            type="text"
            name="website"
            id="website"
          />
        </div>

        <div>
          <label htmlFor="location">Location </label>
          <input
            ref={locationRef}
            className="border p-2 rounded-md"
            type="text"
            name="location"
            id="location"
          />
        </div>

        <div>
          <label htmlFor="description">Description </label>
          <input
            ref={descriptionRef}
            className="border p-2 rounded-md"
            type="text"
            name="description"
            id="description"
          />
        </div>

        <div>
          <label htmlFor="industry">Industry </label>
          <input
            ref={industryRef}
            className="border p-2 rounded-md"
            type="text"
            name="industry"
            id="industry"
          />
        </div>

        <button className="px-8 py-3 bg-slate-400 rounded-full">Submit</button>
      </form>
    </div>
  );
}
