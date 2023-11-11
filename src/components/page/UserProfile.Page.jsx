import React, { Fragment } from "react";

import UserInfoView from "../views/user/UserInfo.View";
import { PageTitleUtil } from "../utils/PageTitle.Util";
import { useStateContext } from "../../context/ContextProvider";
import UserCoverPhotoView from "../views/user/UserCoverPhoto.View";
import { useGetUserInfo } from "../../hooks/useProfileRequesthandler";
import UserProfilePhotoView from "../views/user/UserProfilePhoto.View";
import UserSkillsView from "../views/user/UserSkills.View";

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
      <main>
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
        <section></section>
        <UserSkillsView userData={userData} />
      </main>
    </Fragment>
  );
}
