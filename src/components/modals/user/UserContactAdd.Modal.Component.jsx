import React, { Fragment, useEffect } from "react";
import { useForm } from "react-hook-form";

import { useApiUserContactStore } from "../../../hooks/useApiUserContact";

import UserContactEditForm from "../../forms/auth/UserContactEdit.Form";
import ButtonActionUiComponent from "../../UI/ButtonAction.Ui.Component";

export default function UserContactAddModalComponent({ setInputChanged }) {
  const { isLoading, mutate: storeUserContact } = useApiUserContactStore();

  const form = useForm({
    defaultValues: {
      city: "",
      phone: "",
      country: "",
      province: "",
      zip_code: "",
      birth_date: "",
      phone_number: "",
      country_code: "+63",
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

    storeUserContact(data);
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
