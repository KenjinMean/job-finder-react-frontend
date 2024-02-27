import React, { Fragment } from "react";
import { Navigate } from "react-router-dom";

import { userRoutes } from "../../../constants/RoutesPath.Constants";
import { UserModals } from "../../../constants/ModalNames.Constants";

import useFileHandling from "../../../hooks/useFileHandling";
import { useOpenModalParam } from "../../../hooks/useModalFunctions";

import ButtonActionUiComponent from "../../UI/ButtonAction.Ui.Component";
import ButtonFileUploadUiComponent from "../../UI/ButtonFileUpload.Ui.Component";
import { useApiUserProfileImageUpdateMutation } from "../../../hooks/useApiUserInfo";

export default function UserProfileImageUpdatePreviewModalComponent() {
  const { handleImageSelect, imageFile, imageDataURL, fromViewPage } =
    useFileHandling(
      useOpenModalParam(UserModals.userProfileImageUpdatePreviewModal.name)
    );

  const { isLoading, mutate: updateProfileImage } =
    useApiUserProfileImageUpdateMutation();

  const handleUpdateProfileImage = () => {
    const formData = new FormData();
    formData.append("_method", "PATCH");
    formData.append("profile_image", imageFile);

    updateProfileImage(formData);
  };

  // prevents user from accessing this page (Profile Image Preview Page) directly.
  // Users must come from the respective profile or cover view pages to ensure a
  // valid context before previewing and updating their images.
  if (!fromViewPage) {
    return <Navigate to={userRoutes.userProfilePage} />;
  }

  return (
    <Fragment>
      <div className="flex justify-center py-5">
        <div className="w-64 h-64 overflow-hidden rounded-full">
          <img
            src={imageDataURL}
            alt="user profile image"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="flex justify-between p-5">
        <ButtonFileUploadUiComponent
          title="Change Image"
          accept="image/*"
          handleFileSelect={handleImageSelect}
        />
        <ButtonActionUiComponent
          text="save"
          loadingText="saving"
          onClick={handleUpdateProfileImage}
          isSubmitting={isLoading}
        />
      </div>
    </Fragment>
  );
}
