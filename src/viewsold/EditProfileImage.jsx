import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../axios-client";

export default function EditProfileImage() {
  const navigate = useNavigate();
  const profileImageRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("_method", "PATCH");
    formData.append(
      "profile_image",
      profileImageRef.current.files[0] ? profileImageRef.current.files[0] : ""
    );

    axiosClient
      .post("/user-infos/update-profile-image", formData)
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
        <h1 className="text-3xl">page Identity</h1>
        <div>
          <label htmlFor="company_logo">Name </label>
          <input
            ref={profileImageRef}
            className="border p-2 rounded-md"
            type="file"
            name="profile_image"
            id="profile_image"
          />
        </div>

        <button className="px-8 py-3 bg-slate-400 rounded-full">Submit</button>
      </form>
    </div>
  );
}
