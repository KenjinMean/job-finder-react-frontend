import React, { Fragment, useEffect } from "react";
import { useForm } from "react-hook-form";

import {
  useApiUserContactFetch,
  useApiUserContactUpdate,
} from "../../../hooks/useApiUserContact";

import { parsePhoneNumber } from "../../../utils/parsePhoneNumber";
import UserContactEditForm from "../../forms/auth/UserContactEdit.Form";
import ButtonActionUiComponent from "../../UI/ButtonAction.Ui.Component";

export default function UserContactEditModalComponent({ setInputChanged }) {
  const { data: userContact } = useApiUserContactFetch();
  const { isLoading, mutate: updateUserContact } = useApiUserContactUpdate();

  const form = useForm({
    defaultValues: {
      id: userContact.id,
      city: userContact.city,
      phone: userContact.phone,
      country: userContact.country,
      province: userContact.province,
      zip_code: userContact.zip_code,
      birth_date: userContact.birth_date,
      country_code: userContact.phone
        ? parsePhoneNumber("countryCode", userContact.phone)
        : "+63",
      phone_number:
        userContact.phone && parsePhoneNumber("phoneNumber", userContact.phone),
    },
    mode: "onTouched",
  });

  const {
    formState: { isDirty },
  } = form;

  const handleContactSubmit = (data) => {
    const phoneNumber = data.phone_number
      ? `${data.country_code}-${data.phone_number}`
      : "";

    data.phone = phoneNumber;
    delete data.country_code;
    delete data.phone_number;

    const payload = {
      ...data,
      _method: "PATCH",
    };

    updateUserContact(payload);
  };

  useEffect(() => {
    setInputChanged(isDirty);
  }, [isDirty]);

  return (
    <Fragment>
      <UserContactEditForm
        name="contactForm"
        form={form}
        isSubmitting={isLoading}
        handleContactSubmit={handleContactSubmit}
      />
      <div className="flex justify-end p-5">
        <ButtonActionUiComponent
          form="contactForm"
          text="Update"
          loadingText="Updating"
          isSubmitting={isLoading}
        />
      </div>
    </Fragment>
  );
}
