import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

import { useStateContext } from "../../context/ContextProvider";
import { useGetUserInfo } from "../../lib/hooks/useProfileRequesthandler";

import { PageTitleUtil } from "../../components/utils/PageTitle.Util";

import UserContactView from "../../components/views/user/UserContact.View";
import UserInfoView from "../../components/views/user/UserInfo.View";
import UserSkillsView from "../../components/views/user/UserSkills.View";
import UserCoverPhotoView from "../../components/views/user/UserCoverPhoto.View";
import UserProfilePhotoView from "../../components/views/user/UserProfilePhoto.View";

export default function UserProfilePage() {
  const { user } = useStateContext();
  const {
    data: { data: userData },
  } = useGetUserInfo(user.id);

  const handleEdit = () => {
    setEditActive((prev) => !prev);
  };

  return (
    <Fragment>
      <PageTitleUtil title="Profile" />
      <div>
        <section className="relative w-full overflow-hidden rounded-lg bg-slate-200">
          <UserCoverPhotoView userData={userData?.user_info} />
          <UserProfilePhotoView userData={userData?.user_info} />
          <div className="">
            <UserInfoView
              userData={userData.user_info}
              handleEdit={handleEdit}
            />
            <div></div>
          </div>
        </section>
        <UserSkillsView userData={userData} />
        <UserContactView userData={userData} />

        {/* This Outlet renders modals matched from url */}
        <Outlet />
      </div>
    </Fragment>
  );
}
