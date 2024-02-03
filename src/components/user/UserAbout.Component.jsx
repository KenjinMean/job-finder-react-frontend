import React, { useRef } from "react";

import { UserModals } from "../../constants/ModalNames.Constants";

import { useApiUserInfoFetch } from "../../hooks/useApiUserInfo";
import { useOpenModalParam } from "../../hooks/useModalFunctions";
import { useTruncatedElement } from "../../hooks/useTruncatedElement";

import LinkEditUiComponent from "../UI/LinkEdit.Ui.Component";
import { Link } from "react-router-dom";

export default function UserAboutComponent() {
  const { data: userInfo } = useApiUserInfoFetch();

  const ref = useRef(null);
  const { isTruncated, isShowingMore, toggleIsShowingMore } =
    useTruncatedElement(ref);

  return (
    <section className="relative w-full p-5 overflow-hidden border sm:rounded-lg text-content-black border-border-100 bg-background-gray_50">
      <h2 className="text-2xl font-semibold">About</h2>

      <a href={useOpenModalParam("user-about-edit-modal")}>
        Open modal via link
      </a>
      <Link to={useOpenModalParam("user-about-edit-modal")}> Open Modal</Link>

      <div className="absolute flex items-center gap-1 right-5 top-5">
        {/* edit about link */}
        <LinkEditUiComponent
          to={useOpenModalParam(UserModals.userAboutEditModal.name)}
        />
      </div>
      <p
        ref={ref}
        className={`whitespace-pre-line ${!isShowingMore && "line-clamp-3"}`}
      >
        {userInfo.about}
      </p>
      <div className="flex flex-row-reverse mt-2">
        {isTruncated && (
          <button
            onClick={toggleIsShowingMore}
            className="text-sm text-content-gray hover:text-indigo-500"
          >
            {isShowingMore ? "...see less" : "...see more"}
          </button>
        )}
      </div>
    </section>
  );
}
