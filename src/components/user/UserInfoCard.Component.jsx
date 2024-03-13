import React from "react";
import { Link } from "react-router-dom";

import { UserModals } from "../../constants/ModalNames.Constants";

import { useApiUserInfoFetch } from "../../hooks/useApiUserInfo";
import { useOpenModalParam } from "../../hooks/useModalFunctions";

import LinkEditUiComponent from "../UI/LinkEdit.Ui.Component";
import CardHeadingUiComponent from "../UI/CardHeading.Ui.Component";
import LocationTagUiComponent from "../UI/LocationTag.Ui.Component";
import { useApiUserContactFetch } from "../../hooks/useApiUserContact";
import { useAuthenticationStore } from "../../services/state/AuthenticationStore";
import ClickableLinkedImageUiComponent from "../UI/ClickableLinkedImage.Ui.Component";

export default function UserInfoCardComponent() {
  const { data: userInfo } = useApiUserInfoFetch();
  const { data: userContact } = useApiUserContactFetch();
  const { authenticatedUser } = useAuthenticationStore();

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
        <div className="flex flex-wrap items-center mt-10 sm:gap-5">
          <CardHeadingUiComponent
            title={`${userInfo?.first_name} 
          ${userInfo.additional_name ? `(${userInfo.additional_name})` : ""}
          ${userInfo?.last_name}`}
          />
          <div className="flex-wrap items-center space-x-3">
            <span>{authenticatedUser.email}</span>

            {!authenticatedUser.is_email_verified && (
              <Link className="px-4 text-xl transition-all border rounded-full text-accent-blue500 hover:bg-accent-blue500 hover:text-content-black_inverted border-accent-blue500">
                Verify Now
              </Link>
            )}
          </div>
        </div>

        <p className="max-w-xl text-lg whitespace-pre-line">
          {userInfo?.headline}
        </p>

        <div className="flex items-center gap-1.5 flex-wrap">
          <LocationTagUiComponent
            city={userContact.city}
            province={userContact.province}
            zipCode={userContact.zip_code}
            country={userContact.country}
          />

          <Link
            to={useOpenModalParam(UserModals.userContactEditModal.name)}
            className="text-sm text-indigo-500 hover:underline"
          >
            Contact
          </Link>
        </div>

        {/* edit user info link */}
        <LinkEditUiComponent
          className="absolute right-5 top-5"
          to={useOpenModalParam(UserModals.userInfoEditModal.name)}
        />
      </div>
    </section>
  );
}
