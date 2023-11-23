import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

import { useStateContext } from "../../context/ContextProvider";
import { useUserInformationStore } from "../../services/state/UserInformationStore";
import { useFetchtUserInfo } from "../../services/api/useProfileRequesthandler";

import UserInfoComponent from "./UserInfo.Component";
import UserSkillsComponent from "./UserSkills.Component";
import ClickableLinkedImageUiComponent from "../UI/ClickableLinkedImage.Ui.Component";

import { PageTitleUtil } from "../../components/utils/PageTitle.Util";

export default function UserProfileComponent() {
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
          <ClickableLinkedImageUiComponent
            imagePathUrl={user?.user_info?.cover_image}
            to="/edit-cover"
            className="block w-full h-48"
          />
          <ClickableLinkedImageUiComponent
            imagePathUrl={user?.user_info?.profile_image}
            to="/edit-profile"
            className="absolute w-40 h-40 overflow-hidden border-4 rounded-full top-20 left-5 border-slate-200"
          />

          <div className="">
            <UserInfoComponent
              userData={user.user_info}
              handleEdit={handleEdit}
            />
            <div></div>
          </div>
        </section>
        <UserSkillsComponent userData={user} />

        {/* This Outlet renders modals matched from url */}
        <Outlet />
      </div>
    </Fragment>
  );
}
