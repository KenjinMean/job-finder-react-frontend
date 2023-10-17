import React, { useEffect, useRef, useState } from "react";
import axiosClient from "../axios-client";

export default function EditUserInfo({ handleEdit, handleUserInfoUpdate }) {
  const [userInfo, setUserInfo] = useState({});

  const handleChange = (e) => {
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const payload = {
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      additionalName: userInfo.additionalName,
      headline: userInfo.headline,
      pronouns: userInfo.pronouns,
      about: userInfo.about,
      location: userInfo.location,
    };

    axiosClient
      .put("user-infos/update", payload)
      .then(() => {
        handleUserInfoUpdate();
      })
      .catch((error) => {
        console.log(error.response.data);
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

  const fetchUserInfo = () => {
    axiosClient
      .get("user-infos/show")
      .then(({ data }) => {
        setUserInfo(data);
      })
      .catch((error) => {
        console.log(error.response.data);
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
    fetchUserInfo();
  }, []);

  return (
    <div className="absolute inset-0 transition-all">
      <div className="p-5 bg-slate-100">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-xl">Edit user Info</h1>
          <button
            onClick={handleEdit}
            className="py-2 px-5 rounded-full bg-blue-300 hover:bg-blue-500"
          >
            close
          </button>
        </div>
        <div action="" className="p-5 flex flex-col gap-3 items-center">
          <div>
            <input
              type="text"
              name="firstName"
              value={userInfo.firstName}
              onChange={handleChange}
              placeholder="First Name"
            />
          </div>
          <div>
            <input
              type="text"
              name="additionalName"
              value={userInfo.additionalName}
              onChange={handleChange}
              placeholder="Additional Name"
            />
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              value={userInfo.lastName}
              onChange={handleChange}
              placeholder="Last Name"
            />
          </div>
          <div>
            <input
              type="text"
              name="headline"
              value={userInfo.headline}
              onChange={handleChange}
              placeholder="Headline"
            />
          </div>
          <div>
            <input
              type="text"
              name="pronouns"
              value={userInfo.pronouns}
              onChange={handleChange}
              placeholder="Pronouns"
            />
          </div>
          <div></div>
          <input
            type="text"
            name="about"
            value={userInfo.about}
            onChange={handleChange}
            placeholder="About"
          />
          <div>
            <input
              type="text"
              name="location"
              value={userInfo.location}
              onChange={handleChange}
              placeholder="Location"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="py-2 px-5 rounded-full bg-blue-300 hover:bg-blue-500"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
