import React, { useRef } from "react";

import { UserModals } from "../../constants/ModalNames.Constants";

import { useApiUserInfoFetch } from "../../hooks/useApiUserInfo";
import { useOpenModalParam } from "../../hooks/useModalFunctions";
import { useTruncatedElement } from "../../hooks/useTruncatedElement";

import LinkEditUiComponent from "../UI/LinkEdit.Ui.Component";
import CardHeadingUiComponent from "../UI/CardHeading.Ui.Component";
import CardContainerUitl from "../utils/CardContainer.Uitl";

export default function UserAboutCardComponent() {
  const { data: userInfo } = useApiUserInfoFetch();

  const ref = useRef(null);
  const { isTruncated, isShowingMore, toggleIsShowingMore } =
    useTruncatedElement(ref);

  return (
    <CardContainerUitl>
      <CardHeadingUiComponent title="About" />

      <div className="absolute flex items-center gap-1 right-5 top-5">
        {/* edit about link */}
        <LinkEditUiComponent
          to={useOpenModalParam(UserModals.userAboutEditModal.name)}
        />
      </div>
      <p
        ref={ref}
        className={`whitespace-pre-line text-sm text-content-slate_500 ${
          !isShowingMore && "line-clamp-3"
        }`}
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
    </CardContainerUitl>
  );
}
