import React from "react";
import { AnimatePresence } from "framer-motion";

import { userOverlays } from "../../constants/routes";
import {
  useCreateOverlayParamUrl,
  useOverlayParamDetector,
} from "../../hooks/useOverlay";
import { useFetchtUserInfo } from "../../services/api/useProfileRequesthandler";

import LinkEditUiComponent from "../UI/LinkEdit.Ui.Component";
import UserAboutEditModalComponent from "../modals/user/UserAboutEdit.Modal.Component";

export default function UserAboutComponent() {
  const { data: userInfo } = useFetchtUserInfo();

  const isOverlayOpen = useOverlayParamDetector(
    userOverlays.userAboutEditOverlay
  );

  return (
    <section className="relative w-full p-5 overflow-hidden rounded-lg bg-slate-200">
      <h2 className="text-2xl font-semibold">About</h2>

      <div className="absolute flex items-center gap-1 right-5 top-5">
        <LinkEditUiComponent
          to={useCreateOverlayParamUrl(userOverlays.userAboutEditOverlay)}
          preventScrollReset={true}
        />
      </div>
      <div>{userInfo.about}</div>
      <AnimatePresence mode="wait">
        {isOverlayOpen && <UserAboutEditModalComponent />}
      </AnimatePresence>
    </section>
  );
}
