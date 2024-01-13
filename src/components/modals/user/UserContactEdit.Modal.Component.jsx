import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import {
  useAsyncUpdateUserContact,
  useFetchUserContact,
} from "../../../services/api/useContactRequestHandler";

import ModalUtil from "../../utils/Modal.Util";
import UserContactEditForm from "../../forms/auth/UserContactEdit.Form";
import { prefixHandler } from "../../../utils/prefixHandler";

export default function UserContactEditModalComponent() {
  const { data: userContact } = useFetchUserContact();

  const [payload, setPayload] = useState({});
  const [isInfoChanged, setInfoChanged] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInfoChanged(true);
    setPayload({
      ...payload,
      [name]: e.target.value,
    });
  };

  const asyncUpdateUserContact = useAsyncUpdateUserContact();

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
    // console.log(formData);
  };

  useEffect(() => {
    setPayload({ ...userContact });
  }, [userContact]);

  return (
    <ModalUtil
      size="small"
      modalTitle="Edit Contact"
      isInputChanged={isInfoChanged}
    >
      <UserContactEditForm
        payload={payload}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      />
    </ModalUtil>
  );
}
