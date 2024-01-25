import React, { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { prefixHandler } from "../../../utils/prefixHandler";
import UserContactEditForm from "../../forms/auth/UserContactEdit.Form";
import {
  useApiUserContactFetch,
  useApiUserContactUpdateAsync,
} from "../../../hooks/useApiUserContact";

export default function UserContactEditModalComponent({ setInputChanged }) {
  const { data: userContact } = useApiUserContactFetch();

  const [payload, setPayload] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputChanged(true);
    setPayload({
      ...payload,
      [name]: value,
    });
  };

  const asyncUpdateUserContact = useApiUserContactUpdateAsync();

  // update: can inject the error message on toast error
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("_method", "PATCH");
    for (const key in payload) {
      if (key === "phone") {
        const formattedPhone = prefixHandler("add", payload[key], "+63-");
        formData.append(key, formattedPhone);
      } else {
        formData.append(key, payload[key]);
      }
    }

    toast.promise(asyncUpdateUserContact(formData), {
      pending: "Updating User Contact",
      success: "User contact updated sucessfully",
      error: "Error Updating User contact",
    });
  };

  useEffect(() => {
    setPayload({ ...userContact });
  }, [userContact]);

  return (
    <Fragment>
      <UserContactEditForm
        payload={payload}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      />
    </Fragment>
  );
}
