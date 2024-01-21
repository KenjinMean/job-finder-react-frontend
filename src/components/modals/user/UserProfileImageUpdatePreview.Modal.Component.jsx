import React, { Fragment } from "react";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";

import { userRoutes } from "../../../constants/RoutesPath.Constants";
import { UserModals } from "../../../constants/ModalNames.Constants";

import useFileHandling from "../../../hooks/useFileHandling";
import { useOpenModalOverlay } from "../../../hooks/useOverlayFunctions";
import { useAsyncUpdateUserProfileImage } from "../../../services/api/useProfileRequesthandler";

import ModalUtil from "../../utils/Modal.Util";
import ButtonFileUploadUiComponent from "../../UI/ButtonFileUpload.Ui.Component";
import ButtonActionPrimaryUiComponent from "../../UI/ButtonActionPrimary.Ui.Component";

export default function UserProfileImageUpdatePreviewModalComponent() {
  const { handleImageSelect, imageFile, imageDataURL, fromViewPage } =
    useFileHandling(
      useOpenModalOverlay(UserModals.userProfileImageUpdatePreviewModal.name)
    );

  const asyncUpdateUserProfileImage = useAsyncUpdateUserProfileImage();

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("_method", "PATCH");
    formData.append("profile_image", imageFile);

    toast.promise(asyncUpdateUserProfileImage(formData), {
      pending: "Updating User Profile Image",
      success: "User Profile image updated sucessfully",
      error: "Error Updating User profile image",
    });
  };

  // prevents user from accessing this page (Profile Image Preview Page) directly.
  // Users must come from the respective profile or cover view pages to ensure a
  // valid context before previewing and updating their images.
  if (!fromViewPage) {
    return <Navigate to={userRoutes.userProfilePage} />;
  }

  return (
    <Fragment>
      {/* body */}
      <div className="flex justify-center">
        <div className="w-64 h-64 overflow-hidden rounded-full">
          <img
            src={imageDataURL}
            alt="user profile image"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      {/* footer */}
      <div className="flex justify-between p-5">
        {/* select file button */}
        <ButtonFileUploadUiComponent
          title="Add Photo"
          accept="image/*"
          handleFileSelect={handleImageSelect}
        />
        <ButtonActionPrimaryUiComponent onClick={handleSubmit}>
          Save
        </ButtonActionPrimaryUiComponent>
      </div>
    </Fragment>
  );
}
