import React from "react";

import { userModalOverlayRoutes } from "../../constants/routes";

import { useOpenOverlay } from "../../hooks/useOverlayFunctions";
import { useFetchtUserInfo } from "../../services/api/useProfileRequesthandler";

import LinkEditUiComponent from "../UI/LinkEdit.Ui.Component";
import ClickableLinkedImageUiComponent from "../UI/ClickableLinkedImage.Ui.Component";

export default function UserInfoComponent() {
  // fetch User Info
  const { data: userInfo } = useFetchtUserInfo();

  const {
    userCoverImageViewModal,
    userProfileImageViewModal,
    userInfoEditModal,
  } = userModalOverlayRoutes;

  return (
    <section className="relative w-full overflow-hidden sm:rounded-lg bg-slate-200">
      <ClickableLinkedImageUiComponent
        imagePathUrl={userInfo?.cover_image}
        to={useOpenOverlay(userCoverImageViewModal)}
        className="block w-full h-36 sm:h-48 "
      />
      <ClickableLinkedImageUiComponent
        imagePathUrl={userInfo?.profile_image}
        to={useOpenOverlay(userProfileImageViewModal)}
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
        <p className="max-w-xl">{userInfo?.headline}</p>
        <span>{userInfo?.location}</span>
        <LinkEditUiComponent
          className="absolute right-5 top-5"
          to={useOpenOverlay(userInfoEditModal)}
          preventScrollReset={true}
        />
      </div>
    </section>
  );
}
