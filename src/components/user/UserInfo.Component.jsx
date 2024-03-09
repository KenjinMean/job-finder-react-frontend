import React from "react";

import { UserModals } from "../../constants/ModalNames.Constants";

import { useApiUserInfoFetch } from "../../hooks/useApiUserInfo";
import { useOpenModalParam } from "../../hooks/useModalFunctions";

import LinkEditUiComponent from "../UI/LinkEdit.Ui.Component";
import { useApiUserContactFetch } from "../../hooks/useApiUserContact";
import ClickableLinkedImageUiComponent from "../UI/ClickableLinkedImage.Ui.Component";
import { Link } from "react-router-dom";

export default function UserInfoComponent() {
  const { data: userInfo } = useApiUserInfoFetch();
  const { data: userContact } = useApiUserContactFetch();

  const location = `${userContact.city || null}, ${
    userContact.province || null
  } ${userContact.zip_code || null}, ${userContact.country || null}`;

  return (
    <section className="relative w-full overflow-hidden border border-border-100 sm:rounded-lg bg-background-gray_50 text-content-black">
      {/* view Cover Image */}
      <ClickableLinkedImageUiComponent
        imagePathUrl={userInfo?.cover_image}
        to={useOpenModalParam(UserModals.userCoverImageViewModal.name)}
        className="block w-full h-36 sm:h-48 "
      />
      {/* view Profile Image */}
      <ClickableLinkedImageUiComponent
        imagePathUrl={userInfo?.profile_image}
        to={useOpenModalParam(UserModals.userProfileImageViewModal.name)}
        className="absolute z-10 w-32 h-32 overflow-hidden border-4 rounded-full sm:w-40 sm:h-40 top-20 left-5 border-border-100"
      />
      <div className="relative p-5">
        <div className="flex gap-1 mt-10 text-2xl font-bold">
          <p>
            {`${userInfo?.first_name} 
              ${userInfo.additional_name ? `(${userInfo.additional_name})` : ""}
              ${userInfo?.last_name}`}
          </p>
        </div>
        <p className="max-w-xl text-lg whitespace-pre-line">
          {userInfo?.headline}
        </p>

        <div className="flex items-center gap-1.5">
          <p className="text-sm text-content-slate_500 empty:hidden">
            {userContact.city && <span>{userContact.city}</span>}
            {userContact.province && (
              <>
                {userContact.city && ", "}
                <span>{userContact.province}</span>
              </>
            )}
            {userContact.zip_code && (
              <>
                {(userContact.city || userContact.province) && ", "}
                <span>{userContact.zip_code}</span>
              </>
            )}
            {userContact.country && (
              <>
                {(userContact.city ||
                  userContact.province ||
                  userContact.zip_code) &&
                  ", "}
                <span>{userContact.country}</span>
              </>
            )}
          </p>

          <Link
            to={useOpenModalParam(UserModals.userContactEditModal.name)}
            className="text-sm text-indigo-500 hover:underline"
          >
            Contact
          </Link>
        </div>

        {/* edit link */}
        <LinkEditUiComponent
          className="absolute right-5 top-5"
          to={useOpenModalParam(UserModals.userInfoEditModal.name)}
        />
      </div>
    </section>
  );
}
