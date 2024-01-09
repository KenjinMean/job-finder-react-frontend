import React, { useRef } from "react";

import { useOpenOverlay } from "../../hooks/useOverlayFunctions";
import { useTruncatedElement } from "../../hooks/useTruncatedElement";

import LinkEditUiComponent from "../UI/LinkEdit.Ui.Component";
import { UserModals } from "../../constants/ModalNames.Constants";
import { useFetchtUserInfo } from "../../services/api/useProfileRequesthandler";

export default function UserAboutComponent() {
  const { data: userInfo } = useFetchtUserInfo();

  const ref = useRef(null);
  const { isTruncated, isShowingMore, toggleIsShowingMore } =
    useTruncatedElement(ref);

  return (
    <section className="relative w-full p-5 overflow-hidden rounded-lg bg-slate-200">
      <h2 className="text-2xl font-semibold">About</h2>

      <div className="absolute flex items-center gap-1 right-5 top-5">
        {/* edit about link */}
        <LinkEditUiComponent
          to={useOpenOverlay(UserModals.userAboutEditModal.name)}
          preventScrollReset={true}
        />
      </div>
      <p ref={ref} className={`${!isShowingMore && "line-clamp-3"}`}>
        {userInfo.about}
      </p>
      <div className="flex flex-row-reverse mt-2">
        {isTruncated && (
          <button
            onClick={toggleIsShowingMore}
            className="text-sm text-slate-600 hover:text-indigo-500"
          >
            {isShowingMore ? "...see less" : "...see more"}
          </button>
        )}
      </div>
    </section>
  );
}
