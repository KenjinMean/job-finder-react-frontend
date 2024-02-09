import React, { useState } from "react";
import { toast } from "react-toastify";
import ModalUtil from "../../utils/Modal.Util";

import UserEducationForm from "../../forms/auth/UserEducation.Form";
import { useApiUserEducationStore } from "../../../hooks/useApiUserEducation";

/* ----------------------------------------------------------- */
export default function UserEducationAddModalComponent() {
  const [payload, setPayload] = useState({});
  const createUserEducation = useApiUserEducationStore();

  /* ----------------------------------------------------------- */
  const handleInputChange = (e) => {
    setPayload({
      ...payload,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(payload);
    toast.promise(createUserEducation(payload), {
      pending: "Adding Education",
      success: "Education added successfully",
      error: "Error adding education",
    });
  };

  /* ----------------------------------------------------------- */
  return (
    <ModalUtil modalTitle="Add Education" size="small">
      <UserEducationForm
        payload={payload}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      />
    </ModalUtil>
  );
}
