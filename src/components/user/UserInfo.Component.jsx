import React from "react";

import { useFetchtUserInfo } from "../../services/api/useProfileRequesthandler";

import LinkEditUiComponent from "../UI/LinkEdit.Ui.Component";
import ClickableLinkedImageUiComponent from "../UI/ClickableLinkedImage.Ui.Component";

import { editUserInfoPageRoute } from "../../constants/routes";

export default function UserInfoComponent() {
  const { data: userInfo } = useFetchtUserInfo();

  return (
    <section className="relative w-full overflow-hidden rounded-lg bg-slate-200">
      <ClickableLinkedImageUiComponent
        imagePathUrl={userInfo?.cover_image}
        to="/edit-cover"
        className="block w-full h-48"
      />
      <ClickableLinkedImageUiComponent
        imagePathUrl={userInfo?.profile_image}
        to="/edit-profile"
        className="absolute w-40 h-40 overflow-hidden border-4 rounded-full top-20 left-5 border-slate-200"
      />
      <div className="relative p-5">
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
