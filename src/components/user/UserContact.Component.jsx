import React from "react";
import LinkEditUiComponent from "../UI/LinkEdit.Ui.Component";

import {
  telephoneIcon,
  emailIcon,
  locationIcon,
  birthDayIcon,
} from "../../assets/icons";
import { useFetchUserContact } from "../../services/api/useContactRequestHandler";
import { useAuthenticationStore } from "../../services/state/AuthenticationStore";
import { useOpenModalOverlay } from "../../hooks/useOverlayFunctions";
import { UserModals } from "../../constants/ModalNames.Constants";

export default function UserContactComponent() {
  const { authenticatedUser } = useAuthenticationStore();
  const { data: userContact } = useFetchUserContact();

  return (
    <section className="relative w-full p-5 overflow-hidden border sm:rounded-lg border-border-100 bg-background-gray200 text-content-black">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <div className="flex flex-col gap-0.5 pt-2">
        <div className="flex gap-5">
          <img
            src={emailIcon.path}
            alt={emailIcon.attribution}
            className="w-5 h-5"
          />
          <p>{authenticatedUser?.email}</p>
        </div>
        <div className="flex gap-5">
          <img
            src={telephoneIcon.path}
            alt={telephoneIcon.attribution}
            className="w-5 h-5"
          />
          <p>{userContact?.phone}</p>
        </div>
        <div className="flex gap-5">
          <img
            src={locationIcon.path}
            alt={locationIcon.attribution}
            className="w-5 h-5"
          />
          <p>{`${userContact.city}, ${userContact.province},  ${userContact.zip_code}, ${userContact.country}`}</p>
        </div>
        <div className="flex gap-5">
          <img
            src={birthDayIcon.path}
            alt={birthDayIcon.attribution}
            className="w-5 h-5"
          />
          <p>{userContact?.birth_date}</p>
        </div>
      </div>
      <div className="absolute flex items-center gap-1 right-5 top-5">
        <LinkEditUiComponent
          to={useOpenModalOverlay(UserModals.userContactEditModal.name)}
          // preventScrollReset={true}
        />
      </div>
    </section>
  );
}
