import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

import { useStateContext } from "../context/ContextProvider";
import { useFetchtUserInfo } from "../lib/hooks/useProfileRequesthandler";
import { useUserInformationStore } from "../lib/zustand/UserInformationStore";

import { PageTitleUtil } from "../components/utils/PageTitle.Util";

import UserInfoView from "../components/views/user/UserInfo.View";
import UserSkillsView from "../components/views/user/UserSkills.View";
import UserContactView from "../components/views/user/UserContact.View";
import UserCoverPhotoView from "../components/views/user/UserCoverPhoto.View";
import UserProfilePhotoView from "../components/views/user/UserProfilePhoto.View";

export default function UserProfilePage() {
  const { user: userContext } = useStateContext();
  const { user, setUser } = useUserInformationStore();

  useFetchtUserInfo(userContext.id, setUser);

  const handleEdit = () => {
    setEditActive((prev) => !prev);
  };

  return (
    <Fragment>
      <PageTitleUtil title="Profile" />
      <div>
        <section className="relative w-full overflow-hidden rounded-lg bg-slate-200">
          <UserCoverPhotoView userData={user?.user_info} />
          <UserProfilePhotoView userData={user?.user_info} />
          <div className="">
            <UserInfoView userData={user.user_info} handleEdit={handleEdit} />
            <div></div>
          </div>
        </section>
        <UserSkillsView userData={user} />
        <UserContactView userData={user} />

        {/* This Outlet renders modals matched from url */}
        <Outlet />
      </div>
    </Fragment>
  );
}
