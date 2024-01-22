import React from "react";

import { UserModals } from "../../constants/ModalNames.Constants";

import { useOpenModalOverlay } from "../../hooks/useOverlayFunctions";
import { useFetchtUserInfo } from "../../services/api/useProfileRequesthandler";

import LinkEditUiComponent from "../UI/LinkEdit.Ui.Component";
import ClickableLinkedImageUiComponent from "../UI/ClickableLinkedImage.Ui.Component";

export default function UserInfoComponent() {
  // fetch User Info
  const { data: userInfo } = useFetchtUserInfo();

  return (
    <section className="relative w-full overflow-hidden border border-border-100 sm:rounded-lg bg-background-gray_50 text-content-black">
      {/* view Cover Image */}
      <ClickableLinkedImageUiComponent
        imagePathUrl={userInfo?.cover_image}
        to={useOpenModalOverlay(UserModals.userCoverImageViewModal.name)}
        className="block w-full h-36 sm:h-48 "
      />
      {/* view Profile Image */}
      <ClickableLinkedImageUiComponent
        imagePathUrl={userInfo?.profile_image}
        to={useOpenModalOverlay(UserModals.userProfileImageViewModal.name)}
        className="absolute z-10 w-32 h-32 overflow-hidden border-4 rounded-full sm:w-40 sm:h-40 top-20 left-5 border-slate-200"
      />
      <div className="relative p-5">
        <div className="flex gap-1 mt-10 text-xl font-bold">
          <p>
            {`${userInfo?.first_name} 
              ${userInfo.additional_name ? `(${userInfo.additional_name})` : ""}
              ${userInfo?.last_name}`}
          </p>
        </div>
        <p className="max-w-xl whitespace-pre-line">{userInfo?.headline}</p>
        <span>{userInfo?.location}</span>

        {/* edit link */}
        <LinkEditUiComponent
          className="absolute right-5 top-5"
          to={useOpenModalOverlay(UserModals.userInfoEditModal.name)}
        />
      </div>
    </section>
  );
}
