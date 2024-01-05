import React, { useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { userOverlays } from "../../constants/routes";
import {
  useCreateOverlayParamUrl,
  useOverlayParamDetector,
} from "../../hooks/useOverlay";
import LinkEditUiComponent from "../UI/LinkEdit.Ui.Component";
import { useTruncatedElement } from "../../hooks/useTruncatedElement";
import { useFetchtUserInfo } from "../../services/api/useProfileRequesthandler";
import UserAboutEditModalComponent from "../modals/user/UserAboutEdit.Modal.Component";

export default function UserAboutComponent() {
  const { data: userInfo } = useFetchtUserInfo();

  const ref = useRef(null);
  const { isTruncated, isShowingMore, toggleIsShowingMore } =
    useTruncatedElement(ref);

  //detect if an overlay param is active and open the overlay modal accordingly
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
      <AnimatePresence mode="wait">
        {isOverlayOpen && <UserAboutEditModalComponent />}
      </AnimatePresence>
    </section>
  );
}
