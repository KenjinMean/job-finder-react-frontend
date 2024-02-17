import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

import {
  useApiUserEducationDelete,
  useApiUserEducationUpdate,
  useApiUserEducationsFetch,
} from "../../../hooks/useApiUserEducation";
import { extractUrlParams } from "../../../utils/extractUrlParams";

import ModalUtil from "../../utils/Modal.Util";
import UserEducationForm from "../../forms/auth/UserEducation.Form";

/* ----------------------------------------------------------- */
export default function UserEducationEditModalComponent() {
  const location = useLocation();
  const params = extractUrlParams(location);

  /* ----------------------------------------------------------- */
  const [payload, setPayload] = useState(null);

  const { data: userEducations } = useApiUserEducationsFetch();
  const userEducation = userEducations[params.education_index] || {};

  /* ----------------------------------------------------------- */
  const deleteEducationFunction = useApiUserEducationDelete();
  const updateEducationFunction = useApiUserEducationUpdate();

  /* ----------------------------------------------------------- */
  const handleInputChange = (e) => {
    setPayload({
      ...payload,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitEducation = (e) => {
    e.preventDefault();

    const formData = new FormData();
    // method spoofing: appending patch method to simulate patch request
    formData.append("_method", "PATCH");
    for (const key in payload) {
      formData.append(key, payload[key]);
    }

    toast.promise(updateEducationFunction(userEducation.id, formData), {
      pending: "Updating Education",
      success: "Education updated successfully",
      error: "Error updating education",
    });
  };

  const handleDeleteEducation = () => {
    toast.promise(deleteEducationFunction(userEducation.id), {
      pending: "Deleting Education",
      success: "Education deleted successfully",
      error: "Error deleting education",
    });
  };

  useEffect(() => {
    setPayload({ ...userEducation });
  }, [userEducation]);

  /* ----------------------------------------------------------- */
  return (
    <ModalUtil modalTitle="Edit Education" size="small">
      <div className="relative">
        <UserEducationForm
          payload={payload}
          handleSubmit={handleSubmitEducation}
          handleInputChange={handleInputChange}
        />
        <button
          onClick={handleDeleteEducation}
          className="absolute bottom-5 left-5"
        >
          delete
        </button>
      </div>
    </ModalUtil>
  );
}
