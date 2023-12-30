import React from "react";
import LinkEditUiComponent from "../UI/LinkEdit.Ui.Component";
import { userRoutes } from "../../constants/routes";
import { useFetchtUserInfo } from "../../services/api/useProfileRequesthandler";

export default function UserAboutComponent() {
  const { data: userInfo } = useFetchtUserInfo();

  return (
    <section className="relative w-full p-5 overflow-hidden rounded-lg bg-slate-200">
      <h2 className="text-2xl font-semibold">About</h2>

      <div className="absolute flex items-center gap-1 right-5 top-5">
        <LinkEditUiComponent
          to={userRoutes.userAboutEditPage}
          preventScrollReset={true}
        />
      </div>
      <div>{userInfo.about}</div>
    </section>
  );
}
