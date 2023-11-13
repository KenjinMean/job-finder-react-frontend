import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../axios-client";

export default function EditCoverImage() {
  const navigate = useNavigate();
  const companyLogoRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("_method", "PATCH");
    formData.append(
      "cover_image",
      companyLogoRef.current.files[0] ? companyLogoRef.current.files[0] : ""
    );

    axiosClient
      .post("/user-infos/update-cover-image", formData)
      .then(({ data }) => {
        console.log(data);
        navigate("/profile");
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
        <h1 className="text-3xl">Edit Cover</h1>
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

        <button className="px-8 py-3 bg-slate-400 rounded-full">Submit</button>
      </form>
    </div>
  );
}
