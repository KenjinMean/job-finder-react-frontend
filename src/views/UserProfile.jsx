import React, { Fragment, useEffect, useState } from "react";
import EditUserInfo from "./EditUserInfo";
import axiosClient from "../axios-client";
import { Link } from "react-router-dom";
import { PageTitleUtil } from "../components/utils/PageTitle.Util";

export default function UserProfile() {
  const [userInfo, setUserInfo] = useState({});
  const [editActive, setEditActive] = useState(false);
  const [loading, setLoading] = useState(false);

  const imageUrl = `${import.meta.env.VITE_API_BASE_URL}/${
    userInfo.profile_image
  }`;
  const coverUrl = `${import.meta.env.VITE_API_BASE_URL}/${
    userInfo.cover_image
  }`;

  const handleEdit = () => {
    setEditActive((prev) => !prev);
  };

  const fetchUserInfo = () => {
    axiosClient
      .get("user-infos/show")
      .then(({ data }) => {
        console.log(data);
        setUserInfo(data);
      })
      .catch((error) => {
        console.log(error.response.data);
        const response = error.response;
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

  const handleUserInfoUpdate = () => {
    fetchUserInfo();
    handleEdit();
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);
  return (
    <Fragment>
      <PageTitle title="Profile" />
      <main className="max-w-2xl m-5 mx-auto">
        {editActive && (
          <div className="relative z-10 flex">
            <EditUserInfo
              handleEdit={handleEdit}
              fetchUserInfo={fetchUserInfo}
              handleUserInfoUpdate={handleUserInfoUpdate}
            />
          </div>
        )}

        <section className="relative w-full overflow-hidden rounded-lg bg-slate-200">
          <div>
            <Link to="/edit-cover" className="block w-full h-48">
              <img
                src={coverUrl}
                alt=""
                className="block object-cover w-full h-full "
              />
            </Link>
            <Link
              to="/edit-profile"
              className="absolute w-40 h-40 overflow-hidden border-4 rounded-full top-20 left-5 border-slate-200"
            >
              <img
                src={imageUrl}
                alt=""
                className="block object-cover object-center w-full h-full"
              />
            </Link>
          </div>

          <div className="p-5">
            <div className="flex justify-end">
              <button onClick={handleEdit}>edit</button>
            </div>
            <div className="p-5">
              <div className="flex gap-1 text-xl font-bold">
                <p>{userInfo.firstName}</p>
                <span>{userInfo.pronouns && `(${userInfo.pronouns})`}</span>
                <p>{userInfo.lastName}</p>
              </div>
              <p>{userInfo.headline}</p>
              <span>{userInfo.location}</span>
            </div>
          </div>
        </section>
        {/* <section>about</section>
      <section>Experience</section>
      <section>Education</section>
      <section>Skills</section> */}
      </main>
    </Fragment>
  );
}
