import React from "react";
import LinkEditUiComponent from "../UI/LinkEdit.Ui.Component";

import { isObjectEmpty } from "../../utils/isObjectEmpty";
import { UserModals } from "../../constants/ModalNames.Constants";
import { useOpenModalParam } from "../../hooks/useModalFunctions";
import { useApiUserContactFetch } from "../../hooks/useApiUserContact";
import { useAuthenticationStore } from "../../services/state/AuthenticationStore";

import LinkAddUiComponent from "../UI/LinkAdd.Ui.Component";
import PhoneTagUiComponent from "../UI/PhoneTag.Ui.Component";
import EmailTagUiComponent from "../UI/EmailTag.Ui.Component";
import LocationTagUiComponent from "../UI/LocationTag.Ui.Component";
import BirthDateTagUiComponent from "../UI/BirthDateTag.Ui.Component";
import CardContainerUitl from "../utils/CardContainer.Uitl";
import CardHeadingUiComponent from "../UI/CardHeading.Ui.Component";

export default function UserContactCardComponent() {
  const { authenticatedUser } = useAuthenticationStore();
  const { data: userContact } = useApiUserContactFetch();
  const { city, province, zip_code, country, phone } = userContact;

  return (
    <CardContainerUitl>
      <CardHeadingUiComponent title="Contact" />
      <div className="flex flex-col gap-0.5 pt-2">
        <EmailTagUiComponent email={authenticatedUser.email} />

        {!isObjectEmpty(userContact) && (
          <div>
            <PhoneTagUiComponent phone={phone} />
            <LocationTagUiComponent
              city={city}
              province={province}
              zipCode={zip_code}
              country={country}
            />
            <BirthDateTagUiComponent birthDate={userContact.birth_date} />
          </div>
        )}
      </div>

      <div className="absolute top-5 right-5">
        {isObjectEmpty(userContact) ? (
          <LinkAddUiComponent
            to={useOpenModalParam(UserModals.UserContactAddModal.name)}
          />
        ) : (
          <LinkEditUiComponent
            to={useOpenModalParam(UserModals.userContactEditModal.name)}
          />
        )}
      </div>
    </CardContainerUitl>
  );
}
