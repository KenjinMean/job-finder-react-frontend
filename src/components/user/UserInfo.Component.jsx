import React from "react";

import { useFetchtUserInfo } from "../../services/api/useProfileRequesthandler";

import LinkEditUiComponent from "../UI/LinkEdit.Ui.Component";
import ClickableLinkedImageUiComponent from "../UI/ClickableLinkedImage.Ui.Component";

import {
  editUserInfoPageRoute,
  userProfileOverlayPageRoute,
  userCoverImageOverlayPageRoute,
} from "../../constants/routes";

export default function UserInfoComponent() {
  const { data: userInfo } = useFetchtUserInfo();

  const defauletProfileUrl = "storage/user_profile_images/default-avatar.png";

  return (
    <section className="relative w-full overflow-hidden sm:rounded-lg bg-slate-200">
      <ClickableLinkedImageUiComponent
        imagePathUrl={userInfo?.cover_image}
        to={userCoverImageOverlayPageRoute}
        className="block w-full h-36 sm:h-48 "
      />
      <ClickableLinkedImageUiComponent
        imagePathUrl={userInfo?.profile_image}
        to={userProfileOverlayPageRoute}
        className="absolute z-10 w-32 h-32 overflow-hidden border-4 rounded-full sm:w-40 sm:h-40 top-20 left-5 border-slate-200"
      />
      <div className="relative p-5 border">
        <div className="flex gap-1 mt-10 text-xl font-bold">
          <p>
            {`${userInfo?.first_name} 
              ${userInfo.additional_name ? `(${userInfo.additional_name})` : ""}
              ${userInfo?.last_name}`}
          </p>
        </div>
        <p>{userInfo?.headline}</p>
        <span>{userInfo?.location}</span>
        <LinkEditUiComponent
          className="absolute right-5 top-5"
          to={editUserInfoPageRoute}
          preventScrollReset={true}
        />
      </div>
    </section>
  );
}
